from fastapi import APIRouter, HTTPException
from schemas.ask import AskRequest, AskResponse
from services.marine_data import get_marine_data_by_coordinates, calculate_safety_level
from services.location_extractor import extract_location_from_question
from services.geocoding import geocode_location
from llm.openai_client import get_ai_response
import logging

router = APIRouter(prefix="/ask", tags=["Ask"])
logger = logging.getLogger(__name__)

@router.post("/", response_model=AskResponse)
def ask_question(request: AskRequest):
    try:
        print(f"\n{'='*60}")
        print(f" ASK REQUEST RECEIVED")
        print(f"   Question: {request.question}")
        print(f"{'='*60}")
        
        logger.info(f"Received question: {request.question}")
        
        # Step 1: Extract location from question
        location_name = extract_location_from_question(request.question)
        
        if not location_name:
            print(f"\n❌ PROCESSING STOPPED - No location found")
            print(f"{'='*60}\n")
            return AskResponse(
                answer="I couldn't identify a specific location in your question. Please mention a location, like 'Is it safe to sail in Santa Cruz today?'"
            )
        
        # Step 2: Geocode the location
        coordinates = geocode_location(location_name)
        
        if not coordinates:
            print(f"\n❌ PROCESSING STOPPED - Geocoding failed")
            print(f"{'='*60}\n")
            return AskResponse(
                answer=f"I couldn't find the location '{location_name}'. Please check the spelling or try a different location."
            )
        
        lat, lng = coordinates
        
        print(f"\n{'='*60}")
        print(f"🌊 PROCEEDING TO MARINE DATA FETCH")
        print(f"   Using coordinates: ({lat}, {lng})")
        print(f"{'='*60}")
        
        # Step 3: Fetch marine data using coordinates directly
        marine_data = get_marine_data_by_coordinates(lat, lng)
        
        # Step 4: Get AI response
        print(f"\n{'='*60}")
        print(f"🤖 SENDING TO AI FOR RESPONSE GENERATION")
        print(f"{'='*60}")
        
        ai_response = get_ai_response(request.question, marine_data)
        
        # Step 5: Extract specific marine data fields for JSON response
        wave_height = marine_data.get("wave_height_m")
        wind_speed_mps = marine_data.get("wind_speed_mps")
        wind_speed_knots = wind_speed_mps * 1.94384 if wind_speed_mps else None
        wind_direction = marine_data.get("wind_deg")
        safety_level = calculate_safety_level(marine_data)
        
        print(f"\n✅ PROCESSING COMPLETE")
        print(f"{'='*60}\n")
        
        return AskResponse(
            answer=ai_response,
            wave_height=wave_height,
            wind_speed=wind_speed_knots,
            wind_direction=wind_direction,
            safety_level=safety_level
        )
        
    except Exception as e:
        print(f"\n❌ PROCESSING ERROR: {e}")
        print(f"{'='*60}\n")
        logger.error(f"Error in /ask: {e}")
        raise HTTPException(status_code=500, detail="Internal server error") 