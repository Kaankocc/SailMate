import os
import logging
from openai import OpenAI
from typing import Dict, Any
from dotenv import load_dotenv

load_dotenv()  # Ensure environment variables are loaded
logger = logging.getLogger(__name__)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))  # Explicitly pass API key

def get_ai_response(question: str, marine_data: Dict[str, Any]) -> str:
    try:
        # Format marine data for better AI understanding
        formatted_data = format_marine_data(marine_data)

        messages = [
            {"role": "system", "content": "You are an expert sailing assistant with access to comprehensive marine weather data."},
            {"role": "user", "content": f"Current Marine Conditions:\n{formatted_data}"},
            {"role": "user", "content": f"Question: {question}\n\nProvide a helpful, accurate response based on the marine data above. Consider wind conditions, wave heights, visibility, and other relevant factors for sailing safety."}
        ]

        logger.info("Sending prompt to OpenAI API.")
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=200,
            temperature=0.7,
        )
        answer = response.choices[0].message.content.strip()
        logger.info("Received response from OpenAI API.")
        return answer

    except Exception as e:
        logger.error(f"OpenAI API error: {e}")
        return "Sorry, I couldn't process your request right now."


def format_marine_data(data: Dict[str, Any]) -> str:
    """Format marine data into a readable string for the AI."""
    if "error" in data:
        return f"Error: {data['error']}"

    formatted = []

    # Weather conditions
    if "wind_speed_mps" in data:
        wind_knots = data["wind_speed_mps"] * 1.94384 if data["wind_speed_mps"] else 0
        formatted.append(f"Wind: {round(wind_knots, 1)} knots")

    if "wind_deg" in data:
        formatted.append(f"Wind Direction: {data['wind_deg']}°")

    if "visibility_m" in data:
        formatted.append(f"Visibility: {data['visibility_m']} meters")

    # Marine conditions
    if "wave_height_m" in data:
        formatted.append(f"Wave Height: {data['wave_height_m']} meters")

    if "wave_period_s" in data:
        formatted.append(f"Wave Period: {data['wave_period_s']} seconds")

    if "wave_direction_deg" in data:
        formatted.append(f"Wave Direction: {data['wave_direction_deg']}°")

    if "swell_wave_height_m" in data:
        formatted.append(f"Swell Height: {data['swell_wave_height_m']} meters")

    if "sea_surface_temp_c" in data:
        formatted.append(f"Sea Temperature: {data['sea_surface_temp_c']}°C")

    if "temperature_c" in data:
        formatted.append(f"Air Temperature: {data['temperature_c']}°C")

    if "weather_desc" in data:
        formatted.append(f"Weather: {data['weather_desc']}")

    return "\n".join(formatted) if formatted else "No marine data available"
