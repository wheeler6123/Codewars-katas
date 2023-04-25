/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/


//P: 3 inputs, the first two are new Fighter objects containing a name, health score, and damage per attack rating, the last is a string with the name of the fighter who attacks first
//R: return a string with the name of the fighter who wins the fight, determined by the fighter remaining after the first fighter to hit 0 or less on their health value
//E: new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew" => 'Lew'
//P: first determine the order of the attacks in the fight
  // create a while loop that will iterate as long as both fighters health score remains above 0
  // the loop should have the first attacker attack, check health scores, then second fighter attack before checking health scores again
  // return a string at the end with the name of the fighter whose health score is above 0


  function declareWinner(fighter1, fighter2, firstAttacker) {
    if(firstAttacker === fighter1.name){
      while(fighter1.health > 0 && fighter2.health > 0){
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        if(fighter2.health <= 0) return fighter1.toString();
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        if(fighter1.health <=0) return fighter2.toString();
      }
    }else{
      while(fighter2.health > 0 && fighter1.health > 0){
        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        if(fighter1.health <= 0) return fighter2.toString();
        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        if(fighter2.health <=0) return fighter1.toString();
        }
    }
  }