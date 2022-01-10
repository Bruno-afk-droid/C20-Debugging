//priemgetal

//start with empty array
var numbers = [];

function getRandomNumber(min, max){
    getal = Math.floor(Math.random() * (max - min) + min);
    return getal;
}

function fillArrayWithRandomNumbers(min, max){
    for (let i = 0; i < 10; i++) {
        randomGetal = getRandomNumber(min, max); 
        if (!numbers.includes(randomGetal)) {
            numbers.push(randomGetal);
        }
        else{
            console.error("number already in array: " + randomGetal + " | skipping...")
        }
    }
    console.log(numbers);
}

function zoekPriemgetallen(){
    numbers = [];
    console.clear();
    //get input values
    inputVan = Number(Math.abs(document.querySelector("#inputVan").value));
    inputTot = Number(Math.abs(document.querySelector("#inputTot").value));
    fillArrayWithRandomNumbers(inputVan, inputTot);
    calculatePrimes();
    //clear array
    // numbers = [];
}

function calculatePrimes(){
    primeNumberArray = [];
    for (let i = 0; i < numbers.length; i++){
        dividableByArray = [];
        possiblePrime = numbers[i];
        for (let j = 0; j <= 5; j++){
            result = possiblePrime / j
            if(result == Math.floor(result)){
                dividableByArray.push(result);
            }
        }
        if (dividableByArray.length == 2){
            //prime number found!
            primeNumberArray.push(possiblePrime);
            console.warn("Getal " + possiblePrime + " is alleen deelbaar door " + dividableByArray[1] + " en " + dividableByArray[1] + " en is dus een PRIEMgetal!" );
        }
        else{
            dividableByArray[0]=1;
            console.log("Getal " + possiblePrime + " is deelbaar door " + dividableByArray.toString() + " en is dus GEEN priemgetal!" );
        }   
    }
    console.log(primeNumberArray.length + " primes found: (" + primeNumberArray + ")");
}