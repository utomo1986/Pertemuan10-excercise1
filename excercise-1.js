/*
1. Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

*/

let str = "Huruf";

function kapital(item){
    let pattern = /[A-Z]/;

    if(pattern.test(item[0])){
        console.log("Huruf pertama adalah huruf besar");
    }
    else{
        console.log("Huruf pertama adalah huruf kecil");
    }
}

kapital(str);
kapital("ini kecil");