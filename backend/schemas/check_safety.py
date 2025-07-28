from pydantic import BaseModel
from typing import Dict, Any

class CheckSafetyRequest(BaseModel):
    location: str
    latitude: float
    longitude: float
    boat_info: Dict[str, Any]

class CheckSafetyResponse(BaseModel):
    weather: Dict[str, Any]
    safety_rating: str 