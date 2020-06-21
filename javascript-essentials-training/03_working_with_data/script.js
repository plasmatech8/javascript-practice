
// var pens = Array("red", "blue", "green", "orange")
var pens = ["red", "blue", "green", "orange"];
console.log(pens);

pens.reverse(); // reverse order
pens.shift(); // pop first
pens.pop(); // dequeue last
pens.push("purple"); // adds element
console.log("Revese,shift,pop,push:", pens);

pens = ["red", "blue", "green", "orange"];
console.log("Spliced:", pens.splice(2,3)); // removes slice
console.log("Remainder:", pens);

pens = ["red", "blue", "green", "orange"];
console.log("Sliced:", pens.slice(1,3)); // obtain slice

pens = ["red", "blue", "green", "orange"];
console.log("indexOf:", pens.indexOf("green"))
console.log("join:", pens.join())
