let challenge = '30 Days Of JavaScript';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0, 1));
console.log(challenge.substr(3));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.split(' '));


let techCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techCompanies.split(', '));

console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));


let becauseStatement = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseStatement.indexOf('because'));
console.log(becauseStatement.lastIndexOf('because'));
console.log(becauseStatement.search('because'));



console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));

let aMatch = /a/g;
console.log(challenge.match(aMatch));

console.log('30 Days of'.concat('JavaScript'));
console.log(challenge.repeat(2));