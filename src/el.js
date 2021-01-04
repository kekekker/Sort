import React, {useEffect, useState} from 'react'
import { render } from 'react-dom';

export default function El(quant){
    const render = (x, y) =>{
        var canvas = document.getElementById('canvas'); 
        var c = canvas.getContext('2d'); 
        c.fillStyle = '#ccddff';
        c.beginPath();
        //vertical line #1
        c.moveTo(x,0);
        c.lineTo(x,y);
        //vertical line #2
        c.moveTo(x + 20,0);
        c.lineTo(x + 20,y);
        //horizontal top line
        c.moveTo(x,0);
        c.lineTo(x + 22,0);
        //horizontal bottom line
        c.moveTo(x - 2,y);
        c.lineTo(x + 23,y);
        c.closePath();
        c.fill();
        c.lineWidth = 4;
        c.stroke();
      }
    useEffect(() => {
        let height = 0 
        for(let i = 0; i < 10; i++){
            height = Math.floor(Math.random() * 200)
            render(150 + i*100, height)
            console.log('kakakkaak')
      }
    })
    return(
        <canvas width="800" height="600" id="canvas" style={{ marginTop : '100px' }}></canvas> 
    )
}