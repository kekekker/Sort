import React, {useEffect, useState} from 'react'

export default function El(quant){
    const clear = () => {
        var canvas = document.getElementById('canvas'); 
        var c = canvas.getContext('2d'); 
        c.clearRect(0, 0, canvas.width, canvas.height);
    }

    const render = (x, y) => {
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
        clear()
        for(let i = 0; i < quant.quant; i++){
            render(150 + i*50, Math.floor(Math.random() * 200))
        }
    })
    return(
        <div id = "canvasWrapper">
            <canvas width="1500" height="600" id="canvas" style={{ marginTop : '100px' }}></canvas> 
        </div>
    )
}