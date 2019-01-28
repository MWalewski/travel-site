var $ = require("jquery");
var Person = require("./modules/Person");

alert("test 123 abcd");

var john = new Person("John Doe", "blue");
john.greet();

var Jane = new Person("Jane Smith", "green");
Jane.greet();

$("h1").remove();
