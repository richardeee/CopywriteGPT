import requests
import time
import os
import openai
from dotenv import load_dotenv
load_dotenv()

AZURE_DALLE_API_KEY = os.getenv("AZURE_DALLE_API_KEY")
AZURE_DALLE_API_BASE = os.getenv("AZURE_DALLE_API_BASE")
AZURE_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_CHATGPT_DEPLOYMENT")

class Dalle2Helper:
    dalle2_api_version = '2022-08-03-preview'
    
    dalle2_prompt_generator_prompt = """
        You are now a DALLE-2 prompt generation tool that will generate a suitable prompt for me to generate a picture based on the text I give, 
        please narrate in English and need to maintain a {style} style.
        Never generate text in the picture. Translate to English.
        The prompt I give will be given to you with "" around the text.
        generate a prompt that gives the DALLE-2 AI text to generate a picture model.
        The output should be less than 400 characters. 
    """

    def __init__(self):
        self.api_key = str(AZURE_DALLE_API_KEY)
        self.api_base = str(AZURE_DALLE_API_BASE)
        self.chatgpt_deployment_name = str(AZURE_CHATGPT_DEPLOYMENT)
        self.api_version = self.dalle2_api_version
    
    def generate_image(self, user_prompt, style) -> str:
        print("Generating image for prompt: " + user_prompt)
        dalle_prompt = self._dalle2_prompt_generator(user_prompt, style)
        print(dalle_prompt)
        url = "{api_base}dalle/text-to-image?api-version={api_version}".format(api_base=self.api_base, api_version=self.api_version)
        headers= { "api-key": self.api_key, "Content-Type": "application/json" }
        body = {
            "caption": dalle_prompt,
            "resolution": "{height}x{width}".format(height=512, width=512),
        }
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
    
    def _dalle2_prompt_generator(self, prompt, style) -> str:
        response = openai.ChatCompletion.create(
            # The deployment name you chose when you deployed the ChatGPT or GPT-4 model.
            engine=self.chatgpt_deployment_name,
            messages=[
                {"role": "system", "content": self.dalle2_prompt_generator_prompt.format(style=style)},
                {"role": "user", "content": f'Generate DALLE-2 prompt based on the given text:"{prompt}"'.format(
                    prompt=prompt)}
            ]
        )
        dalle2_prompt = response['choices'][0]['message']['content']
        return dalle2_prompt