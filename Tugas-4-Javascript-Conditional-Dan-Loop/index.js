// Soal 1
console.log();
console.log("Soal 1");

var nilai=75;

if(nilai >= 85){
	console.log("indeksnya A");
}else if(nilai >= 75 && nilai < 85){
	console.log("indeksnya B");
}else if(nilai >= 65 && nilai < 75){
	console.log("indeksnya C");
}else if(nilai >= 55 && nilai < 65){
	console.log("indeksnya D");
}else{
	console.log("indeksnya E");
}

// Soal 2
console.log();
console.log("Soal 2");

var tanggal = 30;
var bulan = 7;
var tahun = 2001;

switch(bulan){
	case 1 : { console.log(tanggal+" Januari "+tahun); break; }
	case 2 : { console.log(tanggal+" Februari "+tahun); break; }
	case 3 : { console.log(tanggal+" Maret "+tahun); break; }
	case 4 : { console.log(tanggal+" April "+tahun); break; }
	case 5 : { console.log(tanggal+" Mei "+tahun); break; }
	case 6 : { console.log(tanggal+" Juni "+tahun); break; }
	case 7 : { console.log(tanggal+" Juli "+tahun); break; }
	case 8 : { console.log(tanggal+" Agustus "+tahun); break; }
	case 9 : { console.log(tanggal+" September "+tahun); break; }
	case 10 : { console.log(tanggal+" Oktober "+tahun); break; }
	case 11 : { console.log(tanggal+" November "+tahun); break; } 
	case 12 : { console.log(tanggal+" Desember "+tahun); break; }
	default : { console.log("Inputan bulan tidak benar"); break; }
}

// Soal 3
console.log();
console.log("Soal 3");

var n = 3;
var output;

console.log("Output untuk n=3");
for(var i=1; i<=n ; i++){
	output = '';
	for(var j=1; j<=i ;j++){
		output = output + '#';
	}
	console.log(output);
}

n = 7;
console.log();
console.log("Output untuk n=7");
for(var i=1; i<=n ; i++){
	output = '';
	for(var j=1; j<=i ;j++){
		output = output + '#';
	}
	console.log(output);
}

// Soal 4
console.log();
console.log("Soal 4");

var m = 10;
var noAngka = 1;
for(var i = 1; i <= m ; i++){
	switch(noAngka){
		case 1 : { console.log(i+" - I love programming"); break; }
		case 2 : { console.log(i+" - I love Javascript"); break; }
		case 3 : { console.log(i+" - I love VueJS"); break; }
		default : { 
			console.log("===");
			noAngka = 0;
			i--; 
			break;
		}
	}
	noAngka++;
}