import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Image from 'components/base/Image';

import './AboutPageNew.scss';

class AboutPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentDidMount() {
    const cursor = document.querySelector('.AboutPageNew__cursor');
    const canvasTag = document.querySelector('.AboutPageNew__canvas--in');

    let isMouseDown = false;

    const growCursor = function () {
      cursor.classList.add('AboutPageNew__cursor--is-down');
    }

    const shrinkCursor = function () {
      cursor.classList.remove('AboutPageNew__cursor--is-down');
    }

    const moveCursor = function (x, y) {
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    }

    const setupCanvas = function (canvas) {

      const dpi = window.devicePixelRatio;

      // which context: 2d or 3d?

      const ctx = canvas.getContext('2d');
      ctx.scale(dpi, dpi);

      ctx.fillStyle = 'red';
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }

    const startDraw = function (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'yellow';
    }

    // let's draw based on canvas, x and y

    const moveDraw = function (canvas, x, y) {
      const ctx = canvas.getContext('2d');
      if (isMouseDown) {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }

    // setupCanvas(canvasTag);

    document.addEventListener('mousedown', function () {
      isMouseDown = true;
      growCursor();
      // startDraw(canvasTag);
    });

    document.addEventListener('mouseup', function () {
      isMouseDown = false;
      shrinkCursor();
    });

    document.addEventListener('mousemove', function (e) {
      moveCursor(e.pageX, e.pageY);
      // moveDraw(canvasTag, e.pageX, e.pageY);
    });
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
