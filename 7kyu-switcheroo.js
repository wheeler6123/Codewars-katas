/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/


//P: one input, a string consisting of only lowercase letters a, b, and/or c
//R: return a string, switching all the As and Bs in the input string, leaving the Cs untouched
//E: 'acb' => 'bca'
  // 'aabacbaa' => 'bbabcabb'
//P: split the string into chars, then iterate through replacing as needed, return the joined string 


function switcheroo(x){
    let chars = x.split('');
    let result = '';
    for(let i = 0; i < chars.length; i++){
      if(chars[i]==='a'){
        result += 'b';
      }else if(chars[i]==='b'){
        result += 'a';
      }else{
        result += 'c';
      }
    }
    return result
  }