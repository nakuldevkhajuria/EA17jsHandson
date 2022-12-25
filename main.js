// Question 1
function Counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter =  Counter();//here Counter function is pop out from the execution context.
//and counter remembers the inner function of Counter() and properties/variables
counter();
counter();
counter();
console.log(counter())
//we needed to capital the first letter of Counter function
//Counter was not defined -reference error
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Question2:
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();//this immediate invoking function synstax. (function)();
//1 then 0
//1 then 1 if we use var
//let is block scoped if we use var inn place of let.
//then once the value of var variable is changed, then it is defined globally.

//question3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?//3 3 3
    }, 1000);
  }
  //here i =3 will be assigned to i, and loop will end cause "i<3" is false then var will globally
  //assign then number 3 to i. and print 3 at the end.

  //Question4

function outer(length){
    
    return function inner(breath){
        console.log(length*breath);
    }
}
// outer(3)(3);
let ou = outer(3);//x=3 length =3
ou(2);//breath is 2

// Question5
function outer(){
    let counter =0;
    return function inner(){
        // console.log(length*breath);
        counter+=1;
        return counter;
    }
}
// outer(3)(3);
let value = outer();
value();
value();//three time inner function called using value which has inner function in its prototype.
console.log(value())//third time increasing and logging



// Question 6


var a = 12;
(function () {
  alert(a);//12 will be printed on alert.
})();

//Question 7:
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
//12
//value of a is globally assigned. using var

//Question 8
var globalVar = ""xyz"";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" +
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);
//error unexpected identifier which is "inside """
// corrented code

var globalVar = "'xyz'";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "'outerArg ='" + outerArg + "'\n'" +
        "'innerArg ='" + innerArg + "'\n'" +
        "'outerVar ='" + outerVar + "'\n" +
        "'innerVar ='" + innerVar + "'\n'" +
        "'globalVar =" + globalVar );
    
    })(456);
})(123);


