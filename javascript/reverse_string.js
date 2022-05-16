function reverseString(str) {
  let reversed = [];
  let arrayed = str.split("")
  for (let i = 0; i < arrayed.length; i ++) {
    reversed.unshift(arrayed[i])
  }
  const newString = reversed.join("")
  return(newString)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: '!elloH'");
  console.log("=>", reverseString("Hello!"));

  console.log("Expecting: '?eman ruoy si tahW'")
  console.log("=>", reverseString("What is your name?"))

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// PSEUDOCODE:
// Step 1: create empty array
// Step 2: split original string into array of individual characters
// Step 3: use unshift to add each item from array into new array
// Step 4: join new array back into string
// Step 5: return the new array