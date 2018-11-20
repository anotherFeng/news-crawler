import './NewsPanel.css';
import _ from 'lodash';
import React from 'react';

import NewsCard from './NewsCard/NewsCard';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {news: null};
  }

  componentDidMount() {
    this.loadMoreNews();
    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  loadMoreNews(e) {
    const request = new Request('http://localhost:4000/news', {method: 'GET'});
    fetch(request)
      .then((res) => res.json())
      .then((news) => {
        this.setState({
          news: this.state.news ? this.state.news.concat(news) : news,
        });
      });
  }

  handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      console.log("loading more news");
      this.loadMoreNews();
    }
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