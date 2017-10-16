var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));



var add = function(number1, number2) {
	return number1 + number2;
};
var sum = add(number1, number2);



var subtract = function(number1, number2){
  return number1 - number2;
};
var difference = substract(number1, number2);



var multiply = function(number1, number2){
  return number1 * number2;
};
var product = multiply(number1, number2);


var divide = function(number1, number2){
  return number1 / number2;
};
var quotient = divide(number1, number2);



alert(#);

// mass/height=BMI

var bodyMassIndex = function(mass, height){
	return mass / height;
};
var mass = parseInt(prompt("Enter mass in kilograms: "));
var height = parseInt(prompt("Enter height in meters: "));
var totalBodyMassIndex = bodyMassIndex(mass, height);
alert("Your Body Mass Index is: " + totalBodyMassIndex);

// Convert Celsius to farhenheit

var celsius = parseInt(prompt("Enter degrees celsius:"));
var celsiusToFahrenheit = function(celsius) {
	return celsius * 1.8 + 32;
};
var result = celsiusToFahrenheit(celsius);

// Convert farhrenheit to celsius

var fahrenheit = parseInt(prompt("Enter degrees Fahrenheit:"));
var converter = function(fahrenheit) {
	return (fahrenheit - 32) / 1.8;
};
var result = converter(fahrenheit);
alert("Degrees in Celsius are:" + result);
