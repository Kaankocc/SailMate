import logging
from fastapi import FastAPI
from routers import ask, check_safety
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI(title="SailMate Backend", description="AI-powered sailing assistant backend.")

# Include routers
app.include_router(ask.router)
app.include_router(check_safety.router)

@app.get("/ping")
def ping():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 