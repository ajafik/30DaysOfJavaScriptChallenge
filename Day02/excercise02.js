console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.");

let stringValue = '10';
if(! (typeof stringValue === 10)){
    stringValue  = parseInt(stringValue);
}


if(! parseFloat('9.8') == 10){
    console.log(Math.ceil(parseFloat('9.8')) == 10);
}

if('python'.includes('on') && 'jargon'.includes('on')) return true;

console.log('I hope this course is not full of jargon'.includes('jargon'));

console.log(Math.floor(Math.random()*  100));


console.log(Math.floor(Math.random()*  (max - min)) + min);

console.log(Math.floor(Math.random()*  255) );

let js  = 'JavaScript';
console.log(js[Math.floor(Math.random() * (js.length))]);

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

console.log('You cannot end a sentence with because because because is a conjunction'.substr(30,23));