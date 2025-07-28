import os
import requests
from typing import Dict, Any, Tuple
from dotenv import load_dotenv
from schemas.ask import AskRequest
from schemas.check_safety import CheckSafetyRequest

load_dotenv()

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
OPENWEATHER_API_URL = "https://api.openweathermap.org/data/3.0/onecall"
OPEN_METEO_API_URL = "https://marine-api.open-meteo.com/v1/marine"

def get_open_meteo_marine(lat: float, lon: float) -> Dict[str, float]:
    """Fetches marine weather data from Open-Meteo Marine API for the current hour."""
    params = {
        "latitude": lat,
        "longitude": lon,
        "hourly": "wave_height,wave_period,wave_direction,swell_wave_height,sea_surface_temperature,wind_wave_height",
        "wind_speed_unit": "kn"
    }

    response = requests.get(OPEN_METEO_API_URL, params=params)
    if response.status_code != 200:
        return {"error": "Failed to fetch data from Open-Meteo"}

    data = response.json()

    try:
        return {
            "wave_height_m": data["hourly"]["wave_height"][0],
            "wave_period_s": data["hourly"]["wave_period"][0],
            "wave_direction_deg": data["hourly"]["wave_direction"][0],
            "swell_wave_height_m": data["hourly"]["swell_wave_height"][0],
            "sea_surface_temp_c": data["hourly"]["sea_surface_temperature"][0],
            "wind_wave_height_m": data["hourly"]["wind_wave_height"][0],
            "marine_time": data["hourly"]["time"][0]
        }
    except (KeyError, IndexError):
        return {"error": "Invalid marine data format"}


def get_marine_data_by_coordinates(lat: float, lon: float) -> Dict[str, Any]:
    """
    Get marine data using coordinates directly (for the new ask flow).
    """
    print(f"\n{'='*60}")
    print(f"🌊 MARINE DATA REQUEST - Location: {lat}, {lon}")
    print(f"{'='*60}")

    # --- OpenWeather API call ---
    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric",
        "exclude": "minutely,daily,alerts"
    }

    weather_response = requests.get(OPENWEATHER_API_URL, params=params)
    if weather_response.status_code != 200:
        print("❌ OpenWeather API Error")
        return {"error": "Failed to fetch data from OpenWeather"}

    weather_data = weather_response.json().get("current", {})
    
    print(f"\n🌤️  OPENWEATHER API RESPONSE:")
    wind_speed = weather_data.get('wind_speed')
    wind_deg = weather_data.get('wind_deg')
    visibility = weather_data.get('visibility')
    temp = weather_data.get('temp')
    humidity = weather_data.get('humidity')
    pressure = weather_data.get('pressure')
    weather_desc = weather_data.get('weather', [{}])[0].get('description', 'N/A')
    
    print(f"   Wind Speed: {wind_speed} m/s {'❌ MISSING' if wind_speed is None else ''}")
    print(f"   Wind Direction: {wind_deg}° {'❌ MISSING' if wind_deg is None else ''}")
    print(f"   Visibility: {visibility} meters {'❌ MISSING' if visibility is None else ''}")
    print(f"   Temperature: {temp}°C {'❌ MISSING' if temp is None else ''}")
    print(f"   Humidity: {humidity}% {'❌ MISSING' if humidity is None else ''}")
    print(f"   Pressure: {pressure} hPa {'❌ MISSING' if pressure is None else ''}")
    print(f"   Weather: {weather_desc} {'❌ MISSING' if weather_desc == 'N/A' else ''}")

    # --- Open-Meteo Marine API call ---
    marine_data = get_open_meteo_marine(lat, lon)
    if "error" in marine_data:
        print(f"❌ Open-Meteo Marine API Error: {marine_data['error']}")
        return {"error": marine_data["error"]}

    print(f"\n🌊 OPEN-METEO MARINE API RESPONSE:")
    wave_height = marine_data.get('wave_height_m')
    wave_period = marine_data.get('wave_period_s')
    wave_direction = marine_data.get('wave_direction_deg')
    swell_height = marine_data.get('swell_wave_height_m')
    sea_temp = marine_data.get('sea_surface_temp_c')
    wind_wave_height = marine_data.get('wind_wave_height_m')
    marine_time = marine_data.get('marine_time')
    
    print(f"   Wave Height: {wave_height} meters {'❌ MISSING' if wave_height is None else ''}")
    print(f"   Wave Period: {wave_period} seconds {'❌ MISSING' if wave_period is None else ''}")
    print(f"   Wave Direction: {wave_direction}° {'❌ MISSING' if wave_direction is None else ''}")
    print(f"   Swell Height: {swell_height} meters {'❌ MISSING' if swell_height is None else ''}")
    print(f"   Sea Surface Temp: {sea_temp}°C {'❌ MISSING' if sea_temp is None else ''}")
    print(f"   Wind Wave Height: {wind_wave_height} meters {'❌ MISSING' if wind_wave_height is None else ''}")
    print(f"   Time: {marine_time} {'❌ MISSING' if marine_time is None else ''}")

    # --- Combine both responses ---
    combined_data = {
        # OpenWeather
        "wind_speed_mps": weather_data.get("wind_speed"),
        "wind_deg": weather_data.get("wind_deg"),
        "visibility_m": weather_data.get("visibility"),
        "weather_desc": weather_data.get("weather", [{}])[0].get("description"),
        "temperature_c": weather_data.get("temp"),
        "humidity": weather_data.get("humidity"),
        "pressure": weather_data.get("pressure"),

        # Open-Meteo Marine
        **marine_data
    }

    print(f"\n✅ COMBINED DATA READY FOR PROCESSING")
    print(f"{'='*60}\n")

    return combined_data


