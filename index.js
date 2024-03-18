// Implementing a function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implementing a function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Implementing a function returning a function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Test the functions
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  console.log(wrapAdjective("%")("a dedicated programmer")); // Output: "You are %a dedicated programmer%!"
  