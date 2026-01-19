const amount=[100,200,30,400]
const total=amount.reduce((acc,price)=>{
    return acc+price;
},3)
console.log(total);
