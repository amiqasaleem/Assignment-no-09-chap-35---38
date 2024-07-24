//Task 01:
/*Write a function that displays current date & time in your browser.*/

function now() {
    var today = new Date();
    document.write(today);
}
now();

//Task 02:
/*Write a function that takes first & last name and then it greets the user using his full name.*/

function fullName(a, b) {
    document.write(a + " " + b);
    return a + b;
}
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
fullName(firstName, lastName);

//Task 03:
/*Write a function that adds two numbers (input by user) and returns the sum of two numbers.*/

function add(num1, num2) {
    document.write(num1 + num2);
    return num1 + num2;
}
var num_01 = Number(prompt("Enter 1st Number"));
var num_02 = Number(prompt("Enter 2nd Number"));

add(num_01, num_02);

//Task 04:
/*Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
show the desired result in your browser.*/

function calculator(x, y, z) {
    var operation;  
    if (z === "+") {
        operation = x + y;
    } 
    else if (z === "-") {
        operation = x - y;
    } 
    else if (z === "*") {
        operation = x * y;
    } 
    else if (z === "/") {
        operation = x / y;
    } 
    else {
        operation = x % y
    }
    document.write(x + z + y + " = " + operation)
    return operation;
}
var num_1 = Number(prompt("Enter 1st number"));
var num_2 = Number(prompt("Enter 2nd number"));
var operator = prompt("Enter Operator");

calculator(num_1, num_2, operator);

//Task 05:
/*Write a function that squares its argument.*/

function square(number){
    document.write(number*number)
    return number * number;
}
square(9);

//Task 06:
/*Write a function that computes factorial of a number.*/

let mul = 1;
function factorial(num) {
    for(var i = num; i > 0; i--) {
        mul *= i;
    }
    document.write(mul);
    return mul;
}
factorial(4);

//Task 07:
/*Write a function that take start and end number as inputs & display counting in your browser.*/

function count(n, m) {
    for(var i = n; i <= m; i++){
        document.write(i + "</br>");
    }
}
count(1, 10);

//Task 08:
/*Write a nested function that computes hypotenuse of a right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2;

Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
}
var base = 2;
var perpendicular = 5;
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write("Hypotenuse:", hypotenuse); 

//Task 09:
/*Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:

i. Arguments as value
ii. Arguments as variables*/

function areaOfRectangle(width, height){
    var area = width * height;
    document.write(area);
}
var width = 8;
var height = 15;
areaOfRectangle(8, 15);
areaOfRectangle(width, height);


//Task 10:
/*Write a JavaScript function that checks whether a passed string is palindrome or not?*/

var word = prompt("Enter a word");
var opposite = '';
function wordCheck() {
    for(var i = word.length-1; i >= 0; i--) {
        opposite += word[i];
    }
    if(word === opposite){
        document.write("It's a palindrome")
    } else {
        document.write("It's not a palindrome")
    }
    return opposite;
}
wordCheck();

//Task 11:
/*Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

var userString = prompt("Enter some words");
var capital = '';
function convertString(){
    for(var i = 0; i < userString.length; i++) {
        if(i == 0) {
           capital += userString[i].toUpperCase();
        } else if(userString[i-1] === " "){
            capital += userString[i].toUpperCase();
        } else{
            capital += userString[i];
        }
    }
    document.write(capital);
    return capital;
}
convertString();

//Task 12:
/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/

function longWord(theWord){
    var words = theWord.split(" ");
    var maxLength = 0;
    var longestWord = '';
    for(var i = 0; i <words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}
document.write(longWord("hello this is some information"));


//Task 13:
/*Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'*/

function countLetter(str, ltr){
    var count = 0;
    for (let val of str){
        if(val === ltr){
            count++;
        }
    }
    document.write(count);
    return count;
}

countLetter("Antidisestablishmentarianism", "i");

//Tak 14:
/*Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN"*/


function calcCircumference(rad) {
    var pi = 3.14;
    var circumferenceOfcircle = 2 * pi * rad;
    document.write("The cicumference is " , circumferenceOfcircle);
    return circumferenceOfcircle;
}
calcCircumference(2);

/*Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".*/

function calcArea(rad2){
    var pi = 3.14;
    var areaOfCircle = pi * (rad2**2); 
    document.write("The Area is " , areaOfCircle);
    return areaOfCircle;
}
calcArea(5);