import React, { useState, useEffect } from "react";

export const Elem = (props) => {
    // const clear = () => {
    //     var canvas = document.getElementById(`${props.id}`); 
    //     var c = canvas.getContext('2d'); 
    //     c.clearRect(0, 0, canvas.width, canvas.height);
    // }

    // const render = (x, y) => {
    //     var canvas = document.getElementById(`${props.id}`); 
    //     var c = canvas.getContext('2d'); 
    //     c.fillStyle = '#ccddff';
    //     c.lineWidth = 4;
    //     c.beginPath();
    //     //vertical line #1
    //     c.moveTo(x,4);
    //     c.lineTo(x,y);
    //     //vertical line #2
    //     c.moveTo(x + 20,4);
    //     c.lineTo(x + 20,y);
    //     //horizontal top line
    //     c.moveTo(x - 2,4);
    //     c.lineTo(x + 22,4);
    //     //horizontal bottom line
    //     c.moveTo(x - 2,y);
    //     c.lineTo(x + 22, y);
    //     c.closePath();
    //     c.fill();
    //     c.stroke();
    // }

    useEffect(() => {
        // clear()
        // render(4, props.height)
    }, [props.height, props.colour])

    return (
      <>
        
        <div
          className="canvas"
          id={props.id}
          style={{ height: props.height, backgroundColor: props.colour }}
        ></div>
        {/* <canvas className='canvas' width="30" height="300" id={props.id} style={{ marginTop : '100px' }}></canvas>  */}
      </>
    );
}