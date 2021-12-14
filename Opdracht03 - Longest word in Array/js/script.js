var list = ["examen", "workspace", "stageplek", "afstuderen", "stagebedrijf", "college", "developer", "carriere", "debuggen"];

function findLongestWord(arr){
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i] + ": " + arr[i].length);
        if (i==0) {
            var longestWord = arr[i];
        }
        if(arr[i].length < longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}

var result = findLongestWord(list);
console.log("Longest word in array is: " + result);