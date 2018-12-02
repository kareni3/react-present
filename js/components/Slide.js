import React from 'react'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

var Slide = React.createClass({
  propTypes: {
    slide: React.PropTypes.object.isRequired
  },
  render() {
    var  template;
    var slide = this.props.slide;

    var img_cl;
    if (slide.content[0].img.center) img_cl = 'full__img--center';
    else if (slide.content[0].img.full) img_cl = 'full__img--wh';
    else if (slide.content[0].img.width === 'full') img_cl = 'full__img--w';
    else if (slide.content[0].img.height === 'full') img_cl = 'full__img--h';



    var pp = [];

    if (slide.title != '')
      var tt = 
      <div className="contentBlock__title">
        {slide.title}
      </div>

    slide.content.forEach((val, i) => {
      if (val.img.src != '') {
        pp[i] = 
        <div className="contentBlock__img" key={i}>
          <img src={val.img.src}></img>
        </div>
      }
      else {
        pp[i] = 
        <div className="contentBlock__content" key={i}>
              {val.p}
            </div>
      }
    });


    var auto = slide.video.auto || false
    var loop = slide.video.loop || false






    if(slide.view === 'title') {
      template =  <div className="block__title">
      <div className="block__title content">
      <div className="block__title title">
        {slide.title}
      </div>
      <div className="block__title author">
        {slide.content[0].p}
      </div>
      <div className="block__title itmo-logo">
        {slide.logo}
      </div>
      </div>
    </div>
    }

    else if (slide.view === 'full') {
      template =  
      <div className="full">
        <img className="full__img " className={img_cl} src={slide.content[0].img.src}></img>
      </div>
    }


    else if (slide.view === 'content') {
      template =  
      <div className="contentBlock">
            {tt}
            {pp}
        </div>
    }

    
    else if (slide.view === 'video') {
      template =  
      <div className="blockVideo">
          <Video autoPlay={auto} volume="1" loop={loop}
            controls={[]}>
            <source src={slide.video.src} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          </Video>
        </div>
    }







else if (slide.view === 'canvas') {
  template =  
  <div className="h-100">
     <iframe id="frame" src={slide.canvas.src} width="100%" height="100%" align="middle">
        Ваш браузер не поддерживает плавающие фреймы!
      </iframe> 
	</div>
  let ListenForKeyPress = function (event)  {
    alert(1);
  }
  setTimeout(() => {
    console.log(document.getElementById("frame").contentWindow)
    document.getElementById("frame").onkeydown = 
    function (event)  {
      alert(1);
    }
    /* document.getElementById("frame").contentWindow.addEventListener("keypress", function(e){
      alert(1); */
  }, 1000);
}











    return (
        <div>
          {template}
        </div>
    )
  }
});

export default Slide
