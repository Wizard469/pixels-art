const body = document.body;

const paletteBox = document.createElement('div');

paletteBox.id = 'color-palette';

body.appendChild(paletteBox);

/*----------------------Palette of Colors------------------------------*/

for (let color = 1; color <= 4; color += 1) {
    let colorElement = document.createElement ('div');
    if (color === 1) {
        colorElement.className = 'color selected';
    } else {
        colorElement.className = 'color'
    }
      
    paletteBox.appendChild (colorElement);
}

let color1 = document.getElementsByClassName('color')[0];
let color2 = document.getElementsByClassName('color')[1];
let color3 = document.getElementsByClassName('color')[2];
let color4 = document.getElementsByClassName('color')[3];

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'red';
color3.style.backgroundColor = 'blue';
color4.style.backgroundColor = 'green';

const containerHeader = document.createElement('div');
body.appendChild(containerHeader);

//Creating input

const btn = document.createElement('div');
btn.innerHTML = 'Limpar';
btn.id = 'clear-board';

containerHeader.appendChild(btn);

btn.addEventListener('click', function(){
    let pixels = document.getElementsByClassName('pixel');

    for(let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white';
    }

})

//Creating pixels board

const pixelBoard = document.createElement('div');
      pixelBoard.id = "pixel-board";
      body.appendChild(pixelBoard);

function createBoard() {
    let n = 5;
    
    for (let lines = 0; lines < n; lines += 1) {
        let line = document.createElement('div');
        line.className = 'line'
        pixelBoard.appendChild(line);
    
        for (let columns = 0; columns < n; columns += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}
createBoard();

paletteBox.addEventListener ('click', function selected (event) {
    //Clear selected color
    let elements = document.querySelectorAll('.color')
    for(let index = 0; index < elements.length; index += 1){
        elements[index].className = 'color';
    }
    event.target.className = 'color selected';
})

function fillColor(event){
    //finding the selected color
    let color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
}

pixelBoard.addEventListener('click', fillColor);