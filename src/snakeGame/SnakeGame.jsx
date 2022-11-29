/* eslint-disable no-fallthrough */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function SnakeGame() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState([
    [50, 150],
    [50, 160],
    [50, 170],
    //[y,x]
  ]);
  const direction = {};
  const move = useRef();
  useEffect(() => {
    let context;
    context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // context.setTransform(40, 0, 0, 40, 0, 0);
    snake.map((item, index) => {
      context.fillStyle = "green";
      context.fillRect(item[0], item[1], 10, 10);
    });

    const apple = canvasRef.current.getContext("2d");
    apple.fillStyle = "blue";
    apple.fillRect(70, 100, 10, 10);
  }, [snake]);
  const findOrderDifferent = (arr) => {
    let orderDifferent = 0;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i][0] !== arr[i + 1][0]) {
        orderDifferent = 0;
      } else {
        orderDifferent = 1;
      }
    }

    return orderDifferent;
  };
  return (
    <div className="flex justify-center">
      <canvas id="myCanvas" width={400} height={400} ref={canvasRef} style={{ border: "1px solid #000000" }} />
      <button
        onClick={() => {
          setSnake(() => {
            let temp = [...snake];
            let order = findOrderDifferent(temp);
            move.current = "up";

            temp.map((item) => {
              switch (move.current) {
                case "up":
                  item[order] -= 10;
                  break;
                default:
                  item[order] += 10;
              }
            });

            return temp;
          });
        }}
      >
        move forward
      </button>
      <div>
        <button onClick={() => {}}>turn left</button>
      </div>
    </div>
  );
}

// 1. create canvas
// 2. make the snake move
// 3. create direction
