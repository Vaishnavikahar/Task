var arr=[
    {
        id:1,
        description:'compted project',
        priority:'high'
    },
    {
        id:2,
        description:'Incompted project',
        priority:'low'
    }
]

// add

var arr2=arr.splice(0,0,[{
    id:3,
    description:'compted task',
    priority:'high'
}])
// console.log(arr2);
console.log(arr);



// remove

var abc=arr.pop([1]);
console.log(arr);

//view task

console.log(arr.slice(2,4));

//filter

var abc=arr.filter(elem => (elem.priority=="high"))
console.log(abc);

// display

console.log(arr);

//update

arr.splice(2,1,{
    id:5,
    description:'compted task',
    priority:'high'
})

console.log(arr);