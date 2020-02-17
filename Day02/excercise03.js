let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveArray  = loveString.match(/love/gi);
let loveCount  =  loveString.length;

let becauseStatement  = 'You cannot end a sentence with because because because is a conjunction';
let bcosArray = becauseStatement.match(/because/gi);
let bcosCount  = bcosArray.length;



const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

console.log(sentence.replace(/[&\/\\#,+()@$~%.'":*?<>{}]/g, ''));
let filteredSentence  = sentence.replace(/[&\/\\#,+()@$~%.'":*?<>{}]/g, '')

console.log(filteredSentence);

let filterArray = filteredSentence.split(' ');

let obj = {};

// To be Revisited

// for(var c =0; c< filterArray.length; c++){
//     obj[filterArray[c]] = 
// }