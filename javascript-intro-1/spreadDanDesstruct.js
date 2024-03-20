let data = {
    id: 1,
    name:"Leanne Graham",
    username:"Bret",
    email:"Sincare@april.biz",
    address:
    {
        street:"Kulas Light",
        suite:"Apt. 556",
        city:"Gwenborough",
        zipcode:"92998-3874",
    },
    phone:"1-770-736-8031x56442",
    website:"hildegard.org",
}

//tambah newData menggunakan spread Operator
const newData = {...data, 
    email: "fahrullah09@gmail.com", 
    name: "Muh fahrullah", 
    hobby: "futsal" 
};

//getData menggunakan destructuring
const {street, city} = data.address;


console.log(newData);
console.log(" ");
console.log(street);
console.log(city);
