const getMonth = (callback) => {
    setTimeout(() => {
        let erorr = false;
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "December"]
        if (!erorr){
            callback(null, month)
        }else{
            callback(new Error("Sorry data not found"), [])
        }
    }, 4000);
}

const displayMonth = (month, index)=> {
    console.log(`${index + 1}. ${month}`);
}

const continueProcessing =()=> {
    console.log("All Month displayed.");
}

getMonth((erorr, months)=>{
    if (erorr) {
        console.error(erorr);
        return;
    }

    months.map(displayMonth);

    continueProcessing();
})