let a=5;
let b=2;
console.log("a",a,"b",b);
console.log("a+b",a+b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);
//exponentiation
console.log(a**b);
//unary operator
console.log("a++",a++);//first print then increment the value of a 
console.log("++a",++a);//first increment the value thn print 

let x=5;
let y="5";
console.log(x==y); //return true.. cause javascript converts string number to number thn compares..
// strict version of equal and not equal
console.log("comparison using type and equal:",x===y);
console.log("comparison using type and equal:",x!==y);
//if ,else if, else 
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}else if(mode==="blue"){
    color="blue";
}else if(mode==="red"){
    color="red";
}else{
    color="white";
}
console.log(color);
//ternary operator
let p=100;
let q=90;
p>q?console.log("p is greater than q"):console.log("q is greather than p");