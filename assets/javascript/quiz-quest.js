var questions = [
    function timeInterval() 
        setInterval(function (75) {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerElement.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerElement.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerElement.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          displayMessage("Times Up");
        }
      }, 1000),
{
    question: "Which is not a JS data type.",
    choices: ['cookies', 'booleans', 'Arrays', 'Variables'],
    answer: 'cookies'

},
{
    question: "which is not the main component inside Javascript",
    choices: ['ECMAScript', 'JavaScript Engine', 'JavaScript Runtime', 'JavaScript Logic'],
    answer: 'JavaScript Logic'
},
{
    question: "What is the hardest concept in JavaScript?",
    choices: ['imagination', 'conceptualizm', 'capitalism', 'Asynchronous programming'],
    answer: 'Asynchronous programming'  
},
{
    question: "what are the three variable types?",
    choices: ['var,let,and const', 'var.bol,and con', 'cons, lon, and tan'],
    answer: 'var,let,and const'
},
{
    question: "How many Errors types in JavaScript?",
    choices: ['5', '3', '8', '6']:
    answer: '3- Syntax, Runtime, and Logical Errors'
}

]

questions[currentQuestion].question
questions[currentQuestion].choices
questions[currentQuestion].answer