const printSegitiga = (num) => {
    let result = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        result += '\n';
    }
    console.log(result);
};

printSegitiga(7);