def get_weather_and_safety(request: CheckSafetyRequest) -> Tuple[Dict[str, Any], str]:
    lat = request.latitude
    lon = request.longitude

    print(f"\n{'='*60}")
    print(f"🛡️  SAFETY CHECK REQUEST - Location: {lat}, {lon}")
    print(f"{'='*60}")

    # --- OpenWeather API call ---
    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric",
        "exclude": "minutely,daily,alerts"
    }

    weather_response = requests.get(OPENWEATHER_API_URL, params=params)
    if weather_response.status_code != 200:
        print("❌ OpenWeather API Error")
        return {"error": "Failed to fetch data from OpenWeather"}, "Unknown"

    weather_data = weather_response.json().get("current", {})
    
    print(f"\n🌤️  OPENWEATHER API RESPONSE:")
    wind_speed = weather_data.get('wind_speed')
    wind_deg = weather_data.get('wind_deg')
    visibility = weather_data.get('visibility')
    temp = weather_data.get('temp')
    humidity = weather_data.get('humidity')
    pressure = weather_data.get('pressure')
    weather_desc = weather_data.get('weather', [{}])[0].get('description', 'N/A')
    
    print(f"   Wind Speed: {wind_speed} m/s {'❌ MISSING' if wind_speed is None else ''}")
    print(f"   Wind Direction: {wind_deg}° {'❌ MISSING' if wind_deg is None else ''}")
    print(f"   Visibility: {visibility} meters {'❌ MISSING' if visibility is None else ''}")
    print(f"   Temperature: {temp}°C {'❌ MISSING' if temp is None else ''}")
    print(f"   Humidity: {humidity}% {'❌ MISSING' if humidity is None else ''}")
    print(f"   Pressure: {pressure} hPa {'❌ MISSING' if pressure is None else ''}")
    print(f"   Weather: {weather_desc} {'❌ MISSING' if weather_desc == 'N/A' else ''}")
    
    # --- Open-Meteo Marine API call ---
    marine_data = get_open_meteo_marine(lat, lon)
    if "error" in marine_data:
        print(f"❌ Open-Meteo Marine API Error: {marine_data['error']}")
        return {"error": marine_data["error"]}, "Unknown"

    print(f"\n🌊 OPEN-METEO MARINE API RESPONSE:")
    wave_height = marine_data.get('wave_height_m')
    wave_period = marine_data.get('wave_period_s')
    wave_direction = marine_data.get('wave_direction_deg')
    swell_height = marine_data.get('swell_wave_height_m')
    sea_temp = marine_data.get('sea_surface_temp_c')
    wind_wave_height = marine_data.get('wind_wave_height_m')
    marine_time = marine_data.get('marine_time')
    
    print(f"   Wave Height: {wave_height} meters {'❌ MISSING' if wave_height is None else ''}")
    print(f"   Wave Period: {wave_period} seconds {'❌ MISSING' if wave_period is None else ''}")
    print(f"   Wave Direction: {wave_direction}° {'❌ MISSING' if wave_direction is None else ''}")
    print(f"   Swell Height: {swell_height} meters {'❌ MISSING' if swell_height is None else ''}")
    print(f"   Sea Surface Temp: {sea_temp}°C {'❌ MISSING' if sea_temp is None else ''}")
    print(f"   Wind Wave Height: {wind_wave_height} meters {'❌ MISSING' if wind_wave_height is None else ''}")
    print(f"   Time: {marine_time} {'❌ MISSING' if marine_time is None else ''}")

    # --- Combine weather and marine data ---
    wind_speed = weather_data.get("wind_speed", 0)  # in m/s
    wind_knots = wind_speed * 1.94384
    visibility = weather_data.get("visibility", 10000)  # in meters
    description = weather_data.get("weather", [{}])[0].get("description", "No data")
    wave_height = marine_data.get("wave_height_m", 0)
    swell_height = marine_data.get("swell_wave_height_m", 0)

    weather_info = {
        "wind_speed_knots": round(wind_knots, 2),
        "wind_deg": weather_data.get("wind_deg"),
        "visibility_m": visibility,
        "weather_desc": description,
        "wave_height_m": wave_height,
        "swell_height_m": swell_height,
        "wave_period_s": marine_data.get("wave_period_s"),
        "sea_surface_temp_c": marine_data.get("sea_surface_temp_c")
    }

    # Enhanced safety rating logic considering marine conditions
    safety_score = 0
    
    # Wind conditions (0-3 points)
    if wind_knots < 15:
        safety_score += 3
    elif wind_knots < 25:
        safety_score += 2
    elif wind_knots < 35:
        safety_score += 1
    
    # Visibility conditions (0-2 points)
    if visibility >= 10000:
        safety_score += 2
    elif visibility >= 5000:
        safety_score += 1
    
    # Wave conditions (0-3 points)
    if wave_height < 1.0:
        safety_score += 3
    elif wave_height < 2.0:
        safety_score += 2
    elif wave_height < 3.0:
        safety_score += 1
    
    # Determine safety rating based on total score
    if safety_score >= 7:
        safety = "Safe"
    elif safety_score >= 4:
        safety = "Caution"
    else:
        safety = "Unsafe"

    print(f"\n🛡️  SAFETY CALCULATION:")
    print(f"   Wind Score: {3 if wind_knots < 15 else 2 if wind_knots < 25 else 1 if wind_knots < 35 else 0}/3")
    print(f"   Visibility Score: {2 if visibility >= 10000 else 1 if visibility >= 5000 else 0}/2")
    print(f"   Wave Score: {3 if wave_height < 1.0 else 2 if wave_height < 2.0 else 1 if wave_height < 3.0 else 0}/3")
    print(f"   Total Score: {safety_score}/8")
    print(f"   Safety Rating: {safety}")
    print(f"{'='*60}\n")

    return weather_info, safety
