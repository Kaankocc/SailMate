from pydantic import BaseModel
from typing import Optional

class AskRequest(BaseModel):
    question: str

class AskResponse(BaseModel):
    answer: str
    wave_height: Optional[float] = None
    wind_speed: Optional[float] = None
    wind_direction: Optional[int] = None
    safety_level: Optional[str] = None 