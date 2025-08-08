import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import ask, check_safety
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI(title="SailMate Backend", description="AI-powered sailing assistant backend.")

# Environment-aware CORS configuration
def get_cors_origins():
    # Get environment variable for allowed origins
    allowed_origins = ["*"]
    
    # Default origins for development and production
    default_origins = [
        "http://localhost:8000",  # Local development (frontend)
        "http://127.0.0.1:8000",  # Local development alternative
        "http://[::]:8000",       # IPv6 localhost
        "http://localhost:8080",  # Alternative local development port
        "http://127.0.0.1:8080",  # Alternative local development port
        "https://your-frontend-app.vercel.app",  # Replace with your Vercel domain
    ]
    
    # Combine and filter out empty strings
    all_origins = list(set(allowed_origins + default_origins))
    return [origin.strip() for origin in all_origins if origin.strip()]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=get_cors_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(ask.router)
app.include_router(check_safety.router)

@app.get("/ping")
def ping():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 