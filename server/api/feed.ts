import { XMLParser } from 'fast-xml-parser';

export default defineEventHandler(async (event) => {
    const feedUrl = "https://lovezane.substack.com/feed";

    try {
        const response = await fetch(feedUrl);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch feed: ${response.statusText}`);
        }

        const xmlData = await response.text();
        
        const parser = new XMLParser();
        const feed = parser.parse(xmlData);

        const channel = feed.rss?.channel;

        if (!channel) {
             throw new Error("Invalid RSS feed format.");
        }

        // THE FIX: Guarantee rawItems is an array. 
        // If it's undefined, make it an empty array. If it's a single object, wrap it in an array.
        let rawItems = channel.item || [];
        if (!Array.isArray(rawItems)) {
            rawItems = [rawItems];
        }

        return {
            title: channel.title,
            description: channel.description,
            items: rawItems.map((post: any) => ({
                title: post.title,
                link: post.link,
                pubDate: post.pubDate,
                description: post.description
            })), 
        };
    } catch (error) {
        console.error("Error parsing the RSS feed:", error);

        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch or parse the RSS feed.",
        });
    }
});
