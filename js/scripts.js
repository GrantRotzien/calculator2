var age = prompt("What is your age?");
var name = prompt("What is your name?");
var food = prompt("What is your favorite food?");

var sentence = function(age, name, food) {
	return "I am " + age + ", my name is " + name + ", and my favorite food is " + food + ".";
  };

alert(sentence(age, name, food));
