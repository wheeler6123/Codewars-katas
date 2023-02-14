/* 
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/




//P: three input params, the first is the height of the floor above ground level (h), second is the ratio of the bounce height to the floor height, third is the height above ground the window the mom is watching from 
//R: return an integer for the number of times the mom sees the ball pass the window (falling and rising) 
//E: 3, 0.66, 1.5 => 3
  // 30, 0.66, 1.5 => 15
  // 3, 1, 1.5 => -1 (the bounce has to be more than 0 or less than 1 to be valid)
//P: first, implement the checks for validity, if invalid return -1
  // if valid params, calculate the number of times the height of the bounce will be greater than the window height
  // return the count




  function bouncingBall(h,  bounce,  window) {
    if(h < 0 || bounce <= 0 || bounce >= 1 || window >= h){
      return -1
    }
    
    let count = 1;
    while(h > window){
      h = h * bounce
      if(h > window){
        count += 2;
      }
    }
    
    return count
  }