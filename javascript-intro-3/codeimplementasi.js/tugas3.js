function divideAndSort(number) {
    // Memisahkan bilangan menggunakan angka 0 sebagai pemisah
    let separatedNumbers = number.toString().split('0');
    
    // Mengurutkan setiap bilangan
    let sortedNumbers = separatedNumbers.map(num => parseInt(num.split('').sort().join(''))).join('');
    
    // Mengembalikan hasil
    return sortedNumbers;
}

// Contoh penggunaan
let inputNumber = 5956560159466056;
let outputNumber = divideAndSort(inputNumber);
console.log("Output:", outputNumber);