const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const dataDay = ['senin', 'selasa','rabu', 'kamis', 'jumat'] 
           let cek = dataDay.find((item)=>{
            return item === day
           })
           if(cek){
            resolve(`hari ${cek} adalah hari kerja`);
           }else{
            reject(new Error('Hari ini bukan hari kerja'))
           }
        }, 3000);
    })
}

//Contoh penggunaan then catch 
cekHariKerja('jumat')
.then((result)=>{ // 'Then' digunakan untuk menangkap hasil dari promise yang telah di-resolve
    console.log(result); // Menampilkan Hasil jika hari yang di cek adalah hari kerja
})
.catch((err)=>{ // 'catch' digunanakan untuk menangkap erorr dari promise yang telah di-reject.
    console.log(err); // Menampilkan erorr messege jika terjadi reject pada function
});

// Contoh penggunaan dengan try catch
async function cekHariKerjaAsync(day) {
    try { // "try" digunakan untuk mencoba menjalankan potongan kode yang mungkin menyebabkan error.
        const result = await cekHariKerja(day) 
        console.log(result); // Menampilkan Hasil jika hari yang di cek adalah hari kerja
    } catch (err) { // catch digunakan untuk menangkap error yang terjadi di dalam blok try.
        console.error(err);  // Menampilkan erorr messege jika terjadi reject pada function
    }
}

cekHariKerjaAsync('selasa');

