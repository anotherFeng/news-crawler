import './NewsCard.css';

import React from 'react';

class NewsCard extends React.Component {
  redirectToUrl(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div className="card mb-3 news-card-container" onClick={(e) => this.redirectToUrl(this.props.news.url, e)}>
        <div className="row">
          <div className="col s4 fill">
            <img className="news-img" src={'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2018/11/google_news_dark_mode_1.jpg?resize=2000%2C0&quality=82&strip=all&ssl=1'} alt='news'/>
          </div>
          <div className="col s8">
            <div className="news-intro-col">
              <div className="news-intro-panel">
                <h4>{this.props.news.title}</h4>
                <div className='new-description'>
                  <p>{this.props.news.description}</p>
                  <div>
                    {this.props.news.source != null && <cite className='chip light-blue news-chip' title="Source Title">{this.props.news.source}</cite>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsCard;