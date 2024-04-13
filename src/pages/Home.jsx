// pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import { getNews } from '../utils/api';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch news data when the component mounts
    const fetchNews = async () => {
      const data = await getNews();
      setArticles(data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <NewsList articles={articles} />
      </div>
    </div>
  );
};

export default Home;
