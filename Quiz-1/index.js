// soal 1 
console.log("Soal 1")
console.log();

function next_date(tanggal, bulan, tahun){
	var kabisat = false;
	if(bulan == 1 || bulan == 3 || bulan == 5 || bulan == 7 || bulan == 8 || bulan == 10 || bulan == 12){
		if(tanggal == 31){
			tanggal = 1;
			bulan++;
		}
		else if(tanggal > 0 && tanggal < 31){
			tanggal++;
		}else{
			console.log("Inputan tanggal tidak benar");
			return 0;
		}
	}else if(bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11){
		if(tanggal == 30){
			tanggal = 1;
			bulan++;
		}
		else if(tanggal > 0 && tanggal < 30){
			tanggal++;
		}else{
			console.log("Inputan tanggal tidak benar");
			return 0;
		}
	}else if(bulan == 2){
		if(tahun % 400 == 0){
			kabisat = true;
		}else{
			if(tahun % 100 == 0){
				kabisat = false;
			}else{
				if(tahun % 4 == 0){
					kabisat = true;
				}else{
					kabisat = false
				}
			}
		}

		if(kabisat == true){
			if(tanggal == 29){
				tanggal = 1;
				bulan++;
			}
			else if(tanggal > 0 && tanggal < 29){
				tanggal++;
			}else{
				console.log("Inputan tanggal tidak benar");
				return 0;
			}
		}else{
			if(tanggal == 28){
				tanggal = 1;
				bulan++;
			}
			else if(tanggal > 0 && tanggal < 28){
				tanggal++;
			}else{
				console.log("Inputan tanggal tidak benar");
				return 0;
			}
		}
	}

	if(bulan > 12){
		bulan = 1;
		tahun++;
	}

	switch(bulan){
		case 1 : 
		{ console.log(tanggal+" Januari "+tahun); break; 
	}
	case 2 : 
	{ console.log(tanggal+" Februari "+tahun); break; 
}
case 3 : 
{ console.log(tanggal+" Maret "+tahun); break; 
}
case 4 : 
{ console.log(tanggal+" April "+tahun); break; 
}
case 5 : 
{ console.log(tanggal+" Mei "+tahun); break; 
}
case 6 : 
{ console.log(tanggal+" Juni "+tahun); break; 
}
case 7 : 
{ console.log(tanggal+" Juli "+tahun); break; 
}
case 8 : 
{ console.log(tanggal+" Agustus "+tahun); break; 
}
case 9 : 
{ console.log(tanggal+" September "+tahun); break; 
}
case 10 : 
{ console.log(tanggal+" Oktober "+tahun); break; 
}
case 11 : 
{ console.log(tanggal+" November "+tahun); break; 
} 
case 12 : 
{ console.log(tanggal+" Desember "+tahun); break; 
}
default : 
{ console.log("Inputan bulan tidak benar"); break; 
}
}
}

var tanggal = 31;
var bulan = 12;
var tahun = 2020;

next_date(tanggal, bulan, tahun);

console.log();


// Soal 2

console.log("Soal 2");
console.log();

function jumlah_kata(kalimat){
	var huruf;
	var nextHuruf;
	var jumlah = 0;
	var i = 0;
	while(jumlah != 1){
		if(i == kalimat.length){
			return console.log("Kalimat kosong");
		}
		huruf = kalimat.substr(i,1);
		if(huruf == " "){
			jumlah = 0;
		}else{
			jumlah = 1;
		}
		i++;
	}
	for(var i = 0; i < kalimat.length ; i++){
		huruf = kalimat.substr(i,1);
		if(i != kalimat.length - 1){
			nextHuruf = kalimat.substr(i+1,1);
			if(huruf == " " && (nextHuruf != " ")){
				jumlah++;
			}
		}

	}
	return console.log(jumlah);
}

var kalimat_1 = "Halo nama saya Muhammad Iqbal Mubarok";
var kalimat_2 = "Saya Iqbal"
var kalimat_3 = " ";

jumlah_kata(kalimat_1);
jumlah_kata(kalimat_2);
jumlah_kata(kalimat_3);

console.log();


