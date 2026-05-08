import Parser from "rss-parser";

export default defineEventHandler(async (event) => {
    const feedUrl = "https://lovezane.substack.com/feed";

    // 1. Initialize the parser
    const parser = new Parser();

    try {
        // 2. Fetch and parse the feed
        // We use 'await' because it takes a moment to download the XML
        const feed = await parser.parseURL(feedUrl);

        // 3. Return the exact data we want
        return {
            title: feed.title,
            description: feed.description,
            items: feed.items, // This array contains your actual Substack posts!
        };
    } catch (error) {
        // 4. Safely handle any errors
        console.error("Error parsing the RSS feed:", error);

        // createError is a built-in Nuxt utility to send proper HTTP error codes
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch or parse the RSS feed.",
        });
    }
});
