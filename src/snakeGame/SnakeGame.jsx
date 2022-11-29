/* eslint-disable no-fallthrough */
import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function SnakeGame() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState([
    [80, 80],
    [80, 70],
    [80, 60],
    [80, 50],
    //[x,y]
  ]);
  const move = useRef();
  const [direction, setDirection] = useState("straight");
  const orderDifferent = useRef();
  useEffect(() => {
    let context;
    context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // context.setTransform(40, 0, 0, 40, 0, 0);
    snake.map((item, index) => {
      context.fillStyle = "green";
      context.fillRect(item[1], item[0], 10, 10);
    });

    const apple = canvasRef.current.getContext("2d");
    apple.fillStyle = "blue";
    apple.fillRect(70, 100, 10, 10);
  }, [snake]);
  const findOrderDifferent = (arr) => {
    let orderDifferent = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][0] === arr[i + 1][0]) {
        orderDifferent = 1;
      } else {
        orderDifferent = 0;
      }
    }
    return orderDifferent;
  };

  const goStraight = () => {
    orderDifferent.current = findOrderDifferent(snake);
    setSnake(() => {
      let temp = [...snake];
      let firstTemp = [...temp[0]];
      temp.pop();
      switch (direction) {
        case "straight":
          if (temp[0][0] === temp[1][0]) {
            if (temp[0][1] > temp[1][1]) {
              firstTemp[1] += 10;
            } else {
              firstTemp[1] -= 10;
            }
          } else {
            if (temp[0][0] < temp[1][0]) {
              firstTemp[0] -= 10;
            } else {
              firstTemp[0] += 10;
            }
          }
          break;
        case "right":
          if (temp[0][1] !== temp[1][1]) {
            firstTemp[0] += 10;
          } else {
            firstTemp[1] -= 10;
          }
          break;
        case "left":
          orderDifferent.current ? (firstTemp[0] -= 10) : (firstTemp[0] -= 10);
          break;
        default:
          //   firstTemp[orderDifferent.current === 1 ? 0 : 1] -= 10;
          break;
      }
      temp.unshift(firstTemp);
      return temp;
    });
  };

  return (
    <div className="flex justify-center">
      <canvas id="myCanvas" width={400} height={400} ref={canvasRef} style={{ border: "1px solid #000000" }} />

      <div>
        <button
          onClick={() => {
            goStraight();
          }}
        >
          turn go forward down {`->`}
        </button>

        <div className="flex flex-col">
          <button
            onClick={() => {
              setDirection("straight");
            }}
          >
            set up straight
          </button>
          <button
            onClick={() => {
              setDirection("right");
            }}
          >
            set up right
          </button>
          <button
            onClick={() => {
              setDirection("left");
            }}
          >
            set up left
          </button>
          <button
            onClick={() => {
              setDirection("back");
            }}
          >
            set up back
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. create canvas
// 2. make the snake move
// 3. create direction
