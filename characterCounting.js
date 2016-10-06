var words = process.argv.slice(2);
var wordStr = words.join('');

//Write a function that can return unique characters and how many instances found
//functions can only return primitive data type: num, boo, null, string

function countLetters(wordStr) {
  var result = {};
  for (var i = 0; i < wordStr.length; i++){
    var letter = wordStr.charAt(i);
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
 }

//formatting output to match assignment example
var letterObj = countLetters(wordStr);
console.log('{');
for (letterKey in letterObj) {
  var letterValue = letterObj[letterKey];
  console.log('  ' + letterKey + ': ' + letterValue + ',');
}
console.log('}');