import React from 'react'
import Article from './Article'

var News = React.createClass({
    propTypes: {
      news: React.PropTypes.array.isRequired
    },
    getInitialState() {
      return {
        counter: this.props.news.length
      };
    },
    newsIncrement(e) {
      e.preventDefault();
      this.setState({counter: ++this.state.counter});
    },
    render() {
        //nones = classNames({ 'none': (news.length === 0) })
        var news = this.props.news,
            counter = this.state.counter;
        if (news.length > 0) {
            var newsTemplate = news.map(function(item, index) {
                return (
                <div key={index}>
                    <Article data={item} />
                </div>
                );
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        return (
            <div className="news">
              {newsTemplate}
              <strong onClick={this.newsIncrement} 
                className={'news__count' + (counter > 0 ? '':'none') }> 
                Всего новостей: {counter}
              </strong>
            </div>
          );    
    }
  });

  
export default News