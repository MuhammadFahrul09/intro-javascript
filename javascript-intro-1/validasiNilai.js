// nilai mapel
let mtk = 100;
let bahasaIndonesia = 70;
let bahasaInggris = 87;
let ipa = 85;

const validasiNilai = (mtk, bahasaIndonesia, bahasaInggris, ipa) => {
    if( typeof mtk !== "number" || typeof bahasaIndonesia !== "number" || typeof bahasaInggris !== "number" || typeof ipa !== "number"){
        console.log("Semua nilai harus berupa angka");
        return;
    }

    //menentukan rata-rata nilai mapel
let avg = (mtk + bahasaIndonesia + bahasaInggris + ipa) /4

//menentukan grade nilai
let grade;
if(avg >= 90 && avg <= 100 ){
    grade = "A";
}else if(avg >= 80 && avg <= 89 ){
    grade = "B";
}else if(avg >= 70 && avg <= 79 ){
    grade = "C";
}else if(avg >= 60 && avg <= 69 ){
    grade = "D";
}else{
    grade = "E";
}

console.log("rata-rata = " + avg);
console.log("Grade = " + grade);

}

validasiNilai(mtk, bahasaIndonesia, bahasaInggris, ipa);



