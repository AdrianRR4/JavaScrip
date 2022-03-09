
const miArray=[1,2,3,4,5];

miArray.forEach((element, index, array)=>{
    console.log(element* index)
});

let lenguajes =['java', 'c#','php', 'phyton'];
let arr=[];
lenguajes.forEach((element,index)=>{
    console.log(index+1,element );
    arr.push(element);
    console.log(arr)

});
