'use strict';

alert('Ready?');

var user = prompt('What\'s your name?');
console.log('The user\'s name is: ' + user + '.');

alert('Hello, ' + user + '. Let\'s play a guessing game. I\'ll ask some yes or no questions, and you can answer with a Y or an N.');

var answer1 = prompt('Question 1:').toUpperCase();
console.log('The user answered: ' + answer1);

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('');
} else if (answer1 === 'N' || answer1 === 'NO'){
  alert('');
} else {
  alert('');
}

var answer2 = prompt('Question 2:').toUpperCase();
console.log('The user answered: ' + answer2);

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('');
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('');
} else {
  alert('');
}

var answer3 = prompt('Question 3:').toUpperCase();
console.log('The user answered: ' + answer3);

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('');
} else if (answer === 'N' || answer === 'NO') {
  alert('');
} else {
  alert('');
}

var answer4 = prompt('Question 4:').toUpperCase();
console.log('The user answered: ' + answer4);

if (answer4 === 'Y' || answer4 === 'YES') {
  alert('');
} else if (answer === 'N' || answer === 'NO') {
  alert('');
} else {
  alert('');
}

var answer5 = prompt('Question 5:').toUpperCase();
console.log('The user answered: ' + answer5);

if (answer5 === 'Y' || answer5 === 'YES') {
  alert('');
} else if (answer === 'N' || answer === 'NO') {
  alert('');
} else {
  alert('');
}

var answer6 = prompt('Question 6: This one\'s a little different. I need a number instead of a Y or N. You have four chances to guess. How many pets do I have?').toUpperCase();
console.log('The user answered: ' + answer6);

if (answer6 === 0 || answer6 === 'ZERO' || answer6 === 'NONE') {
  alert('That\'s right. I have no pets at all.');
}

else {
  var index = 0;
  for(index = 0; index < 3; index++) {

  }
}
/*var answer8 = prompt('Question 7: Name a state I\'ve lived in other than Washington. You have six chances to guess.').toUpperCase();
console.log('The user answered: ' + answer7);*/
