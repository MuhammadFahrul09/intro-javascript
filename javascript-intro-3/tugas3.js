const simulasiDelivery = (order)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const statusDelivery = Math.random() < 0.8 ? "Berhasil" : "Gagal";

            if (statusDelivery === "Berhasil") {
                resolve(`Pesanan ${order} telah berhasil dikirim `)
            } else {
                reject(`Gagal mengirim pesanan ${order}.`);
            }
            // const deliveryStatus =() =>{
            //     const status = status.math.random() < 0.8;
            //     if (status === true){
            //       resolve(`Pesanan ${order} telah berhasil dikirim `); 
            //     } else {
            //         reject(`Gagal mengirim pesanan ${order}.`);
            //     }
            // }
        }, 3000);
    })
}

const orderNumber = '41234567';

simulasiDelivery(orderNumber)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });


// program nomor 2
// function askUserName() {
//     return new Promise((resolve, reject) => {
//       const userName = prompt("Masukkan nama Anda:");
//       if (userName) {
//         resolve(userName);
//       } else {
//         reject("Nama tidak boleh kosong!");
//       }
//     });
//   }
  
//   askUserName()
//     .then((userName) => {
//       console.log(`Selamat datang, ${userName}!`);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

const checkWeather = (location) =>{
    return new Promise((resolve, reject) => {
        const weatherStatus = Math.random() < 0.5 ? "Cuaca Cerah" : "Cuaca Buruk";

        if (weatherStatus === "Cuaca Cerah") {
            resolve(`Cuaca di ${location} saat ini sedang cerah`);
        } else {
            reject(`Cuaca di ${location} saat ini sedang cerah`);
        }
    });
}

const userLocation = "Makassar";

checkWeather(userLocation)
 .then((message)=>{
    console.log(message);
 })
 .catch((erorr)=>{
    console.error(erorr);
 });