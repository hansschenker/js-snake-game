// 23CFfc#@*+"1213231
let currDirection = { x: 0, y: 0 };
let prevDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (prevDirection.y !== 0) break;
      currDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (prevDirection.y !== 0) break;
      currDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (prevDirection.x !== 0) break;
      currDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (prevDirection.x !== 0) break;
      currDirection = { x: 1, y: 0 };
      break;
  }
});

export function getDirection() {
  prevDirection = currDirection;
  return currDirection;
}
