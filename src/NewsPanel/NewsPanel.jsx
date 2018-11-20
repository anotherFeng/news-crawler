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
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
        },
        {
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
        },
        {
          'url': 'https://9to5google.com/2018/11/19/google-news-eu-shutdown-aritcle-11/',
          'description': 'Google could shutdown Google News in Europe over Article 11 ‘link tax’',
          'source': 'cnn',
        }
      ]
    })
  }

  renderNews() {
    const newsList = this.state.news.map(
      oneNews => {
        return (
          <a className='list-group-item' key={oneNews.digest} href='/'>
            <NewsCard news={oneNews} />
          </a>
        );
      }
    );

    return (
      <div className='container-fluid'>
        <div className='list-group'>
          {newsList}
        </div>
      </div>
    );
  }

  render() {
    if(this.state.news) {
      return(
        <div>
          '{this.renderNews()}'
        </div>
      )
    } else {
      return (
        <div>
          Loading....
        </div>
      )
    }
  }

}

export default NewsPanel;