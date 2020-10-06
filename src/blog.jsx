import React from 'react';
import Article from "./Article";

class Blog extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const authorName = "ハルヒ";
    return(
      <>
        <Article 
            title={"デュエリスト"} 
            order={3}
            isPublished={true}
            author={authorName}
        />
      </>

    )
  }
}

export default Blog