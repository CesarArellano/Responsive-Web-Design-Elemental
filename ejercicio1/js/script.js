const getScrollBarWidth = () => innerWidth - document.documentElement.clientWidth;
console.log(getScrollBarWidth());
document.documentElement.style.setProperty('--scroll-bar',getScrollBarWidth());