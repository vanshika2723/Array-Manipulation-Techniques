let a=[1,2,3,4]
console.log(...a,7);




///


const addition=(...number)=>{
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum=sum+=number[i]
    }

    console.log(sum)
}
addition(3,4,5,6)
