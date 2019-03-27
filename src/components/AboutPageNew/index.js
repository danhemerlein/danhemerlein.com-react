import React, { Component } from 'react';

import debounce from "utils/debounce";

import './AboutPageNew.scss';

class AboutPage extends Component {
  setHeightAP = () => {
    const aboutPage = document.querySelector('.AboutPageNew');

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    const headerFooter = header.offsetHeight + footer.offsetHeight;

    const apHeight = ((window.innerHeight - headerFooter) - 32);

    aboutPage.style.height = apHeight + "px";
  }

  debounceAPHeight = () => {
    debounce(this.setHeightAP(), 100);
  }

  componentDidMount() {
    const aboutPage = document.querySelector('.AboutPageNew');
    const cursor = document.querySelector('.AboutPageNew__cursor');
    const canvasTag = document.querySelector('.AboutPageNew__canvas');
    const spans = document.querySelectorAll('span');
    let isMouseDown = false;

    this.setHeightAP();

    window.addEventListener("resize", this.debounceAPHeight);

    const growCursor = function () {
      cursor.classList.add('AboutPageNew__cursor--is-down');
    }

    const shrinkCursor = function () {
      cursor.classList.remove('AboutPageNew__cursor--is-down');
    }
   
    const setUpCanvas = function (canvas) {
      const dpi = window.devicePixelRatio;
    
      canvas.width = canvas.offsetWidth * dpi;
      canvas.height = canvas.offsetHeight * dpi;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpi, dpi);

      // ctx.fillStyle = '#FFF';
      ctx.strokeStyle = "rgba(228, 233, 237, 0.75)";

      ctx.lineWidth = 25;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 10;
      ctx.shawdowColor = ctx.strokeStyle;

      // ctx.fill();
      
    }

    const startDraw = function (canvas, x, y) {
      const ctx = canvas.getContext('2d');
      ctx.moveTo(x, y);
    }

    const moveDraw = function (canvas, x, y) {
      const ctx = canvas.getContext('2d');
      if (isMouseDown) {
        ctx.lineTo(x, y);
        ctx.stroke();  
      }
    }

    spans.forEach(function($this){
      $this.addEventListener('mouseenter', function()  {
        if (isMouseDown) {
          $this.classList.remove(
            "AboutPageNew__paragraph-top--span-hide"
          );
        }
      })
    })

    setUpCanvas(canvasTag);

    aboutPage.addEventListener('mousedown', function (e) {
      growCursor();
      startDraw(canvasTag, (e.pageX - aboutPage.offsetLeft), (e.pageY - aboutPage.offsetTop));
      isMouseDown = true;
    });
    
    aboutPage.addEventListener('mouseup', function () {
      shrinkCursor();
      isMouseDown = false;
    });

    aboutPage.addEventListener('mousemove', function (e) {
      cursor.style.left = (e.pageX - aboutPage.offsetLeft) + 'px';
      cursor.style.top = (e.pageY - aboutPage.offsetTop) + 'px';
      moveDraw(canvasTag, (e.pageX - aboutPage.offsetLeft), (e.pageY - aboutPage.offsetTop));
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceAPHeight)
  }

  render() {
    return (
      <div className="AboutPageNew relative">
        {/* <div
          // style={{ backgroundImage: "url('/assets/pattern.svg')" }}
          className="AboutPageNew__pattern"
        /> */}
        <p className="AboutPageNew__paragraph-top  absolute">
          I am a <span className="AboutPageNew__paragraph-top--span-hide">web</span><span className="AboutPageNew__paragraph-top--span-hide"> developer</span> and <span className="AboutPageNew__paragraph-top--span-hide">musician</span> based in <span className="AboutPageNew__paragraph-top--span-hide">Brooklyn,</span> <span className="AboutPageNew__paragraph-top--span-hide">New</span><span className="AboutPageNew__paragraph-top--span-hide"> York. </span>I once shook hands with
          <span className="AboutPageNew__paragraph-top--span-hide"> Hillary</span> <span className="AboutPageNew__paragraph-top--span-hide"> Clinton</span> and my mom is the <span className="AboutPageNew__paragraph-top--span-hide">mayor </span>
          of <span className="AboutPageNew__paragraph-top--span-hide">the</span> <span className="AboutPageNew__paragraph-top--span-hide">town</span> I’m from. Code / music
          <span className="AboutPageNew__paragraph-top--span-hide"> is </span><span className="AboutPageNew__paragraph-top--span-hide"> my</span> <span className="AboutPageNew__paragraph-top--span-hide">life</span> and it’s <span className="AboutPageNew__paragraph-top--span-hide">super</span> <span className="AboutPageNew__paragraph-top--span-hide"> trill.</span>
        </p>
        <p className="AboutPageNew__paragraph-bottom  absolute">
          <span className="AboutPageNew__paragraph-top--span-hide">lol hi</span>
        </p>
        <canvas className="AboutPageNew__canvas full-height full-width" />
        <div className="AboutPageNew__cursor absolute" />
      </div>
    );
  }
}

export default AboutPage;
