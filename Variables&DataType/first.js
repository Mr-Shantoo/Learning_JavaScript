console.log("hello");
name="maine uddin shanto";
age=23;
x=null;
y=undefined;
isFolllow=true;
console.log(name);
console.log(age);
console.log(x);
console.log(y);
console.log(isFolllow);
//var,let,const
var price=60;
var price=80;
var price=69;
//we can redeclare using var and update the values.. 
//final updated value will be stored in the variable..

let Altname="Bruce Wayne";
Altname="Bruce Wayne aka Batman";
//using let we can not redeclear but we can update 
console.log(Altname);
const language="javascript"; //can'r redeclare and update 
//const needs to be declared and initialized at the same time
console.log(language);
//var and const block scope variable 
const Student={
    fullName:"Md. Mine Uddin",
    age:23,
    dept:"CSE",
    cgpa:3.75,
};
console.log(Student["cgpa"]);
Student["age"]=Student["age"]+1;
console.log(Student["age"]);
//object student is const but still we can change values of if because we are changing the value of keys
