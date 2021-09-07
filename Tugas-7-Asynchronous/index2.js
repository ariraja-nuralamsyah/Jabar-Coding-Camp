//soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
readBooksPromise(10000, books[0])
    .then((sisaWaktu) => {
        readBooksPromise(sisaWaktu, books[1])
        .then((sisaWaktu) => {
            readBooksPromise(sisaWaktu, books[2])
            .then((sisaWaktu) => {
                readBooksPromise(sisaWaktu, books[3])
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))