const body = document.body;

const paletteBox = document.createElement('div');

paletteBox.id = 'color-palette';

body.appendChild(paletteBox);

/*----------------------Paleta de Cores------------------------------*/

for (let color = 1; color <= 4; color += 1) {
    let colorElement = document.createElement ('div');
    
    colorElement.className = 'color';
    
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

const pixelBoard = document.createElement('div');
      pixelBoard.id = "pixel-board";
      body.appendChild(pixelBoard);

function createBoard() {
    let n = 5   
    
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