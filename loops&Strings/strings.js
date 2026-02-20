let str="name";
console.log(str.length);
//template literals
let specialString=`this is a template literals`;
console.log(specialString);
let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price}tk`;
console.log(output);
//string interpolation
let sum=`sum ${10+2}`;
console.log(sum);

//string methods
let str1="hello";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
let str2=" he ll o";
console.log(str2.trim());
console.log(str1.slice(1));
console.log(str1.concat(str2));
console.log(str1.replace("l", "p"));
console.log(str1.replaceAll("l","p"));