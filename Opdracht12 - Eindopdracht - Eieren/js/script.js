player1 = {
    name: "Player1",
    symbol: "X",
    points: 0
}

player2 = {
    name: "Player2",
    symbol: "O",
    points: 0
}

board = {
    currentPlayer: player1,
    move: 1,
    gameDone: false,
    winnerSymbol: "",
    box: [1,2,3,4,5,6,7,8,9],
    winningCombination: [],
    winConditions: [
        h1 = [0,1,2],
        h2 = [3,4,5],
        h3 = [6,7,8],

        v1 = [0,3,6],
        v2 = [1,4,7],
        v3 = [2,5,8],

        d1 = [0,4,8],
        d2 = [6,4,2],
    ],

    registerClick(id){
        if(this.gameDone == false){
            if(this.box[id-1] != "X" && this.box[id-1] != "O" ){
                var element = document.querySelector(".box" + id);
                element.innerHTML = this.currentPlayer.symbol;
                this.box[id-1] = this.currentPlayer.symbol;
                this.doMove();
                this.checkWin();
                this.switchPlayer();  
            } 
        }
    },

    switchPlayer(){
        if (this.currentPlayer === player1) {
            this.currentPlayer = player2;
        }
        else{
            this.currentPlayer = player1;
        }
        document.querySelector("#player").innerHTML = this.currentPlayer.name;
        document.querySelector("#points").innerHTML = "Points: " + this.currentPlayer.points;
    },

    doMove(id){
        this.move++;
        document.querySelector("#move").innerHTML = "Move: " + this.move;
    },

    checkWin(){
        for (let i = 0; i < this.winConditions.length; i++) {
            if(this.box[this.winConditions[i][0]] === this.box[this.winConditions[i][1]] && this.box[this.winConditions[i][1]] === this.box[this.winConditions[i][2]]){
                this.winnerSymbol = this.currentPlayer.symbol;
                this.winningCombination = this.winConditions[i];
                this.currentPlayer.points++;
                this.gameDone = true;
                this.showWinningCombination();
                document.querySelector("#resetbutton").disabled = false;
            }
        }
    },

    showWinningCombination(){
        for (let i = 0; i < this.box.length; i++) {
            if (!this.winningCombination.includes(i)) {
                document.querySelector(".box" + (i+1)).style.opacity = 0.5;
            }
        }  
    },
    
    resetBoard(){
        this.move = 1;
        this.winnerSymbol = "";
        this.gameDone = false;
        this.box = [1,2,3,4,5,6,7,8,9];
        for (let i = 0; i < 9; i++) {
            document.getElementsByClassName("box")[i].innerHTML = i+1;
            document.querySelector(".box" + (i+1)).style.opacity = 1.0;
        }
    },

    init(){
        document.querySelector("#resetbutton").disabled = true;
        return this;
    }
};

var currentBoard = board.init();
