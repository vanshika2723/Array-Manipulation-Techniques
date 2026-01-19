let names=['bob',"alice","john","diya"]
let array=names.find(name=>name=="barbie")
console.log(array);


let marks=[{
    first_name:"ankit",
    age:26

},
{
    first_name:"yashi",
    age:23
},{
    first_name:"jiya",
    age:56
}
]
let last_failed_student=marks.findLast(mark=>mark.age>35)
console.log(last_failed_student)