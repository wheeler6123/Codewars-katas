/*Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead*/


//P: input will be a string containing a nothing, one of 'n' or '_' or a combination of both
//R: return a string whose contents depend on if the car will make it home or not. If 15 bumps ('n') or less return 'Woohoo!' otherwise return 'Car Dead'
//E: 'n' => 'Woohoo!'
  // '__n_n__n___n_n__nnn_' => 'Woohoo!'
  // 'n_nnn___nnnnn_nn___nnn_nn' => 'Car Dead'
//P: for this we simply need to count the bumps(n) in the string
  // declare a var to hold the count
  // loop through and check for each el, if it contains an 'n', increment counter
  // if counter 15 or less, return 'Woohoo!' else return 'Car Dead'

  function bump(x){
    let bumps = 0;
    let road = x.split('')
    for(let i = 0; i < road.length; i++){
        if(road[i] === 'n'){
          bumps++
        }
    }return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
  }