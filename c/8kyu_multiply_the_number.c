#include <stdio.h>
#include <math.h>
#include <string.h>

int multiply(int number) {
  char num[10];
  sprintf(num, "%d", number);
  int num_length = strlen(num);
  
  if (number < 0)
    {
    num_length -= 1;
  }
  
  return number * pow(5, num_length);
}