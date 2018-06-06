function Counter(String) {
  //Get the string and cut it into an array
  var nonunique = String.split('')
  // create a new object to store the count
  var counts = {}

  var char , len , count ;
  for(var i = 0; i < nonunique.length ; i++){
    //Start by getting the char at the original index
    char = nonunique[i];

    //
    if(counts[char]){
      counts[char]++
    } else {
      counts[char] = 1
    }




  }
  return counts ;

}

console.log(Counter("Lighthouse Labs"))