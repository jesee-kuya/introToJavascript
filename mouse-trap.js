let lastCircle = null;
let box = null;
let hasEntered = false;
export const createCircle = () => {
  document.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;
    circle.style.background = 'white';
    document.body.appendChild(circle);
    lastCircle = circle;
    hasEntered = false;
  });
}
