import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js'
import Content from './components/Content.js'
import TrendingTopics from './components/TrendingTopics.js'
import Footer from './components/Footer.js'

// News API
const apiKey = "d1411c425079430a99b34b7fcfbdbbaa";
const baseUrl = "https://newsapi.org/v2/";
const urlNews = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;
const urlHeadline = baseUrl + "top-headlines?" + "country=id&" + "apiKey=" + apiKey;

class App extends Component {
  state = {
    listNews: [],
    listHeadline : []
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function(response) {
        self.setState({ listNews: response.data.articles });
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    axios
    .get(urlNews)
    .then(function(response) {
      self.setState({ listHeadline: response.data.articles });
      // handle success
      console.log(response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
  };
  render() {
    // Parsing Variable
    const { listNews, listHeadline , index=0} = this.state;
    return (
      <div className="App">
        <NavigationBar />
        <div className="container main">
          <div className="row">
            <div className="col-3">
              <div className="trendingStories text-left">
                <span className="text-left">TRENDING STORIES</span> <a className="viewAll" href="#">View All</a>
              {listHeadline.slice(0, 5).map((item, key) => {
                return <TrendingTopics key={key} title={item.title} content={item.content} date={item.publishedAt} url={item.url} author={item.author} index={key}/>;
              })}
              </div>
            </div>
            <div className="col-7">
              {listNews.map((item, key) => {
                const src_img = item.urlToImage === null ? logo : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <Content key={key} title={item.title} img={src_img} content={content} date={item.publishedAt} url={item.url} author={item.author} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
