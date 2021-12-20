var inleiding = "Onze visie is leidend voor de opleidingsactiviteiten waaronder de beroepspraktijkvorming (BPV) valt. Deze visie is: De opleiding stelt studenten in staat om een beginnend applicatieontwikkelaar te worden die zowel zelfstandig als in een teamverband een bijdrage kan leveren aan het ontwikkelingsproces en aan de applicatie. In het mbo-onderwijs ontwikkelen studenten competenties (als beginnend beroepsbeoefenaar) die nodig zijn voor het uitoefenen van het beroep. Een competentie moet worden gezien als een combinatie van kennis, houding en vaardigheden. De vorming in de praktijk is daar een belangrijk onderdeel van. Omwille van leesbaarheid is steeds 'hij' gebruikt in de tekst. Waar 'hij' staat kan uiteraard ook 'zij' worden gelezen."
var uitgangspunten = "De stage is een verplicht onderdeel van de opleiding waardoor studenten ervaring op de arbeidsmarkt krijgen die aansluit op de kennis die zij tijdens hun opleiding opdoen. De stage wordt niet beoordeeld d.m.v. een proeve omdat alle kerntaken op school worden geëxamineerd. De stage wordt beoordeeld door de praktijkopleider, in samenspraak met de schoolbegeleider, op basis van elders in deze stagegids beschreven criteria. De stage is bedoeld als leer-werkplek waarbij niet alleen ervaring opgedaan wordt op het vakgebied maar ook op het aanleren van de juiste beroepshouding. Hiervoor is een aantal kwaliteiten en eigenschappen benoemd die terug te vinden zijn in bijlage 1, Beroepshoudingsaspecten Applicatieontwikkelaar";

var tekst = inleiding + " <br><br> " + uitgangspunten;
var woordenArray = tekstToArray(tekst);

// console.log(woordenArray);

document.querySelector("#tekst").innerHTML = tekst;
document.querySelector("#input").addEventListener("keyup", checkWords);

function tekstToArray(text){
    return text.trim().split(" ");
}

function checkWords(){
    input = document.querySelector("#input").value;
    var output = "";
    console.log(input);
    if(input.length < 6){
        for (let i = 0; i < woordenArray.length; i++) {
           if(input == woordenArray[i]){
               output += "<span style='color: red; text-decoration: underline'>" + woordenArray[i] + " " + "</span> "
            }
            else{
               output += woordenArray[i] + " ";
            } 
            
        }
        document.querySelector("#tekst").innerHTML = output;
    }    
}