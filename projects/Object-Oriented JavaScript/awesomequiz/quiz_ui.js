var QuizUI = {
  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
    this.populateIdWithHtml("quiz", gameOverHTML);
  },
  displayQuestion: function() {
    this.populateIdWithHtml("question", quiz.getCurrentQuestion().question);
  },
  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;
    
    for (var i = 0; i < choices.length; i++) {
      this.populateIdWithHtml("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  populateIdWithHtml: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },
  dislayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHtml("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }
  
}