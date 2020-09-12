import React from 'react';


const TagItem = ({ tagData }) => {
  return (
    <div className="result-box">
      <h2>
        {tagData.title}
      </h2>
      <p>
        {tagData.text}
      </p>
    </div>
  )
};

export default TagItem;