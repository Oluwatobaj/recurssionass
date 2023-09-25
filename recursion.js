function isPalindrome(word) {
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If the characters at the ends are different, it's not a palindrome
        return false;
    }
}

// Example usage:
const word1 = "gag";
const word2 = "kayak";
const word3 = "php";
const word4 = "radar";
const word5 = "hello";

console.log(isPalindrome(word1)); // true
console.log(isPalindrome(word2)); // true
console.log(isPalindrome(word3)); // false
console.log(isPalindrome(word4)); // true
console.log(isPalindrome(word5)); // false
