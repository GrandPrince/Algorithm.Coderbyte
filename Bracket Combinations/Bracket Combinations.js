function BracketCombinations(num) {
  var result = 1;
  for (var i = 1; i <= num; i++)
    result = result * (i + num) / (i + 1);
  return result;
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));