import os
import logging
from openai import OpenAI
from typing import Optional
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def extract_location_from_question(question: str) -> Optional[str]:
    """
    Extract location name from a natural language question using lightweight LLM.
    Returns the location name or None if no location found.
    """
    print(f"\n{'='*60}")
    print(f"📍 LOCATION EXTRACTION - Question: {question}")
    print(f"{'='*60}")
    
    try:
        messages = [
            {
                "role": "system", 
                "content": "Extract the location name from the user's question. Return ONLY the location name, nothing else. If no location is mentioned, return 'None'. Examples: 'Is it safe to sail in Santa Cruz today?' -> 'Santa Cruz', 'How are the waves in San Diego?' -> 'San Diego'"
            },
            {
                "role": "user", 
                "content": question
            }
        ]

        print(f"\n🤖 SENDING TO OPENAI FOR LOCATION EXTRACTION...")
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=20,
            temperature=0.1,
        )
        
        location = response.choices[0].message.content.strip()
        
        # Handle cases where no location is found
        if location.lower() in ['none', 'no location', '']:
            print(f"❌ NO LOCATION FOUND IN QUESTION")
            print(f"{'='*60}\n")
            return None
        
        print(f"✅ LOCATION EXTRACTED: '{location}'")
        print(f"{'='*60}\n")
        return location

    except Exception as e:
        print(f"❌ LOCATION EXTRACTION ERROR: {e}")
        print(f"{'='*60}\n")
        logger.error(f"Error extracting location: {e}")
        return None 