// Soal 1
console.log();
console.log("Soal 1");

const luas = (panjang, lebar) => {
	return panjang * lebar;
}

const keliling = (panjang, lebar) => {
	return 2 * (panjang + lebar);
}

const persegiPanjang = (panjang, lebar) => {
	let luas = panjang * lebar; 
	let keliling = 2 * (panjang + lebar);
	console.log("Luas : "+ luas);
	console.log("Keliling : "+ keliling);
}

let panjang = 4;
let lebar = 10;
console.log("Example 1 : P="+panjang+" L="+lebar);
console.log("Luas : "+ luas(panjang,lebar));
console.log("Keliling : "+ keliling(panjang,lebar));

panjang = 10;
lebar = 20
console.log("\nExample 2 : P="+panjang+" L="+lebar);
persegiPanjang(panjang, lebar);

// Soal 2
console.log();
console.log("Soal 2");

const newFunction = (firstName, lastName) => {
	const fullName = () => { 
		console.log(firstName + " " + lastName)
	} 
	return {
		firstName, 
		lastName, 
		fullName,
	}
}

newFunction("Ariraja", "Nuralamsyah").fullName();

// Soal 3
console.log();
console.log("Soal 3");

const newObject = {
  firstName: "Ariraja",
  lastName: "Nuralamsyah",
  address: "Kampung Cililin Desa Mandalagiri",
  hobby: "playing game",
}

const {firstName, lastName, address, hobby} = newObject;

console.log(firstName, lastName, address, hobby);

// Soal 4
console.log();
console.log("Soal 4");

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];
//Driver Code
console.log(combined)

// Soal 5
console.log();
console.log("Soal 5");

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet;
var after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`;

console.log(before);
console.log(after);


