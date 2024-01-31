const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes(); // Очищення попередніх блоків
  
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищення контейнера
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

controls.addEventListener('click', event => {
  if (event.target.dataset.action === 'create') {
    const amount = +controls.querySelector('input').value;
    createBoxes(amount);
  }
  if (event.target.dataset.action === 'destroy') {
    destroyBoxes();
  }
});
