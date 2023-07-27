const img = document.querySelector(".imgContainer");
const startBtn = document.querySelector(".startBtn");
let start = false;
let color = "black";
let dollData = [];

const setDoll = (e) => {
  if (start && color === "black") {
    let [x, y] = findOffset(e);
    dollData.unshift({ color: `${color}`, offset: [x, y] });
    appendDoll(color, x, y);
    color = "white";
  } else if (start && color === "white") {
    let [x, y] = findOffset(e);
    dollData.unshift({ color: `${color}`, offset: [x, y] });
    appendDoll(color, x, y);
    color = "black";
  } else {
    alert("시작버튼을 눌러주세요");
  }
};
const appendDoll = (color, x, y) => {
  const p = document.createElement("p");
  p.className = `${color}Doll`;
  p.style.left = `${x}px`;
  p.style.top = `${y}px`;
  img.appendChild(p);
};

const findOffset = (e) => {
  let X =
    e.offsetX % 30 >= 15
      ? e.offsetX - (e.offsetX % 30) + 30
      : e.offsetX - (e.offsetX % 30);
  let Y =
    e.offsetY % 30 >= 15
      ? e.offsetY - (e.offsetY % 30) + 30
      : e.offsetY - (e.offsetY % 30);
  return [X, Y];
};

img.addEventListener("click", (e) => {
  setDoll(e);
});
startBtn.addEventListener("click", () => {
  start = true;
});
