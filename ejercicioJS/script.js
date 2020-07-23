/*
    CSSOM (CSS Object Model)
    window.getComputedStyle(document.querySelector('.main')).getProperty('height');

    element.style // Todo elemento del DOM tiene la propiedad style

    document.body.style.background = 'gray';

// Forma 1 Cambiando clases
function cambiarBackground(){
    document.body.classList.add('red');
}
// Forma 2 Definiendo atributos:
document.addEventListener("DOMContentLoaded", function() {
    const color = 'red';
    const size = 2;
    const styles = `
        background:  ${color};
        color: white;
        margin-top: 4em;
        border-bottom: ${size * 2}px solid black;
    `;
    //1.-  Sobreescribiendo los estilos inline existentes (mejor opción)
    //document.getElementById('title').setAttribute('style',styles);
    const setStyles = (element,styles) => {
        element.setAttribute('style',styles);
    }
    setStyles(document.getElementById('title'),styles);

    //2.- Agregando a los estilos inline existentes
    //document.getElementById('title').style += `${styles}`;
});
*/
// Leer y modificar variables CSS

document.addEventListener("DOMContentLoaded", function() {
    /*Modificar
    document.documentElement.style.setProperty('--name','Mauricio');
    //Leer
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--name'));
    */
   // Media queries con JS (sólo cuando CSS no es capaz de modificar el contenido)

    const mediumBp = matchMedia('(min-width: 800px)');
    const changeColor = mql => {
        mql.matches ? document.body.style.background = 'red' : document.body.style.background = 'yellow' ;
    }
    changeColor(mediumBp);
    mediumBp.addListener(changeColor);
    /*addEventListener('resize', () => {
        console.log(mediumBp);
        if(mediumBp.matches){
            document.body.style.background = "green";
        }
        else{
            document.body.style.background = "gray";
        }
    });*/
});
//Modificar