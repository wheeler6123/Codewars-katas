//Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//P: 3 inputs, representing the width, height, and depth of a box
//R: return an array with the surface area and volume of the box
//E: (4,2,6) => [88,48]
  // (10,10,10) => [600,1000]
//P: declare vars and assign formulas for surface area and volume
  // return the vars with proper values in an array

  function getSize(width, height, depth){
    const surfaceArea = (2*width*height) + (2*width*depth) + (2*depth*height);
    const volume = width*height*depth;
    return [surfaceArea, volume];
  }
  