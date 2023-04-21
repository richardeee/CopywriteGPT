import openai
from flask import Flask, request, jsonify, Response
import os
import logging
from dalle2.dalle2helper import Dalle2Helper
from approaches.copywritingapproach import CopywritingApproach

from dotenv import load_dotenv
load_dotenv()

AZURE_OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
AZURE_OPENAI_API_BASE = os.environ.get("OPENAI_API_BASE")
AZURE_OPENAI_API_VERSION = os.environ.get("OPENAI_API_VERSION")
AZURE_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_CHATGPT_DEPLOYMENT")

openai.api_type = "azure"
openai.api_key = AZURE_OPENAI_API_KEY
openai.api_base = AZURE_OPENAI_API_BASE
openai.api_version = AZURE_OPENAI_API_VERSION

dalle2helper = Dalle2Helper(AZURE_OPENAI_API_KEY, AZURE_OPENAI_API_BASE)

copywrite_approaches = {
    "gpt_with_dalle2": CopywritingApproach(dalle2helper,AZURE_OPENAI_API_KEY, AZURE_OPENAI_API_BASE, AZURE_OPENAI_API_VERSION,AZURE_CHATGPT_DEPLOYMENT)
}
app = Flask(__name__)

@app.route("/", defaults={"path": "index.html"})
@app.route("/<path:path>")
def static_file(path):
    return app.send_static_file(path)

@app.route("/generate", methods=["POST"])
def generate():
    print("Generateing: " + request.json["title"] + " - " + request.json["title_description"] + " - " + request.json["approach"])
    approach = request.json["approach"]
    try:
        impl = copywrite_approaches.get(approach)
        if not impl:
            return jsonify({"error": "unknown approach"}), 400
        r = impl.run(request.json["title"], request.json["title_description"],request.json.get("overrides") or {})
        return jsonify(r)
    except Exception as e:
        logging.exception("Exception in /generate")
        return jsonify({"error": str(e)}), 500
    

if __name__ == "__main__":
    app.run()