//a function without any parameters
function greeting() {
    alert("Hello World");
}
greeting();
    
//function with two params
function displayName(first, last) {
    alert("Hello " + first + " " + last + " ")
}

displayName(8);

var displayName =["first", "last"] {
    alert("Hello + arguments[0]" + " " ;
}

display("Anna", "Gurrola");

function addTwoNumbers(a, b){
    let sum= a + b;
    return (sum);

}

console.log("Two plus Three is " + addTwoNumbers(2, 3));

//a function returning another function
function multiple(x) {
    function fn(y) {
        return x = y;
    }
    return fn;
}

var triple = multiple(3);
    triple(2);
    triple(3);
