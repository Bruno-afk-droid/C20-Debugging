var start = 1;
var end = 11;

for (let i = start; i < end; i++) {
    row = "";
    for (let j = start; j < end; j++) {
        number = i*j;
        number = number.toString();
        number = number.padStart(2, "0");
        row += number + " | ";
    }
    console.log(row);
}