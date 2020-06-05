// 23CFfc#@*+"1213231
export const SNAKE_SPEED = 1;
export const SNAKE_SPEED_FAKTOR = 1 / SNAKE_SPEED;
const snake = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
  { x: 11, y: 13 },
];
export function update() {
  console.log("update snake");
}
export function draw(board) {
  console.log("snake draw board:", board);
  snake.forEach((part, index) => {
    const partElm = document.createElement("div");
    partElm.style.gridRowStart = part.y.toString();
    partElm.style.gridColumnStart = part.x.toString();
    console.log("part:", partElm);
    if (index === 0) {
      partElm.classList.add("head");
    } else {
      partElm.classList.add("part");
    }
    board.appendChild(partElm);
  });
  console.log("draw snake");
}
