const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');

let car = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 100,
  width: 50,
  height: 80,
  speed: 5,
  isMovingLeft: false,
  isMovingRight: false
};

function drawCar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function updateCar() {
  if (car.isMovingLeft) {
    car.x -= car.speed;
  }
  if (car.isMovingRight) {
    car.x += car.speed;
  }

  if (car.x < 0) {
    car.x = 0;
  }
  if (car.x + car.width > canvas.width) {
    car.x = canvas.width - car.width;
  }

  drawCar();
  requestAnimationFrame(updateCar);
}

startButton.addEventListener('click', () => {
  updateCar();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    car.isMovingLeft = true;
  } else if (event.key === 'ArrowRight') {
    car.isMovingRight = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') {
    car.isMovingLeft = false;
  } else if (event.key === 'ArrowRight') {
    car.isMovingRight = false;
  }
});
