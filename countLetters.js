//Given a certain string I want to calculate the number
//of each letter for that string.

//For each letter in the string, how many times do they show
//in the string?
//To remove spaces I would split and join
//There must be a condition which says is that leter has been seen
//repeted add 1.

//How can I count the number of letters?

//Var [result]
//var words to populate function

function countLetters (words){
  var result = {};
  var noSpace = words.split(" ").join("").toLowerCase();

  for (var i = 0; i < noSpace.length; i++){
    if (noSpace[i] in result){
      result[noSpace[i]] += 1;
    }
    else{
      result[noSpace[i]] = 1;
    }
  }
     return result;
}
  console.log(countLetters("Lighthouse in the house"));

