// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


export function sameCase(a : string, b : string): number {
    const codeA: number = a.charCodeAt(0);
    const codeB: number = b.charCodeAt(0);
    if(
      ((codeA > 64 && codeA < 91) && (codeB > 64 && codeB < 91)) || 
      ((codeA > 96 && codeA < 123) && (codeB > 96 && codeB < 123))
      ){
      return 1;
    }else if (
      ((codeA > 64 && codeA < 91) || (codeA > 96 && codeA < 123)) &&
      ((codeB > 64 && codeB < 91) || (codeB > 96 && codeB < 123))
    ){
      return 0;
    }else{
      return -1;
    }
  }