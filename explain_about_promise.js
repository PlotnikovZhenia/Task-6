const promise1=new Promise((resolve)=>{
    resolve()
})
.then(() => console.log(1))
.then(() => console.log(2))
.then(() => console.log(3));

const promise2=new Promise((resolve)=>{
    resolve()
})
.then(() => console.log(4))
.then(() => console.log(5))
.then(() => console.log(6));
promise1;
promise2;