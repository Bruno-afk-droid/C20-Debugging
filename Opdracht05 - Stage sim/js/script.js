var stageZoekActies = [
    "LinkedIn updaten",
    "Op stagebedrijf gerichte email onderwerp bedenken",
    "Curriculum Vitea maken",
    "Stageplek zoeken op stagemarkt.nl",
    "Op stagebedrijf gerichte sollicitatie email schrijven",
    "Algemene sollicitatie email schrijven",
    "Stagebedrijf mailen",
    "Wachten op antwoord van het stagebedrijf",
]

var stageZoekActiesStatus = [false,false,false,false,false,false,false,false]
var stageZoekPoging = 1;

function init(){
    for (let i = 0; i < 7; i++) {
        document.getElementsByClassName("stage-actie")[i].disabled = true;
    }
    document.getElementsByClassName("stage-actie")[0].disabled = false;
    console.error("Je LinkedIn profiel is nog niet up-to-date!")
}
init();

function updateLinkedIn(){
    stageZoekActiesStatus[0] = true;
    console.log("LinkedIn profiel geupdate.");
    document.querySelector(".actie2").disabled = true;
}

function schrijfCv(){
    stageZoekActiesStatus[1] = true;
    console.log("Je hebt een fantastisch C.V. geschreven!");
    console.warn("Tijd voor het schrijven van een algemene mail die je makkelijk kunt aanpassen per stagesollicitatie");
    document.querySelector(".actie3").disabled = false;
}

function maakStandaardMail(){
    stageZoekActiesStatus[2] = true;
    console.log("Algemene mail done!");
    console.warn("Tijd om een leuke stageplek te vinden.");
    document.querySelector(".actie4").disabled = false;
}

function zoekStagebedrijf(){
    stageZoekActiesStatus[3] = true;
    console.log("Je hebt een mooi stagebedrijf gevonden...");
    console.warn("Tijd om je algemene mail om te zetten naar de gerichte mail!");
    document.querySelector(".actie5").disabled = false;
}

function maakGerichteMail(){
    stageZoekActiesStatus[4] = true;
    console.log("Je hebt een gerichte mail gemaakt.");
    result = confirm("Heb je goed nagedacht over de onderwerp regel?");
    if(result == true){
        document.querySelector(".actie6").disabled = false;
        console.warn("Mooi, helemaal klaar om je mail te sturen!");   
    }
    else{
        console.error("Denk goed na over je onderwerp regel zodat je email helder overkomt bij het stagebedrijf");
    }
}

function mailStagebedrijf(){
    stageZoekActiesStatus[5] = true;
    console.log("Mail verstuurd...");
    console.warn("Spannend!");
    document.querySelector(".actie7").disabled = false;
}

function wachtOpAntwoord(){
    stageZoekActiesStatus[6] = true;
    randomNumber = Math.floor(Math.random()*10);
    if(randomNumber > 10){
        console.warn("Je hebt een stage gevonden!! Gefeliciteerd!");
    }
    else{
        stageZoekPoging++;
        console.clear();
        console.error("Helaas, geen reactie op je mail...");
        console.log(" ---- Poging ---- nr. " + stageZoekPoging);
        stageZoekActiesStatus[3] = false;
        stageZoekActiesStatus[4] = false;
        stageZoekActiesStatus[5] = false;
        stageZoekActiesStatus[6] = false;
        document.querySelector(".actie5").disabled = true;
        document.querySelector(".actie6").disabled = true;
        document.querySelector(".actie7").disabled = true;


    }
}