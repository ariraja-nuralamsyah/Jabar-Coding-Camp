// soal 1
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
const read = (time, books, indeks) => {
    if(indeks < books.length){
        readBooks(time, books[indeks], (sisaWaktu) => {
            indeks += 1;
            read(sisaWaktu, books, indeks);
        })
    }
}

read(10000, books, 0);