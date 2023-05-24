import webuiapi

api = webuiapi.WebUIApi(host="760f9d3b0aaae3618a.gradio.live", port=443, use_https=True)

print(api.get_samplers())