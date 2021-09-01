function sum(a, b) {
    console.log(this===window);
    this.myNumber = 20; //add "myNumber" property to the (globel(window) object.
    return a + b;
}

console.log(sum(15, 16));
console.log(window.myNumber);

function multipy(a,b) {

}'use strict' //enables strict mode for better securty and error checking.
console.log(this===undefined) //true
console.log(this===window)//false due to strict mode
return a + b;

console.log(multipy(2, 5));
functin execute(){
    'use strict'; 

    function concat(strt1, strt2) {
        //the strict mode is enabled here as well
        console.log(this===undefined)//true
        return str1 + str2
    }

    console.log(concat("Hello ", "World"));
    console.log(Windo.myNumber);

    
    function nonstrictSum(a,b) {
        //non-strict mode
        console.log(this===window) //false
        return a + b;
        }

        function strictSum(a+b) {
            'use strict';
            //strict mode is now enables
            console.log(this===undefined) //true
        }

        console.log(concat("Hello" "World"));
    }

    exxecuted();