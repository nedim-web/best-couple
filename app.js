const button = document.querySelector('input');
const output = document.querySelector('.show-emoji');

const htmlTemp = `
    <img src="/emoji.png" alt="">
`;
button.addEventListener('click', () => {
    output.classList.toggle('show')
});