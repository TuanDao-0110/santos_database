import React from "react";
import { useState } from "react";

export default function StackPage() {
  // 1. Stack is a linear data structure which follows a particular order in which the operations are performed.
  //   The order may be LIFO(Last In First Out) or FILO(First In Last Out).
  // 2. create a  input that can add new array
  // 3. show the arr
  // 4. show stack data linear struture in LIFO
  // 5. show stack data with linear struture in FIFO
  const [state, setState] = useState({
    fifo: {
      inputValue: "",
      stack: [],
    },
    lifo: {
      inputValue: "",
      stack: [],
    },
    valueResultFiFo: "",
    valueResultLiFo: "",
  });
  const renderArray = (arr) => {
    let content = "";
    arr.map((item) => {
      content = content + `${item},`;
    });
    return `[${content}]`;
  };

  // set up a result:

  const addFiFo = () => {
    let temp = { ...state };
    temp.fifo.stack.push(state.fifo.inputValue);
    setState(() => {
      return { ...temp };
    });
  };
  const removeFiFo = () => {
    let temp = { ...state };
    temp.fifo.stack.pop();
    setState(() => {
      return { ...temp };
    });
  };

  const addLiFo = () => {
    let temp = { ...state };
    temp.lifo.stack.unshift(state.lifo.inputValue);
    setState(() => {
      return { ...temp };
    });
    console.log(state);
  };

  const removeLiFo = () => {
    let temp = { ...state };
    temp.lifo.stack.shift();
    setState(() => {
      return { ...temp };
    });
  };

  return (
    <div className="bg-slate-500 main flex flex-col justify-center items-center capitalize">
      <div className="w-3/4 flex flex-col gap-5">
        <h1 className="text-3xl font-bold underline text-center text-red-200">set up LiFo </h1>
        <input
          className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => {
            setState(() => {
              let temp = { ...state };
              temp.fifo.inputValue = e.target.value;
              return temp;
            });
          }}
        />
        <button
          className="inline-block w-fit px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            addFiFo();

            setState({ ...state, valueResultFiFo: renderArray(state.fifo.stack) });
          }}
        >
          set in
        </button>

        <button
          className="inline-block w-fit px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            removeFiFo();
            setState({ ...state, valueResultFiFo: renderArray(state.fifo.stack) });
          }}
        >
          take out
        </button>
        <div>input value : {state.fifo.inputValue}</div>
        <div>
          result : <span className="text-red-400"> {state.valueResultFiFo}</span>
        </div>
      </div>

      <div className="w-3/4 flex flex-col gap-5">
        <h1 className="text-3xl font-bold underline text-center text-red-200">set up FIFO </h1>

        <input
          className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => {
            setState(() => {
              let temp = { ...state };
              temp.lifo.inputValue = e.target.value;
              return temp;
            });
          }}
        />
        <button
          className="inline-block w-fit px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            addLiFo();

            setState({ ...state, valueResultLiFo: renderArray(state.lifo.stack) });
          }}
        >
          set in
        </button>

        <button
          className="inline-block w-fit px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            removeLiFo();

            setState({ ...state, valueResultLiFo: renderArray(state.lifo.stack) });
          }}
        >
          take out
        </button>
        <div>input value : {state.lifo.inputValue}</div>
        <div>
          result : <span className="text-red-400"> {state.valueResultLiFo}</span>
        </div>
      </div>
    </div>
  );
}
