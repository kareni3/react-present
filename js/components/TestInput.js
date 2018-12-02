
import React from 'react'
import ReactDOM from 'react-dom';

var TestInput = React.createClass({
    componentDidMount() { //ставим фокус в input
      //ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    },
    getInitialState() {
      return {
        value: 'q'
      }
    },
    changeVal(e, val) {
      e.preventDefault();
      this.setState({value: e.target.value})
    }, 
    onBtnClickHandler() {
      alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    },
    render() {
      return (
        <div>
          <span>{this.state.value}</span> <br/>
          <input className='test-input' 
            onChange={this.changeVal} 
            value={this.state.value} 
            placeholder='введите значение'/>
          <button onClick={this.onBtnClickHandler}>Показать alert</button>
          <input
            className='test-input'
            placeholder='введите значение'
            ref='myTestInput'
          />
        </div>
      );
    }
  });

  
export default TestInput