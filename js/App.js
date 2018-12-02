import React from 'react'
import Qwe from './components/Qwe'
import MaterialIcon, {colorPalette} from 'material-icons-react';

import slides from './slides'
import Slide from './components/Slide'

var template;
var clickerEl;

var App = React.createClass({
  getInitialState() {
    return {
      counter: 0,
      i: 0,
      curSlide: slides[0],
      start: false,
    };
  },
  onBtnClickHandler(e) {
    e.preventDefault();
    if(slides[this.state.i].clicker) {
      this.next();
    }
  },
  onBtnRightClickHandler(e) {
    e.preventDefault();
    if(slides[this.state.i].clicker) {
      this.prev();
    }
  },
  next(click = true) {
    if(this.state.counter >= slides[this.state.i].clickCount - 1) {
      if(this.state.i<slides.length-1) {
        this.state.i++;
        this.state.counter = 0;
        this.newSlide(this.state.i);
      }
    }
    else if (click || slides[this.state.i].keyer) {
      this.state.counter++;
    }
  },
  prev(click = true) {
    if(this.state.i>0)this.state.i--;
    this.newSlide(this.state.i);
  },
  newSlide(i){
    this.setState({curSlide: slides.find((val, index) => index === i)});
  },
  onKeyDownHandler(e) {
    if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') {
      this.next(false);
    }
    else if (e.key === 'ArrowLeft') {
      this.prev();
    }
  },
  onMouseDownHandler(e) {
    if (e.target.className !== 'click-place') {
      this.setState({counter: ++this.state.counter});
    }
  },
  start(e) {
    e.preventDefault();
    this.setState({start: true});
  },
  componentDidMount() {
    window.addEventListener("keypress", this.onKeyDownHandler, false);
    window.addEventListener("mouseup", this.onMouseDownHandler, false);
  },
  componentWillUnmount() {
    window.removeListener('keypress');
    window.removeListener('mouseup');
  },
  render() {
    if(this.state.start) {
      template = 
      <div>
        <Slide slide={this.state.curSlide} />
      </div>;
      if(this.state.counter >= slides[this.state.i].clickCount - 1) {
        clickerEl = <div 
        className="click-place"
        onClick={this.onBtnClickHandler}
        onContextMenu={this.onBtnRightClickHandler}>
      </div>
      } else {
        clickerEl = <div></div>
      }
    } else {
      template = 
      <div className="app">
        <div className="block__start">
          <div className="btn__start"
              onClick={this.start}>
            <MaterialIcon icon="play_arrow" size={60}/>
          </div>
        </div>
      </div>;
      clickerEl = <div></div>
    }
    return (
      <div className="app">
         <div className="slides">
            {template}
        </div>
        {clickerEl}  
        
      </div>
    )
  }
});

export default App
