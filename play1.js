const fetchData =callback  =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done');
        },1500);
    });
    return promise;
    
};
//Asyncronous code 
//Here, it will wait for 2sec before execution
setTimeout(()=>{
    console.log('Timer is Done');
    fetchData(text=>{
        console.log(text);
    })
},2000);  
