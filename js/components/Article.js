import React from 'react'

var Article = React.createClass({
    propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        bigText: React.PropTypes.string.isRequired
      })
    },
    getInitialState() {
      return {
        visible: false
      };
    },
    readmoreClick(e) {
      e.preventDefault();
      this.setState({visible: !this.state.visible}, function() {
        alert('Состояние изменилось');
      });
    },
    render() {
      var author = this.props.data.author,
          text = this.props.data.text,
          bigText = this.props.data.bigText,
          visible = this.state.visible; 
      return (
        <div className="article">
          <p className="news__author">{author}:</p>
          <p className={'news__text'}>{text}</p>
          <a href="#" 
            onClick={this.readmoreClick} 
            className='news__readmore'>
            Подробнее
          </a>
          <p className={'news__text ' + (visible ? '' : 'none')}>{bigText}</p>
        </div>
      )
    }
  });

  export default Article;