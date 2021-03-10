card = document.querySelector('.card');

card.addEventListener('mousemove' , eventHandler);

heading = document.querySelector('h5');

function eventHandler(e)
{
    heading.textContent = `X: ${e.offsetX} Y:${e.offsetY}`

     document.body.style.backgroundColor = `rgb( ${e.offsetX},${e.offsetY},60)`
}