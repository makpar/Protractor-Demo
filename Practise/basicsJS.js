
console.log("Hello World");

//Data types
var a = 2;
var b = "hello";

//Conditionals
var c = "one";
if (c == "one"){
    console.log("statement is true");
} else {
    console.log("statement is false");
}

if (c == "one"){
    console.log("statement is true");
} else if (c == "two") {
    console.log("statement is two");
} else {
    console.log("nothing is matched");
}

//Loops
for (var i=1; i<100; i++){
    console.log("i");
}

var j = 1;
while (j<5){
    console.log(j);
    j++;
}

//executes once always
var k = 10;
do {
    console.log(k);
    k++;
} while (k<20)

//Functions
function add(a,b){
   return a+b; 
}

console.log(add(2,3));

//Arrays - collection of objects
var a = 4;
var b = ["hello","world","4","goodbye"]; //hardcoded and static

console.log(b.length + " is the size of the array");
for(var i=0; i<b.length; i++){
    console.log(b[i]);
}

var c = new Array(); //for dynamic cases
c[0] = "goodbye";
c[1] = "4";
c[2] =  "world";

//print array in reverse
for (var j = c.length-1; j>=0;j--){
    console.log(c[j]);
}

//String functions
var name = "Rahul"; //String literal declaration, static
name.charAt(3); //u
name.concat("Shetty"); //RaulShetty
name.indexOf("u"); //3
name.slice(1,3); //ah
name.toUpperCase(); //RAHUL

var name = "Rahul ";
name.trim(); //Rahul

var name2 = new String("Rahul"); //String object declaration
