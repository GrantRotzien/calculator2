// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
//
// alert(add(number1, number2));
//


var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
	return number1 - number2;
};
var multiply = function(number1, number2) {
	return number1 * number2;
};
var divide = function(number1, number2) {
	return number1 / number2;
};


$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = (add(number1, number2));
		$("#output").text(result);
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = (subtract(number1, number2));
		$("#output").text(result);
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = (multiply(number1, number2));
		$("#output").text(result);
	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = (divide(number1, number2));
		$("#output").text(result);
	});
});




// var subtract = function(number1, number2){
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2){
//   return number1 * number2;
// };
//
// var divide = function(number1, number2){
//   return number1 / number2;
// };
//
//
//
//
// // mass/height=BMI
//
// var bodyMassIndex = function(mass, height){
// 	return mass / height;
// };
// var mass = parseInt(prompt("Enter mass in kilograms: "));
// var height = parseInt(prompt("Enter height in meters: "));
// var totalBodyMassIndex = bodyMassIndex(mass, height);
// alert("Your Body Mass Index is: " + totalBodyMassIndex);
//
// // Convert Celsius to farhenheit
//
// var celsius = parseInt(prompt("Enter degrees celsius:"));
// var celsiusToFahrenheit = function(celsius) {
// 	return celsius * 1.8 + 32;
// };
// var result = celsiusToFahrenheit(celsius);
//
// // Convert farhrenheit to celsius
//
// var fahrenheit = parseInt(prompt("Enter degrees Fahrenheit:"));
// var converter = function(fahrenheit) {
// 	return (fahrenheit - 32) / 1.8;
// };
// var result = converter(fahrenheit);
// alert("Degrees in Celsius are:" + result);
