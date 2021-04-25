import React, { useState, useEffect } from "react";
import { Elem } from "./Elem";

export const Elems = (props) => {
  const elems = props.elems.map((el) => {
    return <Elem key={el.id} height={el.height} id={el.id} colour={el.colour}/>;
  });
  return (
    <div id="canvasWrapper">
      {/* <div className="container">
        <div className="cube">
          <div className="side front">front</div>
          <div className="side back">back</div>
          <div className="side right">right</div>
          <div className="side left">left</div>
          <div className="side top">top</div>
          <div className="side bottom">bottom</div>
        </div>
      </div> */}
      {elems}
    </div>
  );
};
