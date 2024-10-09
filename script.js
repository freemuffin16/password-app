function checkAnswer() {
  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = 40; // Correct answer to the math problem

  if (parseInt(userAnswer) === correctAnswer) {
    document.getElementById('feedback').innerHTML = 'Correct! Here is your password:';
    document.getElementById('password').style.display = 'block';
  } else {
    document.getElementById('feedback').innerHTML = 'Incorrect, try again.';
    document.getElementById('password').style.display = 'none';
  }
}
