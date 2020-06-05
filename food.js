// 23CFfc#@*+"1213231
import { snakeOn, growSnake } from "./snake.js";
import { getPosition } from "./board.js";
import { SNAKE_GROTH } from "./constants.js";

let foodPosition = getPosition(true);

export function update() {
  if (snakeOn(foodPosition)) {
    growSnake(SNAKE_GROTH);
    // new place for food
    foodPosition = getPosition(true);
  }
}

export function draw(board) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// export function getRandomPosition() {
//   let newFoodPosition;
//   while (newFoodPosition == null || onSnake(newFoodPosition)) {
//     newFoodPosition = getRandomPositionFor(false);
//   }
//   return newFoodPosition;
// }
