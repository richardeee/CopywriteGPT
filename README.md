# Copywriting GPT

This is a demo application for combining Azure ChatGPT and DallE-2 to generate copywriting with images.

![screenshot1](/public/screenshot1.png)
![screenshot2](/public/screenshot2.jpg)

## Prerequisites
* Python 3.10+
* Azure OpenAI Subscription. Apply here: [Azure OpenAI Application](https://aka.ms/oai/access)
* Azure Dall-E2 Subscription. Apply here: [Azure OpenAI Application](https://aka.ms/oai/access)
* npm

## Run locally
1. Clone the repo
```bash
git clone https://github.com/richardeee/CopywriteGPT.git
```
2. Install dependencies
```bash
python -m venv venv
# on Windows
venv\Scripts\activate.bat
# Or on Linux
# source venv/bin/activate
pip install -r requirements.txt

cd frontend/copywrite-app
npm install
npm run build
```
3. Start the backend
```bash
cd ../../backend
python app.py
```
## Deploy to Azure App Service
```bash
az login
az account set --subscription <your-subscription-id>
# Create a resource group
az group create --name <your-resource-group> --location <your-location>
# Create a plan
az webapp appserviceplan create --name <your-plan-name> --resource-group <your-resource-group> --sku B3 --is-linux
# Create a web app
az webapp create --resource-group <your-resource-group> --plan <your-plan-name> --name <your-app-name> --runtime "PYTHON|3.10" --deployment-local-git
# Add environment variables
az webapp config appsettings set --resource-group <your-resource-group> --name <your-app-name> --settings OPENAI_API_KEY=<your-openai-api-key> OPENAI_API_BASE=<your-openai-base> OPENAI_API_VERSION='2023-03-15-preview' AZURE_CHATGPT_DEPLOYMENT='gpt-35-turbo'
# Add a remote
git remote add azure <your-app-name>.scm.azurewebsites.net:<your-app-name>.git
# Push to Azure
git push azure main:master
```
