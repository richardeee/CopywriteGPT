export const enum Approaches {
    RetrieveThenRead = "rtr",
    ReadRetrieveRead = "rrr",
    ReadDecomposeAsk = "rda"
}

export const enum CustomApproaches {
    BingSearch = "bing"
}

export type CopywriteOverrides = {
    paragraphs?: number;
    maxParagraphLength?: number;
    useDalle?: boolean;
    artStyle?: string[];
};

export type CopywriteRequest = {
    approach: string;
    title: string;
    titleDescription: string;
    overrides?: CopywriteOverrides;
};

export type CopywriteResponse = {
    copywriteHTML: string;
    error?: string;
};