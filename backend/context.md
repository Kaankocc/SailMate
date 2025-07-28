# SeaMate Backend Project Structure

This backend powers an AI-driven sailing assistant app. It uses FastAPI, OpenAI, and is organized for scalability and clarity.

## Folder & File Overview

- `main.py`: App entry point. Initializes FastAPI, includes routers, and sets up logging with a health check endpoint.
- `routers/`: API endpoints (FastAPI routers). Each file = one logical API group.
- `services/`: Business logic, data fetching, and orchestration. Contains marine/weather data logic, location extraction, geocoding, and safety checks.
- `schemas/`: Pydantic models for request/response validation and typing.
- `llm/`: OpenAI integration logic. Handles prompt construction and LLM calls.
- `utils/`: Helper functions and (future) API wrappers. Place for reusable utilities.
- `.env`: Environment variables (e.g., OpenAI API key, OpenWeather API key, OpenCage API key). Not committed to version control.

## Endpoints

- `GET /ping`: Health check endpoint that returns status.
- `POST /ask`: Receives a user question, extracts location using AI, geocodes the location, fetches comprehensive marine weather data from dual APIs, sends formatted data to OpenAI, returns AI response.
- `POST /check_safety`: Receives location coordinates and boat info, returns detailed weather/marine data and an enhanced safety rating based on wind, visibility, and wave conditions.

## Integration Points

- **OpenWeatherMap API**: Integrated in `services/marine_data.py` for atmospheric conditions (wind, visibility, temperature, humidity, pressure).
- **Open-Meteo Marine API**: Integrated for marine-specific data (wave height, period, direction, swell, sea surface temperature).
- **OpenCage Geocoding API**: Integrated in `services/geocoding.py` for converting location names to coordinates.
- **OpenAI**: Implemented in `llm/openai_client.py` and `services/location_extractor.py` with enhanced prompt formatting for comprehensive marine data and location extraction.

## Key Features

- **Location Extraction**: Uses OpenAI to intelligently extract location names from natural language questions.
- **Geocoding**: Converts location names to precise coordinates using OpenCage API.
- **Dual Weather APIs**: Combines OpenWeatherMap (atmospheric) and Open-Meteo Marine (marine-specific) data for comprehensive weather information.
- **Enhanced Safety Rating**: Calculates safety scores based on wind conditions (0-3 points), visibility (0-2 points), and wave conditions (0-3 points) with detailed logging.
- **Comprehensive Logging**: Extensive console output for debugging and monitoring API responses.

## Notes

- All code is type-annotated, modular, and includes logging and error handling for production-readiness.
- The system provides detailed console output for monitoring API calls and data processing.
- Extend by adding new routers/services as needed.
