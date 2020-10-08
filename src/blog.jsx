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
        <Article title={"デュエリスト"} order={1}/>
        <Article title={"テケナー"} order={2}/>
        <Article title={"ベーシスト"} order={3}/>
        <Article title=("エンジニア") order={4}/>
      </>

    )
  }
}

export default Blog