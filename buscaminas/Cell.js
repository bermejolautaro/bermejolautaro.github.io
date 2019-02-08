class Cell{
    constructor(i, j, w, h){
        this.revealed = false;
        this.flagged = false;
        this.totalNeighbours = 0;
        this.hasMine = false;

        this.w = w;
        this.h = h;
        this.i = i;
        this.j = j;
        this.x = i * w + gridOffset;
        this.y = j * h + gridOffset;


    }

    draw(){
        if(this.revealed){
            // ctx.fillStyle = "#ccc"
            // ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.drawImage(sprite, 77, 213, 62, 62, this.x, this.y, this.w, this.h);
            if(this.hasMine){
                // ctx.fillStyle = "#999"
                // ctx.strokeStyle = "#000";
                // ctx.fillRect(this.x + 1, this.y + 1, this.w - 2, this.h - 2);
                // ctx.strokeRect(this.x + 1, this.y + 1, this.w - 2 , this.h - 2);
                // ctx.fillStyle = "#000";
                // ctx.fillStyle = "#000";
                // ctx.beginPath();
                // if(this.h <= this.w){
                //     ctx.arc(this.x + this.w / 2, this.y + this.h / 2, (this.h - 10) / 2, 0, Math.PI * 2);
                // }
                // else{
                //     ctx.arc(this.x + this.w / 2, this.y + this.h / 2, (this.w - 10) / 2, 0, Math.PI * 2);
                // }
                // ctx.fill();

                ctx.drawImage(sprite, 349, 213, 62, 62, this.x, this.y, this.w, this.h);
            }
            else{
                // ctx.font = "16px Arial";
                // ctx.fillStyle = "#999"
                // ctx.strokeStyle = "#000";
                // ctx.fillRect(this.x + 1, this.y + 1, this.w - 2, this.h - 2);
                // ctx.strokeRect(this.x + 1, this.y + 1, this.w - 2 , this.h - 2);
                // ctx.fillStyle = "#000";
                // ctx.textAlign = "center";

                ctx.drawImage(sprite, 77, 213, 62, 62, this.x, this.y, this.w, this.h);

                if(this.totalNeighbours !== 0){
                    ctx.save();
                    ctx.font = "900 16px Arial";
                    switch(this.totalNeighbours){
                        // case 1: ctx.fillStyle = "blue"; break;
                        // case 2: ctx.fillStyle = "green"; break;
                        // case 3: ctx.fillStyle = "red"; break;
                        // case 4: ctx.fillStyle = "#0b0a57"; break;
                        // case 5: ctx.fillStyle = "#770e0e"; break;
                        // case 6: ctx.fillStyle = "#107584"; break;
                        // case 7: ctx.fillStyle = "black"; break;
                        // case 8: ctx.fillStyle = "black"; break;
                        case 1: ctx.drawImage(sprite, 9, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 2: ctx.drawImage(sprite, 77, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 3: ctx.drawImage(sprite, 145, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 4: ctx.drawImage(sprite, 213, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 5: ctx.drawImage(sprite, 281, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 6: ctx.drawImage(sprite, 349, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 7: ctx.drawImage(sprite, 417, 281, 62, 62, this.x, this.y, this.w, this.h); break;
                        case 8: ctx.drawImage(sprite, 485, 281, 62, 62, this.x, this.y, this.w, this.h); break;

                    }
                    // ctx.fillText(this.totalNeighbours, this.x + this.w / 2, this.y + this.h / 2 + 5);
                    ctx.restore();
                }
            }


        }
        else if(this.flagged){
            // ctx.fillStyle = "#00FF00"
            // ctx.strokeStyle = "#000";
            // ctx.fillRect(this.x, this.y, this.w, this.h);
            // ctx.strokeRect(this.x, this.y, this.w, this.h);

            ctx.drawImage(sprite, 144, 212, 64, 64, this.x, this.y, this.w, this.h);
        }
        else{
            // ctx.fillStyle = "#c0c0c0"
            // ctx.strokeStyle = "#000";
            // ctx.fillRect(this.x, this.y, this.w, this.h);
            // ctx.strokeRect(this.x, this.y, this.w, this.h);
            // ctx.beginPath();
            // ctx.moveTo(this.x + 1, this.y + 1);
            // ctx.lineTo(this.x + 1, this.y + 1 + this.h);
            // ctx.moveTo(this.x + 1, this.y + 1);
            // ctx.lineTo(this.x + 1 + this.w, this.y + 1);
            // ctx.strokeStyle = "#FFF";
            // ctx.stroke();

            // ctx.beginPath();
            // ctx.moveTo(this.x + this.w - 1, this.y + 1);
            // ctx.lineTo(this.x + this.w - 1, this.y + 1 + this.h);
            // ctx.moveTo(this.x + 1, this.y + 1);
            // ctx.lineTo(this.x + 1 + this.w, this.y + 1);
            // ctx.strokeStyle = "#000";
            // ctx.stroke();

            ctx.drawImage(sprite, 9, 213, 62, 62, this.x, this.y, this.w, this.h);
        }
    }

    reveal(){


        if(!this.revealed){
            revealedCells--;
            this.revealed = true;
            this.draw();
        }
        if(!this.hasMine && this.totalNeighbours === 0){
            this.floodFill();
        }
        
        
        if(this.hasMine && running){
            gameOver(0);
        }
        if(revealedCells === totalMines && running){
            gameOver(1);
        }
        
    }

    flag(){
        this.flagged = !this.flagged;
        this.draw();
    }

    contains(x, y){
        return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h);
    }

    countNeighbours(){
        if(this.hasMine){
            this.totalNeighbours = -1;
            return -1;
        }
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                if(this.i + i >= 0 && this.i + i < grid.length && this.j + j >= 0 && this.j + j < grid[0].length){
                    let neighbour = grid[this.i + i][this.j + j];
                    if(neighbour.hasMine){
                        this.totalNeighbours++;
                    }
                }
            }
        }

    }

    floodFill(){
        for(let i = -1; i <= 1; i++){
            for(let j = -1; j <= 1; j++){
                if(this.i + i >= 0 && this.i + i < grid.length && this.j + j >= 0 && this.j + j < grid[0].length){
                    let neighbour = grid[this.i + i][this.j + j];
                    if(!neighbour.hasMine && !neighbour.revealed && !neighbour.flagged){
                        neighbour.reveal();
                    }
                }
            }
        }
    }
}