const header = document.querySelector('h1');
const body = document.querySelector('body');

header.addEventListener('click', () => {
    body.classList.toggle('dark');
});

header.animate([
    { opacity: 0 },
    { opacity: 1 }
], {
    duration: 1000,
    fill: 'forwards'
});