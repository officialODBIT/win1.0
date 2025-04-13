const window1 = document.getElementById('window1');
const titleBar = window1.querySelector('.title-bar');

let isDragging = false;
let offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - window1.offsetLeft;
  offsetY = e.clientY - window1.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    window1.style.left = `${e.clientX - offsetX}px`;
    window1.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
