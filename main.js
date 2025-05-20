let color='blanco';
function handleClick(e){
    let cuadrado=e.target;
    if (cuadrado.classList.contains('rojo')){
        color = 'red';
    }else if (cuadrado.classList.contains('verde')){
        color = 'green';
    }else if (cuadrado.classList.contains('amarillo')){
        color = 'yellow';
    }else if (cuadrado.classList.contains('negro')){
        color = 'black';
    }else if (cuadrado.classList.contains('azul')){
        color = 'blue';
    }else if (cuadrado.classList.contains('blanco')){
        color = 'white';
    }
    if (cuadrado.classList.contains('cuadrado')){
        cuadrado.style.background = color;
    }
}