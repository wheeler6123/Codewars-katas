// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata(but not y).

// The input string will only consist of lower case letters and / or spaces.

export class Kata {
    static getCount(str: string): number {
        let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
        let count: number = 0;
        let chars: string[] = str.split('');

        for (let i = 0; i < chars.length; i++) {
            if (vowels.includes(chars[i])) {
                count++;
            }
        }

        return count;
    }
}