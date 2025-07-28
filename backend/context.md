# sailmate-backend Project Structure

This backend powers an AI-driven sailing assistant app. It uses FastAPI, OpenAI, and is organized for scalability and clarity.

## Folder & File Overview

- `main.py`: App entry point. Initializes FastAPI, includes routers, and sets up logging.
- `routers/`: API endpoints (FastAPI routers). Each file = one logical API group.
- `services/`: Business logic, data fetching, and orchestration. Contains marine/weather data logic and safety checks.
- `schemas/`: Pydantic models for request/response validation and typing.
- `llm/`: OpenAI integration logic. Handles prompt construction and LLM calls.
- `utils/`: Helper functions and (future) API wrappers. Place for reusable utilities.
- `.env`: Environment variables (e.g., OpenAI API key). Not committed to version control.

## Endpoints

- `POST /ask`: Receives a user question, fetches comprehensive marine weather data from dual APIs, sends formatted data to OpenAI, returns AI response.
- `POST /check_safety`: Receives location and boat info, returns detailed weather/marine data and an enhanced safety rating based on wind, visibility, and wave conditions.

## Integration Points

- **OpenWeatherMap API**: Integrated in `services/marine_data.py` for atmospheric conditions (wind, visibility, temperature, humidity, pressure).
- **Open-Meteo Marine API**: Integrated for marine-specific data (wave height, period, direction, swell, sea surface temperature).
- **OpenAI**: Implemented in `llm/openai_client.py` with enhanced prompt formatting for comprehensive marine data.

## Notes

- All code is type-annotated, modular, and includes logging and error handling for production-readiness.
- Extend by adding new routers/services as needed.
