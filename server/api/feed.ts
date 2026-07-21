import { XMLParser } from 'fast-xml-parser';

export default defineCachedEventHandler(async (event) => {
    const feedUrl = "https://lovezane.substack.com/feed";

    try {
        // Add headers to bypass basic bot-protection
        const response = await fetch(feedUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'application/rss+xml, application/xml, text/xml, */*'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
        }

        const xmlData = await response.text();
        
        const parser = new XMLParser();
        const feed = parser.parse(xmlData);

        const channel = feed.rss?.channel;

        if (!channel) {
             throw new Error("Invalid RSS feed format.");
        }

        let rawItems = channel.item || [];
        if (!Array.isArray(rawItems)) {
            rawItems = [rawItems];
        }

        return {
            title: channel.title,
            description: channel.description,
            items: rawItems.map((post) => ({
                title: post.title,
                link: post.link,
                pubDate: post.pubDate,
                description: post.description
            })), 
        };
    } catch (error) {
        // This will now log the actual HTTP status code if Substack blocks you
        console.error("Error parsing the RSS feed:", error);

        throw createError({
            statusCode: 500,
            statusMessage: "Failed to fetch or parse the RSS feed.",
        });
    }
}, {
    // Cache the response for 15 minutes (900 seconds)
    maxAge: 60 * 15, 
    swr: true // Stale-while-revalidate
});
