import React from 'react';
import NewsArticle from './NewsArticle';

const NewsContainer = ({ news }) => {
  const newsList = news.map(article => {
    return (
      <NewsArticle
        key={article.id}
        newsData={article}
      />
    )
  }).reverse();

  return (
    <div className="result-container">
      {newsList}
    </div>
  )
}

export default NewsContainer;