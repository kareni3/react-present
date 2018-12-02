import React from 'react'
import ReactDOM from 'react-dom';

var Add = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
      return {
        agreeNotChecked: true,
        authorIsEmpty: true,
        textIsEmpty: true
      };
    },
    onFieldChange: function(fieldName, e) {
      if (e.target.value.trim().length > 0) {
        this.setState({[''+fieldName]:false})
      } else {
        this.setState({[''+fieldName]:true})
      }
    },
    componentDidMount() {
      ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler(e) {
      e.preventDefault();
      var author = ReactDOM.findDOMNode(this.refs.author).value;
      var text = ReactDOM.findDOMNode(this.refs.text).value;
      var item = {
        author: author,
        text: text,
        bigText: '...'
      };
    
      window.ee.emit('News.add', item);
      
      ReactDOM.findDOMNode(this.refs.text).value = '';
      this.setState({textIsEmpty: true});
    },
    onCheckRuleClick: function(e) {
      this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
    },
    render() {
      var dis = this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty;
      return (
        <form className='add cf'>
          <input
            type='text'
            className='add__author'
            onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
            placeholder='Ваше имя'
            ref='author'
          />
          <textarea
            className='add__text'
            onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
            placeholder='Текст новости'
            ref='text'
          ></textarea>
          <label className='add__checkrule'>
            <input 
              type='checkbox' 
              defaultChecked={false} 
              ref='checkrule' 
              onChange={this.onCheckRuleClick} />
              Я согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            ref='alert_button'
            disabled={dis}>
            Добавить новость
          </button>
        </form>
      );
    }
  });


  export default Add