/*
The MIT License (MIT)

Copyright (c) 2015 ericmorgan1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Declare global variables.
var oc = swisscalc.lib.operatorCache;
var calc = new swisscalc.calc.calculator();

// Button functions.
function one () {
	calc.addDigit("1");
	$('#output').text(calc.getMainDisplay());
}

function two () {
	calc.addDigit("2");
	$('#output').text(calc.getMainDisplay());
}

function three () {
	calc.addDigit("3");
	$('#output').text(calc.getMainDisplay());
}

function four () {
	calc.addDigit("4");
	$('#output').text(calc.getMainDisplay());
}

function five () {
	calc.addDigit("5");
	$('#output').text(calc.getMainDisplay());
}

function six () {
	calc.addDigit("6");
	$('#output').text(calc.getMainDisplay());
}

function seven () {
	calc.addDigit("7");
	$('#output').text(calc.getMainDisplay());
}

function eight () {
	calc.addDigit("8");
	$('#output').text(calc.getMainDisplay());
}

function nine () {
	calc.addDigit("9");
	$('#output').text(calc.getMainDisplay());
}

function zero () {
	calc.addDigit("0");
	$('#output').text(calc.getMainDisplay());
}

function clear () {
	calc.clear();
	$('#output').text(calc.getMainDisplay());
}

function clearEntry () {
	calc.clearEntry();
	$('#output').text(calc.getMainDisplay());
}

function backspace () {
	calc.backspace();
	$('#output').text(calc.getMainDisplay());
}

function divide () {
	calc.addBinaryOperator(oc.DivisionOperator);
	$('#output').text(calc.getMainDisplay());
}

function multiply () {
	calc.addBinaryOperator(oc.MultiplicationOperator);
	$('#output').text(calc.getMainDisplay());
}

function subtract () {
	calc.addBinaryOperator(oc.SubtractionOperator);
	$('#output').text(calc.getMainDisplay());
}

function add () {
	calc.addBinaryOperator(oc.AdditionOperator);
	$('#output').text(calc.getMainDisplay());
}

function negate () {
	calc.negate();
	$('#output').text(calc.getMainDisplay());
}

function decimal () {
	calc.addDigit(".");
	$('#output').text(calc.getMainDisplay());
}

function equals () {
	calc.equalsPressed();
	$('#output').text(calc.getMainDisplay());
}


$(document).ready(function() {
	// Set initial state of calculator.
	$("#output").text(calc.getMainDisplay());

	$("#one").click(one);
	$("#two").click(two);
	$("#three").click(three);
	$("#four").click(four);
	$("#five").click(five);
	$("#six").click(six);
	$("#seven").click(seven);
	$("#eight").click(eight);
	$("#nine").click(nine);
	$("#zero").click(zero);
	$("#clear").click(clear);
	$("#clearEntry").click(clearEntry);
	$("#backspace").click(backspace);
	$("#divide").click(divide);
	$("#multiply").click(multiply);
	$("#subtract").click(subtract);
	$("#add").click(add);
	$("#negate").click(negate);
	$("#decimal").click(decimal);
	$("#equals").click(equals);
}); // Document Ready End
