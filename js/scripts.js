const string = prompt("Enter a sentence:");


$(document).ready(function(){
  function firstAndLast(string){
    const string1 = string.charAt(0).toUpperCase() + string.slice(1);
    const string2 = string1.substring(0, string1.length -1) + string1.slice(string.length -1).toUpperCase()
    return string2
  }
  
  function letterSwap(string) {
    const firstLetter = string[0];
    const lastLetter = string[string.length -1];
    const rm1st = string.slice(1);
    const rm2nd = rm1st.substring(0, rm1st.length -1);
    const newString = lastLetter + rm2nd + firstLetter;
    return firstAndLast(newString)
  }

  function addToString(string){
    const letterOne = string[0].toUpperCase();
    const endLetter = string[string.length -1].toUpperCase();
    const modifiedString = letterSwap(string);
    const string3 = modifiedString + endLetter + letterOne;
    return string3;
  }

  function reverseString(string){
    const reversedString = addToString(string);
    const splitString = reversedString.split("")
    const reverse = splitString.reverse();
    const joined = reverse.join("")
    return joined;

  }
  alert(reverseString(string));
})