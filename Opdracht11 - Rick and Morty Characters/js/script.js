var characters = json.results;
console.warn("Zie onderstaand JSON object met alle character informatie");
console.log(characters);

for (let i = 0; i < characters.length-1; i++) {
    var element = document.querySelector(".character");
    var clone = element.cloneNode(true);
    document.querySelector(".container").appendChild(clone);
}

for (let i = 0; i < characters.length; i++) {
    character = document.getElementsByClassName("character")[i];
    character.childNodes[1].innerHTML = characters[i].name;
    character.childNodes[3].src = characters[i].image;
    character.childNodes[5].childNodes[3].innerHTML = characters[i].status;
    character.childNodes[5].childNodes[7].innerHTML = characters[i].species;
    character.childNodes[5].childNodes[11].innerHTML = characters[i].gender;
    character.childNodes[5].childNodes[15].innerHTML = characters[i].origin.name;
    print(characters[i].origin);
}

exampleCharacter = document.getElementsByClassName("character")[0];
console.warn("Zie onderstaande lijst met elementen in de character div");
console.log(exampleCharacter.childNodes)

