function countLetters(str){
  newStr = str.split(' ').join('');
  for(var i = 0; i < newStr.length; i++){
    var letter = newStr[i];
    if(output.hasOwnProperty(letter)){
      output[letter] = output[letter] + ', ' + i;
      } else {
        output[letter] = i;
      }
    }
  console.log(output);
  };

  var output = {};

countLetters("lighthouse in the house");
