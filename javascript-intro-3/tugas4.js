fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if (!response.ok) {
        throw new Error('Gagal mengirim data')
    }
    return response.json();
})
.then(users =>{
    const names = users.map(user => user.name);
    console.log('list nama-nama pengguna: ');
    names.forEach(name => console.log(name))
})
.catch(error => {
    console.error('Terjadi kesalahan:', error);
  });
