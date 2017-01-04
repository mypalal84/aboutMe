'use strict';

var user = prompt('Hey, there. My name is Disa. It rhymes with Lisa. What\'s your name?');
console.log('The user\'s name is: ' + user + '.');

alert('Well, hello, ' + user + '. I\'m going to ask you some questions!');

var answer = prompt(user + ', they\'ll all be yes or no questions, so just answer with a Y or an N. You got that, right?').toUpperCase();
console.log('The user answered: ' + answer);

if (answer === 'Y') {
  alert('Marvelous, ' + user + '! Let\s go!');
} else {
  alert('You know that entering N to tell me you didn\'t understand how to enter N showed me you understood how to enter N, right? Uh huh. Moving on, now.');
}

var answer1 = prompt('Okay. Next question. ' + user + ', I\'ve done some surprising things in my life. Let\'s start small. Do you think I\'ve ever fired a gun?').toUpperCase();
console.log('The user answered: ' + answer1);

if (answer1 === 'Y') {
  alert('That\'s right! I fired a gun for the first time before I was two years old.');
} else {
  alert('Ah, no, ' + user + '. I\'m not into guns, now, but I got my own .22 rifle when I was eight, and passed my hunter\'s safety exam when I was eleven. I was the smallest kid in the class, and the teacher had to waive the shotgun test because I couldn\'t lift the shotgun.');
}

var answer2 = prompt('Question number two. Or is it three? Do you think I\'ve ever been on a motorcycle?').toUpperCase();
console.log('The user answered: ' + answer2);

if (answer2 === 'Y') {
  alert('I surely have! I had a Honda 50 Minibike when I was a kid. Wish I\'d kept that thing. People collect them, now.');
} else {
  alert('Afraid you missed this one, ' + user + '. Not only have I been on a motorcycle, but the fine surgeons at Harborview put my pelvis back together with a six inch screw after I hit the pavement at sixty miles per hour. I am titanium!');
}

var answer3 = prompt('I sing--mostly for fun, but sometimes I get paid. I often tell a story about singing a duet on live television with Governor Gary Locke. Now, I know that performers have been known to exaggerate from time to time. Do you think I\'m making it up?').toUpperCase();
console.log('The user answered: ' + answer3);

if (answer3 === 'Y') {
  alert('Who me? It\'s the absolute truth. I was singing a gospel duet at a public concert celebrating Martin Luther King Junior Day, and the Governor was in attendance. The guy I was singing with knew the Governor well. Without any particular warning, he stuck the mic in Governor Locke\'s face. The Governor sang.');
} else {
  alert('You\'re right, ' + user + '! Governor Locke has a surprisingly nice tenor.');
}

var answer4 = prompt('You get on a plane and go somewhere. The plane lands. You disembark and trudge wearily through the airport. People do it a million times a day. Do you think I\'ve done it?').toUpperCase();
console.log('The user answered: ' + answer4);

if (answer4 === 'Y') {
  alert('Nope! I\'ve gotten on a plane before, but the plane I was on landed without me. I\'d already jumped out of it.');
} else {
  alert('Well, you\'re half right,' + user + '. I\'ve only been in a plane once. I got in. We took off. Then somewhere a couple miles in the air, I jumped out of it and it landed without me.');
}

var answer5 = prompt('Do you think I always wanted to learn to code?').toUpperCase();
console.log('The user answered: ' + answer5);

if (answer5 === 'Y') {
  alert('You\'re right. I took a computer class in 1981 and I loved it, but I didn\'t have a computer at home. Besides, girls weren\'t supposed to like computers...right? That\'s what the boys in the computer lab told me. That kept me away for some time, but here I am. Funny how these things happen, isn\'t it, ' + user + '?');
} else {
  alert('You\'re right. I took a computer class in 1981 and I loved it, but I didn\'t have a computer at home. Besides, girls weren\'t supposed to like computers...right? That\'s what the boys in the computer lab told me. That kept me away for some time, but here I am. Funny how these things happen, isn\'t it, ' + user + '?');
}
