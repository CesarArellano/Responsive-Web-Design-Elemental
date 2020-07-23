/*
    CSSOM (CSS Object Model)
    window.getComputedStyle(document.querySelector('.main')).getProperty('height');

    element.style // Todo elemento del DOM tiene la propiedad style

    document.body.style.background = 'gray';

*/
// Forma 1 Cambiando clases
function cambiarBackground(){
    document.body.classList.add('red');
}
// Forma 2:
document.addEventListener("DOMContentLoaded", function() {
    const color = 'red';
    const size = 2;
    const styles = `
        background:  ${color};
        color: white;
        margin-top: 4em;
        border-bottom: ${size * 2}px solid black;
    `;
    document.getElementById('title').setAttribute('style',styles);
});