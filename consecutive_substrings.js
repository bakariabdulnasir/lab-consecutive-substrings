function consecutiveSubstrings(string) {
  const result = [];
  
  // If string is empty, return empty array
  if (string.length === 0) {
    return result;
  }
  
  // Loop through each starting index
  for (let start = 0; start < string.length; start++) {
    // Loop through each ending index (from start to end of string)
    for (let end = start; end < string.length; end++) {
      // Extract substring from start to end (inclusive) and add to result
      result.push(string.substring(start, end + 1));
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  // Additional test cases (optional)
  console.log("");
  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("");
  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));
}

module.exports = consecutiveSubstrings;