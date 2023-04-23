//Takes a string and returns an object with the index positions of each letter
const letterPositions = function(sentence) {
  const results = {};
  // store result
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]; 
    //get current letter of iteration
    if (letter !== " ") { 
      //check if current letter is not space
      if (results[letter]) { 
        //check if current letter is already in results
        results[letter].push(i); 
        //if yes, push index position to results
      } else {
        results[letter] = [i]; 
        //if no, create new array with index position
      }
    }
  }
  return results;
};

module.exports = letterPositions;