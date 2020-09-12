import React from 'react';


const NewsArticle = ({ newsData }) => {
  return (
    <div className="result-box">
      <h2>
        {newsData.title}
      </h2>
      <p>
        {newsData.text}
      </p>
    </div>
  )
};

export default NewsArticle;