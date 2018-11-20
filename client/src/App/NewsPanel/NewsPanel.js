import './NewsPanel.css';

import React from 'react';

import NewsCard from './NewsCard/NewsCard';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {news: null};
  }

  componentDidMount() {
    this.loadMoreNews();
  }

  loadMoreNews(e) {
    let request = new Request('http://localhost:4000/news', {method: 'GET'});
    fetch(request)
      .then((res) => res.json())
      .then((news) => {
        this.setState({
          news: this.state.news ? this.state.news.concat(news) : news,
        });
      });
  }

  renderNews() {
    const newsList = this.state.news.map(
      oneNews => {
        return (
          <a class='list-group-item' key={oneNews.digest} href='/'>
            <NewsCard news={oneNews} />
          </a>
        );
      }
    );

    return (
      <div class='container-fluid'>
        <div class='list-group'>
          {newsList}
        </div>
      </div>
    );
  }

  render() {
    if(this.state.news) {
      return(
        <div>
          {this.renderNews()}
        </div>
      );
    } else {
      return (
        <div id='msg-app-loading'>
          Loading....
        </div>
      );
    }
  }

}

export default NewsPanel;