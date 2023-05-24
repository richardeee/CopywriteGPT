import requests
import time
import os
import openai
import webuiapi
import uuid
from azure.storage.blob import BlobServiceClient

from dotenv import load_dotenv
load_dotenv()

AZURE_OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
AZURE_OPENAI_API_BASE = os.environ.get("OPENAI_API_BASE")
AZURE_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_CHATGPT_DEPLOYMENT")
AZURE_BLOB_STORAGE_ENDPOINT = os.environ.get("AZURE_BLOB_STORAGE_ENDPOINT")
AZURE_BLOB_STORAGE_CONTAINER = os.environ.get("AZURE_BLOB_STORAGE_CONTAINER")
AZURE_BLOB_STORAGE_KEY = os.environ.get("AZURE_BLOB_STORAGE_KEY")
SD_HOST = os.environ.get("SD_HOST")
class SDHelper:
    dalle2_api_version = '2022-08-03-preview'
    
    sd_prompt_template = """
    Stable Diffusion is an AI art generation model similar to DALLE-2.
    Here are some prompts for generating art with Stable Diffusion. 

    Example:

    - portait of a homer simpson archer shooting arrow at forest monster, front game card, drark, marvel comics, dark, intricate, highly detailed, smooth, artstation, digital illustration
    - pirate, concept art, deep focus, fantasy, intricate, highly detailed, digital painting, artstation, matte, sharp focus, illustration
    - ghost inside a hunted room, art by lois van baarle and loish and ross tran and rossdraws and sam yang and samdoesarts and artgerm, digital art, highly detailed, intricate, sharp focus, Trending on Artstation HQ, deviantart, unreal engine 5, 4K UHD image
    - red dead redemption 2, cinematic view, epic sky, detailed, concept art, low angle, high detail, warm lighting, volumetric, godrays, vivid, beautiful, trending on artstation
    - a fantasy style portrait painting of rachel lane / alison brie hybrid in the style of francois boucher oil painting unreal 5 daz. rpg portrait, extremely detailed artgerm
    - athena, greek goddess, claudia black, art by artgerm and greg rutkowski and magali villeneuve, bronze greek armor, owl crown, d & d, fantasy, intricate, portrait, highly detailed, headshot, digital painting, trending on artstation, concept art, sharp focus, illustration
    - closeup portrait shot of a large strong female biomechanic woman in a scenic scifi environment, intricate, elegant, highly detailed, centered, digital painting, artstation, concept art, smooth, sharp focus, warframe, illustration
    - ultra realistic illustration of steve urkle as the hulk, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration
    - portrait of beautiful happy young ana de armas, ethereal, realistic anime, trending on pixiv, detailed, clean lines, sharp lines, crisp lines, award winning illustration, masterpiece, 4k, eugene de blaas and ross tran, vibrant color scheme, intricately detailed
    - A highly detailed and hyper realistic portrait of a gorgeous young ana de armas, lisa frank, trending on artstation, butterflies, floral, sharp focus, studio photo, intricate details, highly detailed, alberto seveso and geo2099 style

    Prompts should be written in English, excluding the artist name, and include the following rule:

    - Follow the structure of the example prompts. This means Write a description of the scene, followed by modifiers divided by commas to alter the mood, style, lighting, and more, excluding the artist name, separated by commas. 

    I want you to write me a detailed prompt exactly about the IDEA follow the rule. No more than 50 words.
    """
    sd_prompt_prefix = """
    masterpiece, best quality, CG, detailed light, extremely detailed, royalty, HDR, intricate details,
    """
    def __init__(self):
        # self.api = webuiapi.WebUIApi(host=str(SD_HOST), port=443, use_https=True)
        self.blob_service = BlobServiceClient(account_url=str(AZURE_BLOB_STORAGE_ENDPOINT), credential=str(AZURE_BLOB_STORAGE_KEY))
        self.blob_container = self.blob_service.get_container_client(str(AZURE_BLOB_STORAGE_CONTAINER))
        if not self.blob_container.exists():
            self.blob_container.create_container()

    def generate_image(self, user_prompt, sdHost) -> str:
        api = webuiapi.WebUIApi(host=sdHost, port=443, use_https=True)
        print("Original Prompt: ", user_prompt)
        sd_prompt = self._generate_sd_prompt(user_prompt)
        print("Generated Prompt: ", sd_prompt)
        result1 = api.txt2img(prompt=self.sd_prompt_prefix+sd_prompt,
                    negative_prompt=" out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature,",
                    seed=-1,
                    styles=[],
                    cfg_scale=7,
                    sampler_index='DPM++ SDE Karras'
#                      sampler_index='DDIM',
#                      steps=30,
#                      enable_hr=True,
#                      hr_scale=2,
#                      hr_upscaler=webuiapi.HiResUpscaler.Latent,
#                      hr_second_pass_steps=20,
#                      hr_resize_x=1536,
#                      hr_resize_y=1024,
#                      denoising_strength=0.4,
        )
        temp_file_name = str(uuid.uuid4().hex) + ".png"
        result1.image.save(temp_file_name)
        #Folder name should be 20230524
        # folder_name = time.strftime("%Y%m%d")

        with open(temp_file_name, "rb") as image_file:
            self.blob_container.upload_blob(name=temp_file_name, data=image_file)

        #Delete temp file
        os.remove(temp_file_name)
        image_url = f"{AZURE_BLOB_STORAGE_ENDPOINT}/{AZURE_BLOB_STORAGE_CONTAINER}/{temp_file_name}"
        return image_url
    
    def _generate_sd_prompt(self, user_prompt) -> str:
        response = openai.ChatCompletion.create(
            # The deployment name you chose when you deployed the ChatGPT or GPT-4 model.
            engine=str(AZURE_CHATGPT_DEPLOYMENT),
            messages=[
                {"role": "system", "content": self.sd_prompt_template},
                {"role": "user", "content": f'IDEA:"{user_prompt}"'}
            ]
        )
        sd_prompt = response['choices'][0]['message']['content']
        return sd_prompt