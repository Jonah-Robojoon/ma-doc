//berekent de inhoud van kubus
function berekenInhoud(lenkte,breede,hoogte){
    let Inhoud = lenkte * breede * hoogte;
    return Inhoud;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);


//berekent de inhoud van cylinder
function berekenCylinderInhoud(Radius, hoogte){
    let Inhoud = Radius**2 * Math.PI * hoogte;
    return Inhoud;
}

let CylinderInhoud = berekenCylinderInhoud(10, 5);
console.log(CylinderInhoud);


//berekend de zijde van een driehoek
function berekenDriehoekZijde(lengte, hoogte){
    let Zijde = Math.sqrt(lengte**2 + hoogte**2);
    return Zijde;
}

let DriehoekZijde = berekenDriehoekZijde(3, 4);
console.log(DriehoekZijde);


//berkend gemiddelde nummer
function gemiddelde(G1,G2,G3,G4,G5,G6,G7){
    let gemiddeldeSijfer = (G1+G2+G3+G4+G5+G6+G7)/7;
    return gemiddeldeSijfer;
}

let gemiddeldeNummer = gemiddelde(5,8,3,4,1,9,4);
console.log(gemiddeldeNummer)

