import sys
import os

# Add the backend directory to Python path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'backend'))

from backend.main import app

# Vercel expects a handler function
def handler(request, response):
    return app(request, response) 