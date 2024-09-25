let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() > 8 && huidigeTijd.getHours() < 17){
    console.log("Je bent in school");
} else {
    console.log("je zit buit school");
}
