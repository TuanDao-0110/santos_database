import React from "react";
import { useState } from "react";

export default function Bubblesort() {
  const [state, setState] = useState({
    inputValue: [],
    sortedValue: [],
  });

  const setUpinputValue = (e) => {
    let newInputArray = e.target.value.split("");
    setState({ ...state, inputValue: newInputArray });
  };
  const bubbleSort = (arr) => {
    let newArr = [...arr];
    let flag = true;
    while (flag) {
      for (let i = 0; i < newArr.length - 1; i++) {
        flag = false;
        if (newArr[i] > newArr[i + 1]) {
          [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
          flag = true;
        }
      }
    }

    setState({ ...state, sortedValue: newArr });
  };
  // selection sort :
  // check all the number on array find the smallest one ==> put it to the first
  const selectionSort = (arr) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = i + 1; j < newArr.length; j++) {
        if (newArr[j] <= newArr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    setState({ ...state, sortedValue: newArr });
  };
  return (
    <div className="bg-slate-500 main flex justify-center items-center capitalize">
      <div className="w-3/4 flex flex-col gap-5">
        <h1 className="text-3xl font-bold underline text-center text-red-200">check bubbel sort project</h1>
        <input onChange={setUpinputValue} />
        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            bubbleSort(state.inputValue);
          }}
        >
          bubble Sort
        </button>

        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => {
            selectionSort(state.inputValue);
          }}
        >
          section Sort
        </button>

        <div>input value : {state.inputValue}</div>
        <div>return value is : {state.returnValue}</div>
        <div>
          result : <span className="text-red-400"> {state.sortedValue}</span>
        </div>
      </div>
    </div>
  );
}
