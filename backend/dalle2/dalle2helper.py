import requests
import time
import os
from dotenv import load_dotenv
load_dotenv()

AZURE_DALLE_API_KEY = os.getenv("AZURE_DALLE_API_KEY")
AZURE_DALLE_API_BASE = os.getenv("AZURE_DALLE_API_BASE")

class Dalle2Helper:
    dalle2_api_version = '2022-08-03-preview'
    
    def __init__(self):
        self.api_key = str(AZURE_DALLE_API_KEY)
        self.api_base = str(AZURE_DALLE_API_BASE)
        self.api_version = self.dalle2_api_version
    
    def generate_image(self, user_prompt) -> str:
        url = "{api_base}dalle/text-to-image?api-version={api_version}".format(api_base=self.api_base, api_version=self.api_version)
        headers= { "api-key": self.api_key, "Content-Type": "application/json" }
        body = {
            "caption": user_prompt,
            "resolution": "{height}x{width}".format(height=512, width=512),
        }
        print(user_prompt)
        submission = requests.post(url, headers=headers, json=body)
        operation_location = submission.headers['Operation-Location']
        retry_after = submission.headers['Retry-after']
        status = ""
        while (status != "Succeeded"):
            time.sleep(int(retry_after))
            response = requests.get(operation_location, headers=headers)
            status = response.json()['status']
        image_url = response.json()['result']['contentUrl']
        return image_url