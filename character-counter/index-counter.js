function Counter(string) {
  //Get the string and cut it into an array
  var arrayOfCharacters = string.split('')
  // create a new object to store the count
  var characters = {};

  var char;
  for(var i = 0; i < arrayOfCharacters.length ; i++){

    char = arrayOfCharacters[i];

    if(!characters[char]){
      characters[char] = [];
    }
    characters[char].push(i);

  }
  return characters ;

}

console.log(Counter("Lighthouse Labs"));

