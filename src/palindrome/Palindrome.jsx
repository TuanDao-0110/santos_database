import React, { useState } from "react";

export default function Palindrome() {
  const [state, setState] = useState({
    inputValue: "",
    returnValue: "",
    result: "",
  });

  const reverseStr = (str) => {
    let arr = str.split("");

    for (let n = 0; n < arr.length; n++) {
      arr[n] = str.split("")[arr.length - 1 - n];
    }
    return arr.join("");
  };

  const checktValue = (oldVal, newVal) => {
    return (oldVal === newVal).toString();
  };

  const checkResult = () => {
    setState({ ...state, result: checktValue(state.inputValue, state.returnValue) });
  };
  return (
    <div className="bg-slate-500 main flex justify-center items-center capitalize">
      <div className="w-3/4 flex flex-col gap-5">
        <h1 class="text-3xl font-bold underline text-center text-red-200">check isPalindrome project</h1>

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
            setState({ ...state, inputValue: e.target.value, returnValue: reverseStr(e.target.value) });
          }}
        />
        <button
          onClick={checkResult}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          check isPalindrome ?
        </button>
        <div>input value : {state.inputValue}</div>
        <div>return value is : {state.returnValue}</div>
        <div>
          result : <span className="text-red-400"> {state.result}</span>
        </div>
      </div>
    </div>
  );
}
