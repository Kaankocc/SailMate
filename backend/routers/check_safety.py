from fastapi import APIRouter, HTTPException
from schemas.check_safety import CheckSafetyRequest, CheckSafetyResponse
from services.marine_data import get_weather_and_safety
import logging

router = APIRouter(prefix="/check_safety", tags=["Safety"])
logger = logging.getLogger(__name__)

@router.post("/", response_model=CheckSafetyResponse)
def check_safety(request: CheckSafetyRequest):
    try:
        logger.info(f"Received safety check for location: {request.location}, boat: {request.boat_info}")
        weather_data, safety_rating = get_weather_and_safety(request)
        return CheckSafetyResponse(weather=weather_data, safety_rating=safety_rating)
    except Exception as e:
        logger.error(f"Error in /check_safety: {e}")
        raise HTTPException(status_code=500, detail="Internal server error") 