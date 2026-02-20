let sum=0;
for(let i=0;i<=10;i++){
    sum+=i;
}
console.log(sum);
let i=0;
while(i<5){
    console.log(i);
    i++;
}
//for of loop uses  in strings and arrays.. 
let name="maine uddin shanto";
for(let val of name){
    console.log(val);
}
//for in loop uses in objects,arrays.. 
let student={
    name:"shanto",
    age:20,
    cgpa:3.75,
};
for(let key in student){
    console.log("key:",key,"& value:",student[key]);
}