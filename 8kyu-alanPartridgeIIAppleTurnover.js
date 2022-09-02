/*Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages).*/


//P: one input, x, can be either a positive integer or a string representing an ingteger
//R: if the input squared is greater than 1000, return 'It's hotter than the sun!!', otherwise return 'Help yourself to a honeycomb Yorkie for the glovebox.'
//E: '50' => 'It's hotter than the sun!'
  // 4 => 'Help yourself to a honeycomb Yorkie for the glovebox.'
//P: check input squared and return the appropriate response


const apple = x => x*x > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."