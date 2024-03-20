const names = ["Abigail", "Alexandra", "Alison",
               "Amanda", "Angela", "Bella",
               "Carol", "Caroline", "Carolyn",
               "Deirdre", "Diana", "Elizabeth",
               "Ella", "Faith", "Olivia", "Penelope"];

const searchName = (query, limit, callback) => {
    const results = names.filter(name => name.toLowerCase().includes(query.toLowerCase())).slice(0, limit);

    callback(results);
}

const printResults = (results) => {
    console.log(results);
}

searchName("an", 4, printResults);