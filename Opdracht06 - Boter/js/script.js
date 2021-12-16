var player1 = "X";
var player2 = "O";
var currentPlayer = player1;

var move = 1;
var gameDone = false;

var box1 = "";
var box2 = "";
var box3 = "";
var box4 = "";
var box5 = "";
var box6 = "";
var box7 = "";
var box8 = "";
var box9 = "";

function switchPlayer(){
    move++;
    if(currentPlayer == player1){
        currentPlayer = player2;
    }
    else{
        currentPlayer = player1;
    }
    document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") - Move: " + (move);
}

function registerClick(boxNumber){
    if(gameDone == false){
        var boxId = ".box" + boxNumber;
        var element = document.querySelector(boxId);

        if(element.innerHTML == boxNumber){
            element.innerHTML = currentPlayer;
            
            if(boxNumber == 1){ box1 = currentPlayer; }
            if(boxNumber == 2){ box2 = currentPlayer; }
            if(boxNumber == 3){ box3 = currentPlayer; }
            if(boxNumber == 4){ box4 = currentPlayer; }
            if(boxNumber == 5){ box5 = currentPlayer; }
            if(boxNumber == 6){ box6 = currentPlayer; }
            if(boxNumber == 7){ box7 = currentPlayer; }
            if(boxNumber == 8){ box8 = currentPlayer; }
            if(boxNumber == 9){ box9 = currentPlayer; }
        
            checkWin();
            if(gameDone == false){
                switchPlayer();
            }   
        }       
    }
    
}

function checkWin(){
    // Player1 "X"
    //horizontaal ≡
    if(box1 == "X" && box2 == "X" && box3 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        // document.querySelector(".box2").style.opacity = 0.5;
        // document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box4 == "X" && box5 == "X" && box6 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        // document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        // document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box7 == "X" && box8 == "X" && box9 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        // document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }

    // vertikaal |||
    if(box1 == "X" && box4 == "X" && box7 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        // document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box2 == "X" && box5 == "X" && box8 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        // document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        // document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box3 == "X" && box6 == "X" && box9 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        // document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        // document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }

    //diagonaal \ en /
    if(box1 == "X" && box5 == "X" && box9 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box3 == "X" && box5 == "X" && box7 == "X"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        //document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }

    // Player2 "O"
    //horizontaal ≡
    if(box1 == "O" && box2 == "O" && box3 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        // document.querySelector(".box2").style.opacity = 0.5;
        // document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box4 == "O" && box5 == "O" && box6 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        // document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        // document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box7 == "O" && box8 == "O" && box9 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        // document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }

    // vertikaal |||
    if(box7 == "O" && box4 == "O" && box1 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        // document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box2 == "O" && box5 == "O" && box8 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        // document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        // document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box3 == "O" && box6 == "O" && box9 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        // document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        document.querySelector(".box5").style.opacity = 0.5;
        // document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }

    //diagonaal \ en /
    if(box1 == "O" && box5 == "O" && box9 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        // document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        // document.querySelector(".box9").style.opacity = 0.5;
        gameDone = true;
    }
    if(box3 == "O" && box5 == "O" && box7 == "O"){
        document.querySelector('#info').innerHTML = "Player" + ((move%2)+1) + " (" + currentPlayer + ") WINS in " + (move-1) + " moves";
        document.querySelector(".box1").style.opacity = 0.5;
        document.querySelector(".box2").style.opacity = 0.5;
        // document.querySelector(".box3").style.opacity = 0.5;
        document.querySelector(".box4").style.opacity = 0.5;
        // document.querySelector(".box5").style.opacity = 0.5;
        document.querySelector(".box6").style.opacity = 0.5;
        // document.querySelector(".box7").style.opacity = 0.5;
        document.querySelector(".box8").style.opacity = 0.5;
        document.querySelector(".box9").style.opacity = 0.5;   
        gameDone = true;
    }

}