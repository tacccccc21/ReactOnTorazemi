import React from 'react';

const Article = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <label hrmlFor>公開状況：
      </label>
  <input type="checkbox" checked={props.isPublished} id="checkbox"/>
    </div>
  )
};

export default Article