Var fruits = new Array("apple", "orange", "peach");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); 

//push() method adds an element at the end of an array
fruits.push("pear");
console.log(fruits);

//unshift() method and an element at the beginning of an array
fruits.unshift("plum");

fruits(5) = "banana";

//changing an array element by its index number
fruits(2) = "grape";
console.log(fruits);

//pop() method removes the element at the end of an array
fruits.pop();
console.log(fruits);

var removedElement = fruits.pop();
console.log(fruits);
console.log(removedElement);

console.log("the length of our fruits array is" + fruits.length + " element inside");




