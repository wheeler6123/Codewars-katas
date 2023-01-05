/* 
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/



//P: one input, an integer greater than 2 representing the number of sides of a polygon
//R: the sum of the interior angles of the polygon, as an integer
//E: 3 => 180
  // 4 => 360
  // 5 => 540
  // 6 => 720
//P: the formula to find the sum of an n-sided polygon is (n-2) * 180

const angle = n => (n-2)*180