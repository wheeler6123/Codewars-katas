/*Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

*/



//P: input will be an integer from 1 to 10
//R: return the multiplication table for that integer, covering 1-10
//E: 1 => '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
//P: use a template literal to return the string for 1-10 * input integer

function multiTable(n) {
    return `1 * ${n} = ${1*n}\n2 * ${n} = ${2*n}\n3 * ${n} = ${3*n}\n4 * ${n} = ${4*n}\n5 * ${n} = ${5*n}\n6 * ${n} = ${6*n}\n7 * ${n} = ${7*n}\n8 * ${n} = ${8*n}\n9 * ${n} = ${9*n}\n10 * ${n} = ${10*n}`
  }