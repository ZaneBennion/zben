import Parser from "rss-parser";

export default defineEventHandler(async (event) => {
    const feedUrl = "https://lovezane.substack.com/feed";
    const parser = new Parser();

    try {
        // 1. Use native fetch (works perfectly on Cloudflare Edge)
        const response = await fetch(feedUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch feed: ${response.statusText}`);
        }

        // 2. Extract the raw XML text
        const xmlData = await response.text();

        // 3. Parse the XML string directly
        const feed = await parser.parseString(xmlData);

        return {
            title: feed.title,
            description: feed.description,
            items: feed.items,
        };
    } catch (error) {
        console.error("Error parsing the RSS feed:", error);

        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch or parse the RSS feed.",
        });
    }
});
