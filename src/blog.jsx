import React from 'react';
import Article from "./Article";
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

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
        <FooBar.Foo />
        <ForBar.Bar />
        <Hoge />
      </>
      
    )
  }
}

export default Blog