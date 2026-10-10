// Reverse the Given string
function reversestring(str){
  let newString= '';
  for(let i = str.length -1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}
console.log(reversestring('hello'));