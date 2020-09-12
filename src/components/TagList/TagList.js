import React from 'react';
import TagItem from '../TagItem/TagItem';

const TagList = ({ tagList }) => {
  const list = tagList.map(tag => {
    return (
      <TagItem
        key={tag.id}
        tagData={tag}
      />
    )
  });

  return (
    <div className="result-container">
      {list}
    </div>
  )
}

export default TagList;