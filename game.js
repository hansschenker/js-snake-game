import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snake.js";
//import { update as updateFood, draw as drawFood } from './food.js'
// import { outsideGrid } from './grid.js'

let lastRenderedMiliseconds = 0;
let gameOver = false;
const gameBoard = document.getElementById("board");

function main(currentMiliSeconds) {
  window.requestAnimationFrame(main);

  const LastRenderedSecond = getLastRenderTimeSeconds(currentMiliSeconds);

  if (LastRenderedSecond < 1 / SNAKE_SPEED) return;

  lastRenderedMiliseconds = currentMiliSeconds;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  //updateFood()
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  // drawFood(gameBoard)
}
function getLastRenderTimeSeconds(miliSeconds) {
  return (miliSeconds - lastRenderedMiliseconds) / 1000;
}
function checkDeath() {
  // gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
