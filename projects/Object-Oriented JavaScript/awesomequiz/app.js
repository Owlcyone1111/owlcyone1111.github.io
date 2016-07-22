var questions = [
  new Question("When do owls sleep?", ["Day", "Night"], "Day"),
  new Question("How do owls fly?", ["Loudly", "Silently"], "Silently")
];

var quiz = new Quiz(questions);

// Display quiz
QuizUI.displayNext();