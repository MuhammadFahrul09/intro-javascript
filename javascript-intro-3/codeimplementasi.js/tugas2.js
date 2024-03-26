function PijarFood(harga, voucher, jarak, pajak) {
    if (typeof harga !== "number" || typeof jarak !== "number") {
        return 'inputan harus berupa number!';
    }
    // Hitung biaya pengiriman
    let biayaAntar = 5000; // biaya pengiriman untuk 2km pertama
    if (jarak > 2) {
        biayaAntar += (jarak - 2) * 3; // tambahan biaya per km selanjutnya
    }
    
    // Hitung pajak
    let pajakMakanan = pajak ? 0.05 * harga : 0;
    
    // Hitung total biaya makanan sebelum diskon
    let totalBiayaMakanan = harga + biayaAntar + pajakMakanan;
    
    // Hitung potongan harga dari promo
    let potongan = 0;
    if (voucher === 'PIJARFOOD5') {
        if (totalBiayaMakanan >= 50000) {
            potongan = Math.min(0.5 * totalBiayaMakanan, 50000); // maksimal potongan 50rb
        }
    } else if (voucher === 'DITRAKTIRPIJAR') {
        if (totalBiayaMakanan >= 25000) {
            potongan = Math.min(0.6 * totalBiayaMakanan, 30000); // maksimal potongan 30rb
        }
    }
    
    // Hitung subtotal
    let subtotal = totalBiayaMakanan - potongan;
    
    // Tampilkan hasil
    console.log("Harga :", harga);
    console.log("Potongan :", potongan);
    console.log("Biaya Antar :", biayaAntar);
    console.log("Pajak :", pajakMakanan);
    console.log("SubTotal :", subtotal);
}

// Contoh penggunaan:
PijarFood(75000, 'PIJARFOOD5', 5, true);
