function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
  
   
  console.log("Is Palindrome? : " + isPalindrome(word));
  console.log("Is Palindrome?: " + isPalindrome(word));
  
}

/* 
  Add your pseudocode here
*/
// split the String
//  reverse the array
//  join the string
/*
  Add written explanation of your solution here
 */
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
