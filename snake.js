// 23CFfc#@*+"1213231
import { getDirection } from "./direction.js";

const snake = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
  { x: 11, y: 13 },
];
let newParts = 0;

export function update() {
  addParts();

  const currDirection = getDirection();
  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] };
  }

  snake[0].x += currDirection.x;
  snake[0].y += currDirection.y;
}
function addParts() {
  for (let i = 0; i < newParts; i++) {
    snake.push({ ...snake[snake.length - 1] });
  }

  newParts = 0;
}

export function draw(board) {
  snake.forEach((part, index) => {
    // create div for part
    const partElm = document.createElement("div");
    partElm.style.gridRowStart = part.y.toString();
    partElm.style.gridColumnStart = part.x.toString();
    // style part
    if (index === 0) {
      partElm.classList.add("head");
    } else {
      partElm.classList.add("part");
    }
    // add new part
    board.appendChild(partElm);
  });
} //

export function growSnake(amount) {
  newParts += amount;
}

export function snakeOn(position, { ignoreHead = false } = {}) {
  return snake.some((part, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(part, position);
  });
}

export function getSnakeHead() {
  return snake[0];
}

export function snakeBitItself() {
  return snakeOn(snake[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
