import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
     articles : [],
     loading : false
    };
  }

  async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f1e0f2d8b4aa4c28bbeb7d30943e6c80";
     let data = await fetch(url);
     let parsedData = await data.json();

     this.setState({articles : parsedData.articles })
;
  }

  render() { 
    return (
      <>
        <div className="container my-3">
          <h2>NewsApp - The Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((e)=> {
            return(
            <div className="col-md-4" key={e.url}>
              <NewsItem  title={e.title ? e.title:""} description={e.description ? e.description: ""} imageUrl = {e.urlToImage} newsUrl = {e.url} />
            </div>

             )})}
            
           
          </div>
        </div>
        </>
    );
  }
}

export default News;
