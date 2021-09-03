// Soal 1
console.log();
console.log("Soal 1");

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();
for(var i = 0; i < daftarHewan.length; i++){
	console.log(daftarHewan[i]);
}

// Soal 2
console.log();
console.log("Soal 2");

function introduce(data){
	return "Nama saya " + data.name + ", umur saya " + data.age + " tahun, alamat saya di " + data.address + ", dan saya punya hobby yaitu " + data.hobby;
}

var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
var perkenalan = introduce(data)
console.log(perkenalan)

// Soal 3
console.log();
console.log("Soal 3");

function hitung_huruf_vokal(kata){
	var huruf;
	var jumlah = 0;
	for(var i = 0; i < kata.length ; i++){
		huruf = kata.substr(i,1).toLowerCase();
		if(huruf == "a" || huruf == "i" || huruf == "u" || huruf == "e" || huruf == "o"){
			jumlah++;
		}
	}
	return jumlah;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2) // 3 2

// Soal 4
console.log();
console.log("Soal 4");

function hitung(nilai){
	return 2 * (nilai - 1);
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8
