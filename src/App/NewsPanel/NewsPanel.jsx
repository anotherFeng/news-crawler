import './NewsPanel.css';

import React from 'react';

import NewsCard from '../NewsCard/NewsCard.js';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {news: null};
  }

  componentDidMount() {
    this.loadMoreNews();
  }

  loadMoreNews(e) {
    this.setState({
      news: [
        {
          'digest': 1,
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
          'title': 'testing',
        },
        {
          'digest': 2,
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
          'title': 'testing',

        },
        {
          'digest': 3,
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
          'title': 'testing',
        }
      ]
    })
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