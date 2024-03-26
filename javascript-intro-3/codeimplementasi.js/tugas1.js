// function isPalindrome(text) {
//     // Menghapus spasi dan karakter non-alfanumerik serta mengubah huruf menjadi huruf kecil
//     const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Memeriksa apakah teks yang dibalik sama dengan teks asli
//     for (let i = 0; i < cleanText.length / 2; i++) {
//         if (cleanText[i] !== cleanText[cleanText.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// // Contoh penggunaan
// const text = "A man, a plan, a canal, Panama";
// if (isPalindrome(text)) {
//     console.log("Teks tersebut adalah palindrom.");
// } else {
//     console.log("Teks tersebut bukan palindrom.");
// }

// function checkPalindrom(text) {
//     const reverseText = text.split('').reverse().join('');

//     if (text === reverseText) {
//         return('Teks ini adalah palindrom')
//     }
//     return('teks ini bukan palindrom')
// }

// console.log(checkPalindrom('kataku'));

const checkPalindrom = (text) =>{
   return text.split('').reverse().join('') === text ? 'Teks ini adalah palindrom' : 'teks ini bukan palindrom';
}

console.log(checkPalindrom('kataku'));

const reverseWords = (paragraph) =>{
    const word = paragraph.split(' ')
    const reverseParagraph = word.reverse().join(' ');

    return reverseParagraph;
}

const printParagraph = "Saya Belajar Javascript"

console.log(reverseWords(printParagraph));
