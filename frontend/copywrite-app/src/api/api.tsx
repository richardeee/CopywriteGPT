import { CopywriteRequest, CopywriteResponse} from "./models";

export async function generateApi(options: CopywriteRequest): Promise<CopywriteResponse> {
    const response = await fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            approach: options.approach,
            title: options.title,
            title_description: options.titleDescription,
            overrides: {
                paragraphs: options.overrides?.paragraphs,
                max_paragraph_length: options.overrides?.maxParagraphLength,
                use_dalle: options.overrides?.useDalle,
                art_style: options.overrides?.artStyle
            }
        })
    });
    const parsedResponse: CopywriteResponse = await response.json();
    if (response.status > 299 || !response.ok) {
        throw Error(parsedResponse.error || "Unknown error");
    }

    return parsedResponse;
}