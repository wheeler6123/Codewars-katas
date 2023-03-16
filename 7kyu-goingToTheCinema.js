/*
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/


//P: three params, first being the price of a vip card, second being price of individual ticket, and third being the discounted amount for vip ticket purchases
//R: return the breakeven point for where the membership card is worth it over buying individual tickets
//E: 500, 15, 0.9 => 43 (with card 634, with tix 645)
  // 100, 10, 0.95 => 24 (with card 235, with tix 240)
//P: set vars to hold acc value of buying tix, buying with card, current card tix price, and the count for movies
  // use a while loop to check for when the cost buying with card is no longer greather than the cost of buying tix
  // iterate movie count each loop
  // when while loop breaks, return the number of movies


  function movie(card, ticket, perc) {
    let tix = 0;
    let cardPrice = card;
    let cardTix = ticket*perc;
    let movies = 0;
  
    while(Math.ceil(card) >= tix){
      movies++;
      tix += ticket;
      card += cardTix;
      cardTix = cardTix*perc;
    }
    return movies;
  }