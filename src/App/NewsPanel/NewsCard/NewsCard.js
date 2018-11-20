import './NewsCard.css';

import React from 'react';

class NewsCard extends React.Component {
  redirectToUrl(url) {
    window.open(url, 'blank');
  }

  render() {
    return (
      <div class="card mb-3 news_card" onClick={(e) => this.redirectToUrl(this.props.news.url, e)}>
        <div class="row">
          <div class="col s4 fill">
            <img src={'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2018/11/google_news_dark_mode_1.jpg?resize=2000%2C0&quality=82&strip=all&ssl=1'} alt='news'/>
          </div>
          <div class="col s8">
            <div class="news-intro-col">
              <div class="news-intro-panel">
                <h4>{this.props.news.title}</h4>
                <div class='new-description'>
                  <p>{this.props.news.description}</p>
                  <div>
                    {this.props.news.source != null && <cite class='news_footer' title="Source Title">{this.props.news.source}</cite>}
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