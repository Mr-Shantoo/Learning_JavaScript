let marks=[40,50,60,70,80,90];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
console.log(`average marks: ${sum/marks.length}`);

//array method 
let fooditems=["chips","cola","burger"];
fooditems.push("pizza");
console.log(fooditems);
let deleteditems=fooditems.pop();
console.log(fooditems);
fooditems.unshift("taco")//add to start
console.log(fooditems);
fooditems.shift();//delete from start 
console.log(fooditems);
let colors=["white","blue","gray","black"];
colors.splice(1,2,"pink","lime"); 
console.log(colors);