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
    const canvasTag = document.querySelector('.AboutPageNew__canvas--in');

    this.setHeightAP();

    window.addEventListener("resize", this.debounceAPHeight);

    const growCursor = function () {
      cursor.classList.add('AboutPageNew__cursor--is-down');
    }

    const shrinkCursor = function () {
      cursor.classList.remove('AboutPageNew__cursor--is-down');
    }

    const moveCursor = function (x, y) {
      cursor.style.left = x  + 'px';
      cursor.style.top = y + 'px';     
    }

    const setUpCanvas = function (canvas) {
      
      const w = canvas.offsetWidth + 'px';
      const h = canvas.offsetHeight + 'px';
      const dpi = window.devicePixelRatio;
    
      canvas.width = canvas.offsetWidth * dpi;
      canvas.height = canvas.offsetHeight * dpi;

      canvas.style.width = w;
      canvas.style.height = h;

      const ctx = canvas.getContext('2d');
      ctx.scale(dpi, dpi);

      ctx.fillStyle = 'red';
      // ctx.rect(100, 100, 600, 400);
      // ctx.fill();
    }

    // setUpCanvas(canvasTag);

    aboutPage.addEventListener('mousedown', function () {
      growCursor();
    });

    aboutPage.addEventListener('mouseup', function () {
      shrinkCursor();
    });

    aboutPage.addEventListener('mousemove', function (e) {
      moveCursor(e.pageX, e.pageY);
    });
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceAPHeight)
  }

  render() {
    return (
      <div className="AboutPageNew">
        <div className="AboutPageNew__cursor"></div>
        {/* <canvas className="AboutPageNew__canvas--in"></canvas> */}
      </div>
    );
  }
}

export default AboutPage;
