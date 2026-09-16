// let number = 10;
// console.log(number);
// let zahl67 = 67;
// let text = "js is awesome";
// let bestanden = true;

// zahl67 = "siebenundsechzig";
// console.log(zahl67);


// let johnporkdaddy 
// console.log(johnporkdaddy);

// let random = johnporkdaddy;

// let zahl1 = 10
// let zahl2 = 5

// console.log(zahl1 + zahl2);
// console.log(zahl1 - zahl2);
// console.log(zahl1 * zahl2);
// console.log(zahl1 / zahl2);

// console.log(zahl1 + 5) ;
// console.log(zahl1++); 

// let firstname = "Lennardo";
// let lastname = "Netanyahu";
// let fullname = firstname + " " + lastname;
// console.log(fullname);  

console.log(5 == 5);
console.log(5 === "5");
console.log(5 != 5);
console.log(5 <= 5);
console.log(5 > 5);

console.log("Alpha" < "Beta" && "Beta" < "Gamma");
console.log("Alpha" < "Beta" || "Beta" < "Gamma");

function goyslop(zahl1, zahl2) {
    let ergebnis = zahl1 + zahl2;
    return ergebnis;
}
let ergebnis = goyslop(5, 10);
console.log(ergebnis);


function goyslop2(zahl1, zahl2) {
    let ergebnis = zahl1 *  zahl2;
    return ergebnis;
}

let ergebnis2 = goyslop2(5, 10);
console.log(ergebnis2);     

let ergebnis3 = goyslop2(5, 10) + goyslop(5, 10);
console.log(ergebnis3);

let ergebnis4 = goyslop2(5, 10) + goyslop(5, 10) + 100;
console.log(ergebnis4);
