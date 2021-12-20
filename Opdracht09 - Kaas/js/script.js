player1 = {
    name: "Player 1",
    symbol: "X",
    points: 0
}

player2 = {
    name: "Player 2",
    symbol: "O",
    points: 0
}

var currentPlayer = player1;

var move = 1;
var gameDone = false;
var winnerSymbol = "";
document.querySelector("#resetbutton").disabled = true;

var box = [1,2,3,4,5,6,7,8,9];

function switchPlayer(){
    move++;
    document.querySelector("#move").innerHTML = "Move: " + move;

    if(currentPlayer == player1){
        currentPlayer = player2;
    }
    else{
        currentPlayer = player1;
    }
    document.querySelector("#player").innerHTML = currentPlayer.name;
    document.querySelector("#points").innerHTML = "Points: " + currentPlayer.points;
}

function registerClick(boxNumber){
    if(gameDone == false){
        var boxId = ".box" + boxNumber;
        var element = document.querySelector(boxId);
        
        if(box[boxNumber] != "X" || box[boxNumber] != "O" ){
            element.innerHTML = currentPlayer.symbol;
            box[boxNumber-1] = currentPlayer.symbol;
            
            checkWin();
            if(gameDone == false){
                switchPlayer();
            }   
        }       
    }
}

function checkWin(){
    if(move > 4){
        //horizontaal
        if(box[0] === box[1] && box[1] === box[2]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([0,1,2]);
        }
        if(box[3] === box[4] && box[4] === box[5]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([3,4,5]);
        }  
        if(box[6] === box[7] && box[7] === box[8]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([6,7,8]);
        } 
        
        //vertikaal
        if(box[0] === box[3] && box[3] === box[6]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([0,3,6]);
        }
        if(box[1] === box[4] && box[4] === box[7]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([1,4,7]);
        }  
        if(box[2] === box[5] && box[5] === box[8]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([2,5,8]);
        }
        
        //diagonaal
        if(box[0] === box[4] && box[4] === box[8]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([0,4,8]);
        }  
        if(box[2] === box[4] && box[4] === box[6]){
            winnerSymbol = currentPlayer.symbol;
            showWinningCombination([2,4,6]);
        }
         
    }
    if(winnerSymbol != ""){
        if(player1.symbol == winnerSymbol){
            player1.points++;
        }
        else{
            player2.points++;
        }
        gameDone = true;
        console.log(currentPlayer.name + " wins!")
        document.querySelector("#points").innerHTML = "Points: " + currentPlayer.points;
        document.querySelector("#resetbutton").disabled = false;
    }    
}

function showWinningCombination(arrWinningBoxes){
    for (let i = 0; i < box.length; i++) {
        if (arrWinningBoxes.includes(i)) {
            document.querySelector(".box" + (i+1)).style.opacity = 1;
        }
        else{
            document.querySelector(".box" + (i+1)).style.opacity = 0.5;
        }
    }
}

function resetBoard(){
    move = 1;
    winnerSymbol = "";
    gameDone = false;
    box = [1,2,3,4,5,6,7,8,9];
    for (let i = 0; i < 9; i++) {
        document.getElementsByClassName("box")[i].innerHTML = i+1;
        document.querySelector(".box" + (i+1)).style.opacity = 1;
    }
}