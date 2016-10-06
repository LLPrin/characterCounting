
// var userInput = { input: process.argv[2] };
// var word = userInput["input"];

// var wordObj = { char: word.split('') };
// var letter = wordObj["char"];
    // var letterArray = []
    // for(var i = 0; i < word.length; i++) {
    //     letterArray.push(word.slice(i, i + 1));
    // }
    // return letterArray;

var words = process.argv.slice(2);
// join always returns a string
var wordStr = words.join('');

//Write a function that can return unique characters and how many instances found
//functions can only return primitive data type: num, boo, null, string

function countLetters(wordStr) {
  var obj = {};
  for(var i = 0; i < wordStr.length; i++){
    var letter = wordStr.charAt(i);
    if(obj[letter]) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
 }



 console.log(countLetters(wordStr));

