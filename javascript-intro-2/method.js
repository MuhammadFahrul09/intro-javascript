//1. push method adalah menambah satu atau lebih elemen dan mengembalikan panjang array baru
const hobbies = ['renang', 'lari', 'membaca'];
const newHobbies = hobbies.push('coding', 'bulutangkis');

// console.log(hobbies);
// console.log(newHobbies);

//2. concat adalah method yang menggabungkan satu atau lebih array dan mengembalikan ke array yang baru
const number1 = [1, 2, 3];
const number2 = [4, 5, 6];
const combinedNumber = number1.concat(number2);

// console.log(combinedNumber);

//3. slice mengambil atau megiris sebuah array menjadi array baru
const foods = ['roti', 'mie', 'nasi goreng', 'bubur ayam', 'bakso'];
const newFoods = foods.slice(0, 1);

console.log(newFoods);

//4.splice method array yang berfungsi untuk mengubah elemen array termasuk menghapus, mengganti, atau menambah elemen baru.

const fruits = ['anggur','lemon', 'jeruk', 'markisa'];
fruits.splice(1, 3, 'mangga', 'durian');

// console.log(fruits);

//5. include metode ini menentukan atau mengecek apakah termasuk pada elemen-elemenya
const hewan = ['burung', 'bebek', 'ayam'];
const isIncluded = hewan.includes('burung');

// console.log(isIncluded);

//6. indexOf Metode ini mengembalikan indeks pertama di mana elemen yang diberikan dapat ditemukan dalam array, atau -1 jika tidak ditemukan.
const brand = ['nike', 'allstar', 'jordan'];
const index = brand.indexOf('almi');

// console.log(index);

// 7.find Metode ini mengembalikan nilai elemen pertama dalam array yang memenuhi kondisi yang diberikan.
const numbers = [1, 2, 3, 4, 5, 6];
const found = numbers.find(num => num > 6);

// console.log(found);

// 8.Map Metode ini membuat array baru dengan hasil pemanggilan fungsi pada setiap elemen dalam array yang dipanggil
const angka = [1, 2, 3, 4, 5, 6];
const kaliDua = angka.map(num => num *2);

// console.log(kaliDua);

// 9. reduce Metode ini menjalankan fungsi pengakumulasi pada setiap elemen dari kiri ke kanan untuk menghasilkan satu nilai tunggal.
const arNumbers = [1, 2, 3, 4, 5];
const sum = arNumbers.reduce((a, b)=> a + b);

// console.log(sum);

// 10. every
const numbrs = [2, 4, 6, 8];
const allEvenNumbers = numbrs.every(num => num % 2 === 0);

// console.log(allEvenNumbers);
