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
    [80, 40],
    [80, 30],

    //[x,y]
  ]);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState("straight");
  const [start, setStart] = useState(false);
  const [apple, setApple] = useState([300, 300]);
  const handleKeyDown = (event) => {
    if (snake[0][0] === snake[1][0]) {
      if (snake[0][1] > snake[1][1]) {
        if (event.key === "ArrowDown") {
          setDirection("right");
        } else if (event.key === "ArrowUp") {
          setDirection("left");
        }
      } else if (snake[0][1] < snake[1][1]) {
        if (event.key === "ArrowDown") {
          setDirection("left");
        } else if (event.key === "ArrowUp") {
          setDirection("right");
        }
      }
    } else if (snake[0][0] !== snake[1][0]) {
      if (snake[0][0] > snake[1][0]) {
        if (event.key === "ArrowRight") {
          setDirection("left");
        } else if (event.key === "ArrowLeft") {
          setDirection("right");
        }
      } else if (snake[0][0] < snake[1][0]) {
        if (event.key === "ArrowRight") {
          setDirection("right");
        } else if (event.key === "ArrowLeft") {
          setDirection("left");
        }
      }
    }
  };
  const ref = useRef(null);
  const setupFruit = () => {
    setApple(() => {
      return [Math.round(Math.random() * 40) * 10, Math.round(Math.random() * 40) * 10];
    });
  };
  const setUpPoint = () => {
    snake.map((item) => {
      if (item[0] === apple[0] && item[1] === apple[1]) {
        console.log('go here')
        setupFruit();
        setSnake(() => {
          let temp = [...snake];
          temp.push(apple);
          return temp;
        });
        return setScore(() => {
          let temp = score;
          temp += 1;
          return temp;
        });
      }
    });
  };
  useEffect(() => {
    setDirection("straight");
    let context;
    context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // context.setTransform(40, 0, 0, 40, 0, 0);
    snake.map((item, index) => {
      context.fillStyle = `${index === 0 ? "blue" : "green"}`;
      context.fillRect(item[1], item[0], 10, 10);
    });
    setUpPoint();

    const fruit = canvasRef.current.getContext("2d");
    fruit.fillStyle = "red";
    fruit.fillRect(apple[0], apple[1], 10, 10);
    start &&
      setTimeout(() => {
        goStraight();
      }, 50);
  }, [snake, apple, score, start]);
  //   useEffect(() => {}, [snake, start, score]);

  const goStraight = () => {
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
          if (temp[0][0] === temp[1][0]) {
            if (temp[0][1] > temp[1][1]) {
              firstTemp[0] += 10;
            } else if (temp[0][1] < temp[1][1]) {
              firstTemp[0] -= 10;
            }
          } else if (temp[0][0] !== temp[1][0]) {
            if (temp[0][0] > temp[1][0]) {
              firstTemp[1] -= 10;
            } else if (temp[0][0] < temp[1][0]) {
              firstTemp[1] += 10;
            }
          }
          break;
        default:
          if (temp[0][0] === temp[1][0]) {
            if (temp[0][1] > temp[1][1]) {
              firstTemp[0] -= 10;
            } else if (temp[0][1] < temp[1][1]) {
              firstTemp[0] += 10;
            }
          } else if (temp[0][0] !== temp[1][0]) {
            if (temp[0][0] > temp[1][0]) {
              firstTemp[1] += 10;
            } else if (temp[0][0] < temp[1][0]) {
              firstTemp[1] -= 10;
            }
          }
          break;
      }
      temp.unshift(firstTemp);
      return temp;
    });
  };

  return (
    <div className="flex flex-wrap " ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
      <h1 className="w-full">Your score : {score}</h1>
      <canvas id="myCanvas" width={400} height={400} ref={canvasRef} style={{ border: "1px solid #000000" }} onKeyDown={handleKeyDown} />
      <div>
        <div className="flex flex-col">
          <button
            onClick={() => {
              setStart(true);
            }}
          >
            start
          </button>
        </div>
      </div>
    </div>
  );
}

// 1. create canvas
// 2. make the snake move
// 3. create direction
