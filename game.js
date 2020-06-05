// 23CFfc#@*+"1213231
import { update as updateSnake, draw as drawSnake } from "./snake.js";
import { SNAKE_SPEED } from "./constants.js";

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
