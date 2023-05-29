import openai
from approaches.approach import Approach
from dalle2.dalle2helper import Dalle2Helper
import re
import random
from sd.sdhelper import SDHelper

class CopywritingApproach(Approach):

    system_prompt = """
    You are a highly skilled copywriter with a strong background in persuasive writing, conversion optimization, and marketing techniques. 
    You craft compelling copy that appeals to the target audience’s emotions and needs, persuading them to take action or make a purchase. 
    You understand the importance of AIDA (Attention, Interest, Desire, and Action) and other proven copywriting formulas, and seamlessly incorporate them into your writing.
    You have a knack for creating attention-grabbing headlines, captivating leads, and persuasive calls to action. 
    You are well-versed in consumer psychology and use this knowledge to craft messages that resonate with the target audience.
    Use HTML to format output。
    Use < b > < /b >to bold text,use the < i > </ /i > tag to italicize text, the < u > </u > tag to underline text, and the < br /> tag to wrap text.
    The title can use the < h1 > </h1 > tag, the subtitle can use the < h2 > </h2 > tag, and sections can use the < p > </p > tag.
    At the beginning of each paragraph, add a <div>[IMG]</div> tag.
    Translate to Chinese. Do not translate anything in HTML tags.
    For example：
    <h1>标题</h1>


    <p>这是一段描述</p>
    <h2>小标题1</h2>
    <div>[IMG]</div><p>这是第一段描述</p>
    <h2>小标题2</h2>
    <div>[IMG]</div><p>这是第二段描述</p>
    <h2>小标题3</h2>
    <div>[IMG]</div><p>这是第三段描述</p>
    
    """

    copywrite_prompt = """
        编写一个文案，以{title}为标题。文案需要分为{paragraphs}段，每段不超过{maxParagraphLength}个字。每一段需要有一个小标题，以及一段描述。
        文案中需要包含{titleDescription}里面的内容。
    """

    dalle2_prompt_generator_prompt = """
        You are now a DALLE-2 prompt generation tool that will generate a suitable prompt for me to generate a picture based on the text I give, 
        please narrate in English and need to maintain a {style} style.
        Never generate text in the picture. Translate to English.
        The prompt I give will be given to you with "" around the text.
        generate a prompt that gives the DALLE-2 AI text to generate a picture model.
    """
    
    def __init__(self, api_key: str, api_base: str, api_version: str, chatgpt_deployment_name: str) -> None:
        self.api_key = api_key
        self.api_base = api_base
        self.api_version = api_version
        self.chatgpt_deployment_name = chatgpt_deployment_name
        self.dalle2helper = Dalle2Helper()
        self.sd = SDHelper()

    def run(self, title: str, titleDescription: str, overrides: dict) -> any:
        paragraphs = overrides.get("paragraphs")
        useDalle = overrides.get("use_dalle")
        maxParagraphLength = overrides.get("max_paragraph_length") or 100
        artStyle = overrides.get("art_style")
        imageGenerator = overrides.get("image_generator") or "dalle"
        sdHost = overrides.get("sd_host")
        response = openai.ChatCompletion.create(
            # The deployment name you chose when you deployed the ChatGPT or GPT-4 model.
            engine=self.chatgpt_deployment_name,
            messages=[
                {"role": "system", "content": self.system_prompt},
                {"role": "user", "content": self.copywrite_prompt.format(
                    title=title, paragraphs=paragraphs, maxParagraphLength=maxParagraphLength, titleDescription=titleDescription)}
            ]
        )
        copywrite = response['choices'][0]['message']['content']
        if (useDalle):
            copywrite = self._insert_image(copywrite,artStyle, overrides)
        return {
            "copywriteHTML": copywrite,
        }

    def _get_image(self, text, style, overrides):
        # prompt = re.findall('<p>(.*?)</p>', text)
        # Generate dalle2 prompt using GPT
        # dalle2_prompt = self._dalle2_prompt_generator("".join(prompt),style)
        prompt = text.split("<p>")[1]
        # image_src = self.dalle2helper.generate_image(dalle2_prompt)
        imageGenerator = overrides.get("image_generator") or "dalle"
        sdHost = overrides.get("sd_host") or ""
        if (imageGenerator == "dalle"):
            # dalle2_prompt = self._dalle2_prompt_generator("".join(prompt),style)
            image_src = self.dalle2helper.generate_image(prompt, style)
        elif (imageGenerator == "sd"):
            image_src = self.sd.generate_image(prompt, sdHost)
        else:
            raise Exception("image_generator must be dalle or sd")
        
        image_generated = f'<img src="{image_src}" alt="image" height="383" width="574">'
        print(image_generated)
        return image_generated

    def _insert_image(self, html_text, art_style, overrides):
        # 查找所有包含[IMG]的<p>标签
        p_tags_with_img = re.findall(
            r'<div>(.*?)</p>', html_text, re.DOTALL)
        print(f"Generating image with style: {art_style}")
        # 使用get_image方法替换每个[IMG]标签
        for p_tag in p_tags_with_img:
            img_replacement = self._get_image(p_tag, " ".join(art_style), overrides)
            new_p_tag = p_tag.replace('[IMG]', img_replacement)
            html_text = html_text.replace(p_tag, new_p_tag)

        return html_text

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
