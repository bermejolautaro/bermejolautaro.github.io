//METODOS UTILIDADES
function make2DArray(cols, rows){
    let arr = new Array(cols);

    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }

    return arr;
}

//MAIN

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let mousePos = {x: -1, y: -1};

const cols = 20;
const rows = 20;
const height = 800;
const width = 800;
const scaleY = Math.floor((height - 100) / rows);
const scaleX = Math.floor((width - 100) / cols);
const totalMines = 50;
let totalFlags = totalMines;
let revealedCells = cols * rows;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function mousePressed(indexClick){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(indexClick === 0){
                if(grid[i][j].contains(mousePos.x, mousePos.y) && !grid[i][j].flagged){
                    grid[i][j].reveal();
                    if(grid[i][j].hasMine){
                        gameOver(0);
                    }
                }
            }
            else if(indexClick === 2){
                if(grid[i][j].contains(mousePos.x, mousePos.y) && !grid[i][j].revealed){
                    if(grid[i][j].flagged){
                        totalFlags++;
                        grid[i][j].flag();
                    }
                    else if(totalFlags > 0){
                        totalFlags--;
                        grid[i][j].flag();
                    }
                }
            }
        }
    }
    if(revealedCells === totalMines){
        gameOver(1);
    }
}

function gameOver(state){
    if(state === 0){

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                //Inicializar cada cell
                grid[i][j].reveal();
            }
        }
    
        ctx.fillStyle = "red"
        ctx.font = "600 52px Arial";
        ctx.fillText("PERDISTE PUTITA", width / 2, height / 2);
        ctx.strokeStyle = "black";
        ctx.strokeText("PERDISTE PUTITA", width / 2, height / 2);
    }
    else if(state === 1){
        ctx.fillStyle = "green"
        ctx.font = "600 52px Arial";
        ctx.fillText("GANASTE BEBE", width / 2, height / 2);
        ctx.strokeStyle = "black";
        ctx.strokeText("GANASTE BEBE", width / 2, height / 2);
    }
}

canvas.addEventListener("mousemove", function(e){
    mousePos = getMousePos(canvas, e);
},false);

canvas.addEventListener("click", function(e){
    mousePressed(0);
    
}, false);

canvas.addEventListener("contextmenu", function(e){
    e.preventDefault();
    e.stopPropagation();
    mousePressed(2);
}, false);
    


let grid = make2DArray(cols, rows);

let options = [];

//Llenar la grid de Cell
for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
        //Inicializar cada cell
            grid[i][j] = new Cell(i, j, scaleX, scaleY);
            //Todas las posibilidades donde puede ir a parar una mina
            options.push([i, j]);
    }
}

for(let n = 0; n < totalMines; n++){
    let index = Math.floor(Math.random() * options.length);
    let choice = options[index];
    let i = choice[0];
    let j = choice[1];

    options.splice(index, 1);

    grid[i][j].hasMine = true;
}

for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
            grid[i][j].countNeighbours();
    }
}









canvas.setAttribute("width", width.toString());
canvas.setAttribute("height",  height.toString());

//Pintar fondo
ctx.fillStyle = "#fbfbfb";
ctx.fillRect(0, 0, width, height);

//Color de borde de celda
ctx.strokeStyle = "#000";
//Pintar celdas
for(let h = 0; h < 5; h++){ //Solucionar estupido error de alfa y antialiasing de Canvas js
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            //ctx.strokeRect(i * scaleX, j * scaleY, i * scaleX + scaleX, j * scaleY + scaleY);
            grid[i][j].draw();
        }
    }
}






