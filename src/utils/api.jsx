// utils/api.jsx
import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace 'YOUR_API_KEY' with your actual API key
const baseURL = "https://newsapi.org/v2"; // Base URL for the News API

// Function to fetch favorites from localStorage
export const getFavorites = () => {
    const favoritesStr = localStorage.getItem("favorites");
    if (favoritesStr) {
        return JSON.parse(favoritesStr);
    } else {
        return [];
    }
};

// Function to fetch the latest news articles from the News API
export const getNews = async () => {
    const rssFeeds = [
        // Add RSS feed URLs for other news sites here
        "https://feeds.bbci.co.uk/news/rss.xml",
        "http://rss.cnn.com/rss/edition.rss",
        "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        "https://www.reuters.com/tools/rss",
        "https://www.foxnews.com/about/rss",
        "https://www.npr.org/rss/rss.php",
        "https://www.usatoday.com/rss/",
        "http://feeds.nbcnews.com/nbcnews/public/news",
        "https://bdnews24.com/rss.xml",
        
        
    ];

    let allNews = [];

    try {
        const promises = rssFeeds.map(async (rssFeed) => {
            const response = await axios.get(
                `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
                    rssFeed
                )}`
            );
            const newsItems = response.data.items.map((item) => ({
                title: item.title,
                description:
                    item.description ||
                    item.summary ||
                    item.content ||
                    item.contentSnippet ||
                    item.encoded ||
                    item.encodedSnippet ||
                    item.encodedContent ||
                    item.encodedContentSnippet ||
                    item.descriptionSnippet,

                url: item.link,
                urlToImage:
                    item.thumbnail ||
                    item.image ||
                    item.enclosure.link ||
                    item.enclosure.url ||
                    item.photo ||
                    
                    (item.enclosure && item.enclosure.url) ||
                    (item.media && item.media.thumbnail) ||
                    (item.media && item.media.content) ||
                    (item.media && item.media.url) ||
                    (item.media && item.media.medium) ||
                    (item.media && item.media.large) ||
                    (item.media && item.media.thumbnail[0].url) ||
                    (item.media && item.media.thumbnail[1].url) ||
                    (item.media && item.media.thumbnail[2].url) ||
                    (item.media && item.media.thumbnail[3].url) ||
                    (item.media && item.media.thumbnail[4].url) ||
                    (item.media && item.media.thumbnail[5].url) ||
                    (item.media && item.media.thumbnail[6].url) ||
                    (item.media && item.media.thumbnail[7].url) ||
                    (item.media && item.media.thumbnail[8].url) ||
                    (item.media && item.media.thumbnail[9].url) ||
                    (item.media && item.media.thumbnail[10].url),
                videoUrl: item.videoUrl,
                publishedAt: item.pubDate,
                source: {
                    name: item.author,
                },
            }));
            allNews = [...allNews, ...newsItems];
        });

        await Promise.all(promises);
    } catch (error) {
        console.error("Error fetching news:", error);
    }

    return allNews;
};

// Function to search for news articles based on a query
export const searchNews = async (query) => {
    try {
        const response = await axios.get(`${baseURL}/everything`, {
            params: {
                q: query,
                language: "en", // Search for news articles in English
                sortBy: "relevancy", // Sort articles by relevancy
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error("Error searching for news articles:", error);
        return []; // Return an empty array in case of error
    }
};
