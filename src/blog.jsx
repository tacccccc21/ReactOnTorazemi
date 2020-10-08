import React from 'react';
import Article from "./Article";

class Blog extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isPublished: false
    }
  }
  render(){
    const authorName = "ハルヒ";
    return(
      <>
        <Article title={"デュエリスト"} isPublished={this.state.isPublished} />
        
      </>

    )
  }
}

export default Blog