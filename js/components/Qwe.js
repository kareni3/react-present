import React from 'react'
import News from './News'
import TestInput from './TestInput'
import Add from './Add'

let my_news = [
    {
      author: 'Саша Печкин',
      text: 'В четверг, четвертого числа...',
      bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  
    },
    {
      author: 'Просто Вася',
      text: 'Считаю, что $ должен стоить 35 рублей!',
      bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  
    },
    {
      author: 'Гость',
      text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
      bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  
    }
  ];

var Qwe = React.createClass({
  getInitialState() {
    return {
      news: my_news
    };
  },
 
  componentDidMount() {
    window.ee.addListener('News.add', (item) => {
      var nextNews = [item, ...this.state.news];
      this.setState({news: nextNews});
    });
  },

  componentWillUnmount() {
    window.ee.removeListener('News.add');
  },

  render() {
    return (
      <div className="app">
        <h3>Новости</h3>
        <TestInput />
        <Add />
        <News news={this.state.news} />
      </div>
    )
  }
});

export default Qwe
