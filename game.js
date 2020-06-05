import {
  SNAKE_SPEED_FAKTOR,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

// 23CFfc#@*+"1213231
const boardElm = document.getElementById("board");
console.log("board:", boardElm);
let lastRenderTime = 0;

function main(frameTime) {
  // call animation
  //window.requestAnimationFrame(main);
  // calculate elapsed time
  const lastRenderTimeSecs = frameTime - lastRenderTime / 1000;
  if (lastRenderTimeSecs < SNAKE_SPEED_FAKTOR) return;
  console.log(frameTime);
  lastRenderTime = frameTime;
  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
}
function draw() {
  drawSnake(boardElm);
}
