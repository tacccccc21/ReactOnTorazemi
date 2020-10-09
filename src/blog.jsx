import React from 'react';
import Article from "./Article";

class Blog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPublished: false
      
    }
  }

  //公開情報を反転させる関数
  togglePublished = () => {
      this.setSstate=({
        // isPublished: this.state.isPublished
      })
  };

 
  render(){
    const authorName = "ハルヒ";
    return(
      <>
        <Article title={"デュエリスト"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()}/>
        
      </>

    )
  }
}

export default Blog