const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // Validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    // Validasi jumlah data dalam dataArray lebih dari 5
    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return;
    }

    // Mencari data yang memenuhi kriteria
    const hasilSeleksi = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir);

    // Jika hasil seleksi kosong
    if (hasilSeleksi.length === 0) {
        console.log("Nilai tidak ditemukan");
        return;
    }

    // Mengurutkan hasil seleksi
    hasilSeleksi.sort((a, b) => a - b);

    // Menampilkan hasil seleksi
    console.log(hasilSeleksi);
}

// Contoh penggunaan
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
// SeleksiNilai(20,5 , [4,8,6,9]);
// SeleksiNilai(15, 3 , [2, 25, 8, 14, 17, 30, 8]);
// SeleksiNilai(5, 17 , [2, 25, 4]);
// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
