//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//changed the # to $ in the template literal string and added space behind the comma to separate words

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }