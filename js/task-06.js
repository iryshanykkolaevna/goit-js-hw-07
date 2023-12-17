const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const newBoxes = [];
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const newBox = `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
      newBoxes.push(newBox);
      width += 10;
      height += 10;
    }
    boxes.innerHTML = newBoxes.join('');
    input.value = '';
  }
}

createBtn.addEventListener('click', () => {
  const inputNum = parseInt(input.value);
  if (inputNum >= 1 && inputNum <= 100) {
    createBoxes(inputNum);
  } else {
    alert('Введіть число від 1 до 100');
  }
  input.value = '';
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});