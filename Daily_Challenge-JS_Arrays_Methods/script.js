
// Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(fruits);
//1.1
fruits.splice(0,1,);
console.log(fruits);
//1.2
fruits.sort();
console.log(fruits);
//1.3
fruits.push("kiwi");
console.log(fruits);
//1.4
fruits.shift();
console.log(fruits);
//1.5
fruits.reverse();
console.log(fruits);

//Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits);
console.log(moreFruits[1][1]);