class Quiz {
  constructor() {
      this.curQuestion = 0,
      this.questions = [

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
              choices: ['5', '3', '8', '6'],
              answer: '3- Syntax, Runtime, and Logical Errors'
          }
          
      ],
      this.timeLeft = 75; // Adding the timeLeft property to the Quiz class
  }
  incrementQuiz(){
      this.curQuestion += 1;
      console.log(this.curQuestion)
  }
  // questions[curQuestion].question
  // questions[curQuestion].choices
  // questions[curQuestion].answer

}

const quiz = new Quiz();
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);
const timerElement = document.getElementById('seconds');
const questionContainer = document.getElementById('question-container');
const choicesContainer = document.getElementById('choices');
const messageElement = document.getElementById('message');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit-btn');

function displayQuestion(questionObj) {
  questionContainer.textContent = questionObj.question;
  $('#choice-list').empty(); // Clear the choices from previous questions
  questionObj.choices.forEach((choice) => {
      const choiceButton = $('<button></button>');
      choiceButton.text(choice);
      choiceButton.on('click', () => checkAnswer(choice, questionObj.answer));
      $('#choice-list').append(choiceButton); // Use the correct ID here
  });
}

function checkAnswer(selectedChoice, correctAnswer) {
  if (selectedChoice === correctAnswer) {
      displayMessage('Correct!');
  } else {
      displayMessage('Wrong! 7 seconds deducted.');
      quiz.timeLeft -= 7;
      if (quiz.timeLeft < 0) quiz.timeLeft = 0;
  }
  if (quiz.curQuestion < quiz.questions.length - 1) {
      setTimeout(() => {
          displayQuestion(quiz.questions[++quiz.curQuestion]);
      }, 1000);
  } else {
      setTimeout(() => {
          endQuiz();
      }, 1000);
  }
}

function displayMessage(message) {
  if (messageElement) {
      messageElement.textContent = message;
  }
}

let countdownInterval; // Variable to store the interval ID

function countdown() {
  countdownInterval = setInterval(function () {
      if (quiz.timeLeft > 1) {
          timerElement.textContent = quiz.timeLeft + ' seconds remaining';
          quiz.timeLeft--;
      } else if (quiz.timeLeft === 1) {
          timerElement.textContent = quiz.timeLeft + ' second remaining';
          quiz.timeLeft--;
      } else {
          timerElement.textContent = '';
          clearInterval(countdownInterval); // Clear the interval using the stored ID
          endQuiz();
      }
  }, 1000);
}

function endQuiz() {
  clearInterval(countdownInterval); // Make sure to clear the interval here as well
  questionContainer.style.display = 'none';
  choicesContainer.style.display = 'none';
  initialsInput.style.display = 'block';
  submitButton.style.display = 'block';
  displayMessage('Quiz Over!');
  $('#submit').css('display','inherit')
  $('#choice-list').empty();
}

function saveScore() {
  const initials = initialsInput.value.trim();
  if (initials === '') return;

  const scoreObj = { initials: initials, score: quiz.timeLeft };
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push(scoreObj);
  highScores.sort((a, b) => b.score - a.score); // Sort in descending order

  // Keep only the top 5 high scores
  highScores = highScores.slice(0, 5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  displayMessage('Score saved! Redirecting to highscores page...');

  // Redirect to highscores.html after a delay of 2 seconds (2000 milliseconds)
  setTimeout(() => {
      window.location.href = '/highscores.html';
  }, 2000);
}


function startQuiz() {
  $('#start-btn').css('display', 'none');
  quiz.curQuestion = 0; // Reset the current question index
  quiz.timeLeft = 75; // Reset the time left
  displayQuestion(quiz.questions[quiz.curQuestion]);
  countdown();
}

submitButton.addEventListener('click', saveScore);
