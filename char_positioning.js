//Given a certain string I want to calculate the position
//of each letter for that string

//For each letter in the string, find the position
//What if the letter is repeated? How do I do it?

//Var [result]
//var words to populate function

function countLetters (words){
  var result = {};
  var position = words.split("");

  for (var i = 0; i < position.length; i++)
    if (position[i] in result){
      result[position[i]].push(i);
    }
    else{
      result[position[i]] = [i];
    }
    return result;
}
  console.log(countLetters("Lighthouse in the house"));