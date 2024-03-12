// Task
// Given a string, return if a given letter always appears immediately before another given letter.

// Worked Example
// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False
// Examples
// ("i found an ounce with my hound", "o", "u") ➞ True

// ("we found your dynamite", "d", "y") ➞ False
// Notes
// All sentences will be given in lowercase.


export function bestFriend(txt: string, a: string, b: string): boolean {
    for(let i = 0; i < txt.length; i++){
        if(txt[i] == a){
            if (txt[i+1] != b){
                return false;
            }
        }
    }
    return true;
}