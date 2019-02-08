
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
let btnGenerate = document.getElementById("btnGenerate");
let ctx = canvas.getContext("2d");

let mousePos = {x: -1, y: -1};

let cols = 10;
let rows = 10;
let height = 800;
let width = 800;
let scaleY = Math.floor((height - 100) / rows);
let scaleX = Math.floor((width - 100) / cols);
let totalMines = Math.floor(cols * rows / 10);
let totalFlags = totalMines;
let revealedCells = cols * rows;
let running = true;
let gridOffset = 50;
let grid = make2DArray(cols, rows);
let sprite = new Image();

ctx.imageSmoothingEnabled = false;

sprite.addEventListener('load', function() {   
    newGame();
  }, false);

sprite.src = "sprite.png";



let options = [];

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function mousePressed(indexClick){
    let i = Math.floor((mousePos.x - gridOffset) / scaleX);
    let j = Math.floor((mousePos.y - gridOffset) / scaleY);
    if(running){
        if(indexClick === 0 && i > -1 && i < grid.length && j > -1 && j < grid[0].length){
            if(grid[i][j].contains(mousePos.x, mousePos.y) && !grid[i][j].flagged){
                grid[i][j].reveal();
            }
        }
        else if(indexClick === 2 && i > -1 && i < grid.length && j > -1 && j < grid[0].length){
            if(grid[i][j].contains(mousePos.x, mousePos.y) && !grid[i][j].revealed){
                if(grid[i][j].flagged){
                    totalFlags++;
                    grid[i][j].flag();
                }
                else if(totalFlags > 0){
                    totalFlags--;
                    grid[i][j].flag();
                }

                window.navigator.vibrate(100);
            }
        }
     }
}

function gameOver(state){
    running = false;
    let trampa = false;

    if(totalMines != revealedCells){
        trampa = true;
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j].reveal();
        }
    }

    if(trampa && state != 0){
        ctx.fillStyle = "red"
        ctx.font = "600 44px Arial";
        ctx.textAlign = "center";
        ctx.fillText("DEJA DE HACER TRAMPA BOBO", width / 2, height / 2);
        ctx.strokeStyle = "black";
        ctx.strokeText("DEJA DE HACER TRAMPA BOBO", width / 2, height / 2);
    }
    else{

        if(state === 0){ 
            ctx.fillStyle = "#FF0000"
            ctx.font = "600 52px Arial";
            ctx.textAlign = "center";
            ctx.fillText("PERDISTE", width / 2, height / 2);
            ctx.strokeStyle = "black";
            ctx.strokeText("PERDISTE", width / 2, height / 2);
        }
        else if(state === 1){
            ctx.fillStyle = "#00FF00"
            ctx.font = "600 52px Arial";
            ctx.textAlign = "center";
            ctx.fillText("GANASTE", width / 2, height / 2);
            ctx.strokeStyle = "black";
            ctx.strokeText("GANASTE", width / 2, height / 2);
        }
        
    }





}

function newGame(){
    let inputRows = parseInt(document.getElementById("inputRows").value);
    let inputCols =  parseInt(document.getElementById("inputCols").value);
    let inputMines =  parseInt(document.getElementById("inputMines").value);

    if(isNaN(inputRows) || inputRows < 1){
        inputRows = 30;
        document.getElementById("inputRows").setAttribute("placeholder", inputRows)
    }
    if(isNaN(inputCols) || inputCols < 1){
        inputCols = 30;
        document.getElementById("inputCols").setAttribute("placeholder", inputCols)
    }
    if(inputMines >= inputRows * inputCols){
        inputMines = inputRows * inputCols;
        document.getElementById("inputMines").setAttribute("placeholder", inputMines)
    }
    else if(isNaN(inputMines) || inputRows < 1){
        inputMines = Math.floor(inputRows * inputCols / 10);
        document.getElementById("inputMines").setAttribute("placeholder", inputMines)
    }

    rows = inputRows;
    cols = inputCols;
    revealedCells = cols * rows;
    totalMines = inputMines;
    totalFlags = totalMines;

    grid = make2DArray(cols, rows);
    options = [];

    scaleY = Math.floor((height - 100) / rows);
    scaleX = Math.floor((width - 100) / cols);


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
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, width, height);

    //Color de borde de celda
    ctx.strokeStyle = "#000";
    //Pintar celdas
    for(let h = 0; h < 5; h++){ //Solucionar estupido error de alfa y antialiasing de Canvas js
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                grid[i][j].draw();
            }
        }
    }

    running = true;

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
    return false;
}, false);


btnGenerate.addEventListener("click", function(e){
    newGame();
}, false);

    
























