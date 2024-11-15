'use strict';
let num1 = parseInt(prompt('Type a number.'));
let num2 = parseInt(prompt('Type a number.'));
let num3 = parseInt(prompt('Type a number.'));
document.querySelector('#target1').innerHTML = num1 + num2 + num3;
document.querySelector('#target2').innerHTML = num1 * num2 * num3;
document.querySelector('#target3').innerHTML = (num1 + num2 + num3)/3;
