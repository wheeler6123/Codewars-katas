// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

//  do not allocate memory for the return
//  assign values to pre-allocated result

#include <stdbool.h>
#include <stddef.h>
#include <string.h>

void flick_switch(size_t length, const char *const array[length], bool result[length]) {

  bool not_flick = true;
  const char FLICK[6] = "flick";
  
  for (int i = 0, n = length; i < n; i++)
    {
      int value;
      value = strcmp(array[i], FLICK);
      (value == 0) ? not_flick = !not_flick : not_flick;
      result[i] = not_flick;
  }
}