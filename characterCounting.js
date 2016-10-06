var words = process.argv.slice(2);
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

//formatting output to match assignment example
var letterObj = countLetters(wordStr);
console.log('{');
for(letterKey in letterObj) {
  var letterValue = letterObj[letterKey];
  console.log('  ' + letterKey + ': ' + letterValue + ',');
}
console.log('}');


