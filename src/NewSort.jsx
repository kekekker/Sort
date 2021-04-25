import React, { useState, useEffect, useRef } from "react";
import { Elems } from "./Elems";

export const NewSort = () => {
  const [elements, setElements] = useState([]);
  const input = useRef();

  const [createB, setCreateB] = useState(false);
  const [sortB, setSortB] = useState(true);
  const [sorting, setSorting] = useState(false);

  const [n, setN] = useState(0);

  const [radio, setRadio] = useState("bubble");

  const createElements = (quantity) => {
    let q = quantity;
    let array = [];
    const setArr = () => {
      while (q > 0) {
        array.push({
          height: Math.floor((Math.random() * 0.9 + 0.1) * 200),
          id: q,
          colour: "white",
        });
        q -= 1;
      }
    };
    setArr();
    setTimeout(() => setElements(array), 50);
  };

  const bubbleSort = (array) => {
    setTimeout(() => {
      let coloured = [];
      if (n < array.length) {
        let i = 0;
        for (i; i < array.length - 1; i++) {
          if (array[i].height > array[i + 1].height) {
            let swap = array[i].height;
            array[i].colour = "green";
            array[i + 1].colour = "grey";
            coloured.push(i);
            array[i].height = array[i + 1].height;
            array[i + 1].height = swap;
          }
        }
        setN((n) => (n += 1));
        setCreateB(true);
        for (let t = 0; t < coloured.length - 1; t++) {
          array[coloured[t]].colour = "white";
        }
        coloured.length = 0;
      }
      if (n == array.length - 1) {
        for (let t = 0; t < array.length - 1; t++) {
          array[t].colour = "white";
        }
        setSorting(false);
        setN(0);
        setCreateB(false);
      }
    }, 1000);
  };

  const onChange = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    if (sorting) {
      switch (radio) {
        case "bubble":
          bubbleSort(elements);
        case "inserts":
          bubbleSort(elements);
        case "fast":
          bubbleSort(elements);
      }
    }
  }, [sorting, n, radio]);

  return (
    <>
      <div className="form-wrapper">
        <div id="form">
          <div className="label">
            Введите количество элементов:
          </div>
          <input type="text" name="quantity" ref={input} />
          <button
            disabled={sorting == true ? true : false}
            onClick={() => createElements(+input.current.value)}
          >
            {elements.length === 0 ? "Ok" : "Поменять"}
          </button>
          <button
            disabled={elements.length == 0 || sorting == true ? true : false}
            onClick={() => setSorting(true)}
          >
            Сортировать
          </button>
          <button
            disabled={sorting == true ? true : false}
            className={elements.length === 0 ? "hidden" : "shown"}
            onClick={() => setElements([])}
          >
            Очистить
          </button>
        </div>
        <div id="form">
          <div>Выберите тип сортировки:</div>
          <input
            type="radio"
            name="sort"
            id="bubble"
            value="bubble"
            onChange={onChange}
            checked={radio === "bubble" ? true : false}
          />
          <label htmlFor="bubble">Сортировка 'пузырьком'</label>
          <input
            type="radio"
            name="sort"
            id="inserts"
            value="inserts"
            onChange={onChange}
            checked={radio === "inserts" ? true : false}
          />
          <label htmlFor="inserts">Сортировка вставками</label>
          <input
            type="radio"
            name="sort"
            value="fast"
            id="fast"
            onChange={onChange}
            checked={radio === "fast" ? true : false}
          />
          <label htmlFor="fast">Быстрая сортировка</label>
        </div>
      </div>
      {elements && <Elems elems={elements} />}
    </>
  );
};
