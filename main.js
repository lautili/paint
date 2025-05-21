function handleClick(e){
    let cuadrado=e.target;
    let color = document.querySelector('input').value;
    if (cuadrado.classList.contains('cuadrado')){
        cuadrado.style.background = color;
    }
}