let conditionalPromise = new Promise((resolve,reject)=>{

    let data= Math.random()>= 0.7;
    console.log("Random condition:", data);

    if (data) {
        resolve("Resolved successfully")
    } else {
        reject("Rejected")
    }

})

conditionalPromise
.then(message=>{
    console.log(message);  
})

.catch(error=>{
    console.log(error);
    
})