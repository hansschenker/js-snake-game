// // 23CFfc#@*+"1213231
import { GRID_SIZE } from "./constants";
import { snakeOn } from "./snake";

export function getPosition(forFood = false) {
  if (forFood) {
    let foodposition;
    while (foodposition == null || snakeOn(foodposition)) {
      foodposition = randomPosition();
    }
    return foodposition;
  } else {
    return randomPosition();
  }
}

export function randomPosition() {
  return {
    x: (Math.floor(Math.random() * GRID_SIZE) + 1).toString(),
    y: (Math.floor(Math.random() * GRID_SIZE) + 1).toString(),
  };
}

export function outsideBoard(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
