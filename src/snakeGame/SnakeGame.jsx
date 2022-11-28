import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function SnakeGame() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState([
    [0, 10],
    [0, 20],
    [0, 30],
    [0, 40],
    [10, 40],
  ]);
  useEffect(() => {
    console.log("snake move");
    snake.map((item, index) => {
      index = canvasRef.current.getContext("2d");
      index.fillStyle = "green";
      index.fillRect(item[0], item[1], 10, 10);
    });
    // const context2 = canvasRef.current.getContext("2d");
    // context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const apple = canvasRef.current.getContext("2d");
    apple.fillStyle = "blue";
    apple.fillRect(70, 100, 10, 10);
  }, [snake]);

  return (
    <div className="flex justify-center">
      <canvas id="myCanvas" width={400} height={400} ref={canvasRef} style={{ border: "1px solid #000000" }} />
      <button
        onClick={() => {
          setSnake(() => {
            let temp = [...snake];
            temp[0] += 10;
            return temp;
          });
          console.log(snake);
        }}
      >
        move forward
      </button>

      <button
        onClick={() => {
          setSnake(() => {
            let temp = [...snake];
            temp[0] += 10;
            return temp;
          });
          console.log(snake);
        }}
      >
        move down
      </button>

      {snake.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
}

// 1. create canvas
// 2. make the snake move
// 3. create direction
