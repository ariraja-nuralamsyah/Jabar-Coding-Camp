// soal 1 
console.log("Soal 1")

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

// console.log(pertama.substr(0,4) + " " + pertama.substr(12,6) + " " + kedua.substr(0,7) + " " + kedua.substr(8,11).toUpperCase());
console.log(pertama.substr(0,5).concat(pertama.substr(12,7).concat(kedua.substr(0,8).concat(kedua.substr(8,11).toUpperCase()))));
// console.log(pertama.substr(0,5) + pertama.substr(12,7) + kedua.substr(0,8) + kedua.substr(8,11).toUpperCase());
console.log();

// soal 2
console.log("Soal 2")

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var intPertama = Number(kataPertama);
var intKedua = Number(kataKedua);
var intKetiga = Number(kataKetiga);
var intKeempat = Number(kataKeempat);

var jawabanPertama = intPertama + (intKedua * intKetiga) + intKeempat;

console.log(kataPertama + " + ( " + kataKedua + " * " + kataKetiga + " ) + " + kataKeempat + " = " + jawabanPertama);
console.log();

// soal 3
console.log("Soal 3")

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(4,10); // do your own! 
var kataKetiga = kalimat.substr(15,3); // do your own! 
var kataKeempat = kalimat.substr(19,5); // do your own! 
var kataKelima = kalimat.substring(25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);