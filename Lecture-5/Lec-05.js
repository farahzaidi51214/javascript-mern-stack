console.log("My first js with the external file");
//Js is loosely typed language
var x = 5;
var y = 9;
console.log(x*y);


//how to declare functions
function sum(a,b)
{
    return a + b;
    
}
console.log(sum(x,y));
//you can assign varibables to functions
var mysum = sum;
console.log(mysum);
