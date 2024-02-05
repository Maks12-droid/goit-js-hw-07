const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

function createBoxes() {
  destroyBoxes(); 
  
  const amountInput = document.querySelector('input');
  const amount = +amountInput.value;

  if (amount >= 1 && amount <= 100) {
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
    
    amountInput.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

controls.addEventListener('click', event => {
  if (event.target.dataset.action === 'create') {
    createBoxes();
  }
  if (event.target.dataset.action === 'destroy') {
    destroyBoxes();
  }
});
