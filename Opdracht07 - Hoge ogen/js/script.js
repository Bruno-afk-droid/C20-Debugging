player1 = {
    name: "Player1",
    worp: [],
    points: 0
}

player2 = {
    name: "Computer",
    worp: [],
    points: 0
}

function werpDobbelsteen(){
    var randomNumber = Math.floor(Math.random()*6 + 1);
    return randomNumber;
}

function werpDobbelstenen(){
    worp = [];
    for (let i = 0; i < 5; i++) {
        worp[i] = werpDobbelsteen();
    }
    return worp;
}

function playerWerp(){
    player1.worp = werpDobbelstenen();
    player2.worp = werpDobbelstenen();

    player1Totaal = calculateScore(player1.worp);
    player2Totaal = calculateScore(player2.worp);

    console.log(player1.worp);
    console.warn("Player1 score is: " + player1Totaal);
    console.log(player2.worp);
    console.warn("Player2 score is: " + player2Totaal);

    if(player1Totaal > player2Totaal){
        player1.points++;
        console.error("Player1 Wins!")
    }
    else{
        player2.points++;
        console.error("Player2 Wins!")
    }
    console.log("Stand: " + player1.name +": " + player1.points + " | " + player2.name + ": " + player2.points);

}


function calculateScore(worp){
    var result = 0;
    for (let i = 0; i < worp.length; i++) {
        result = result + worp[i];
    }
    return result;
}