var countdown =function (num) {

for(var i =num; i >0 ; i-- ) {

console.log(i);
}
function timeInterval(seconds) 

setInterval(function () {
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
}, 1000)

};

