import os
import requests
import logging
from typing import Optional, Tuple
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

OPENCAGE_API_KEY = os.getenv("OPENCAGE_API_KEY")
OPENCAGE_API_URL = "https://api.opencagedata.com/geocode/v1/json"

def geocode_location(location_name: str) -> Optional[Tuple[float, float]]:
    """
    Convert location name to latitude/longitude coordinates using OpenCage API.
    Returns (latitude, longitude) tuple or None if geocoding fails.
    """
    print(f"\n{'='*60}")
    print(f"🗺️  GEOCODING REQUEST - Location: {location_name}")
    print(f"{'='*60}")
    
    try:
        params = {
            "q": location_name,
            "key": OPENCAGE_API_KEY,
            "limit": 1,  # Get only the best match
            "no_annotations": 1  # Reduce response size
        }

        print(f"\n🌐 SENDING TO OPENCAGE API...")
        response = requests.get(OPENCAGE_API_URL, params=params)
        
        if response.status_code != 200:
            print(f"❌ OPENCAGE API ERROR: {response.status_code}")
            print(f"{'='*60}\n")
            logger.error(f"OpenCage API error: {response.status_code}")
            return None

        data = response.json()
        
        if not data.get("results"):
            print(f"❌ NO RESULTS FOUND FOR: {location_name}")
            print(f"{'='*60}\n")
            logger.warning(f"No results found for location: {location_name}")
            return None

        # Get the first (best) result
        result = data["results"][0]
        lat = result["geometry"]["lat"]
        lng = result["geometry"]["lng"]
        
        # Get formatted address for display
        formatted_address = result.get("formatted", location_name)
        
        print(f"\n✅ GEOCODING SUCCESSFUL:")
        print(f"   Location: {location_name}")
        print(f"   Address: {formatted_address}")
        print(f"   Coordinates: ({lat}, {lng})")
        print(f"{'='*60}\n")
        
        logger.info(f"Geocoded '{location_name}' to ({lat}, {lng})")
        return (lat, lng)

    except Exception as e:
        print(f"❌ GEOCODING ERROR: {e}")
        print(f"{'='*60}\n")
        logger.error(f"Error geocoding location '{location_name}': {e}")
        return None 