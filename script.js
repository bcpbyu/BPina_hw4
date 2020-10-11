var starterBtn = document.querySelector("#starterBtn");
var quizStart = document.querySelector("#quizStart");
var asker = document.querySelector("#asker");
var question = document.querySelector("#questions");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var options = [option1, option2, option3, option4];
var questionasker;
var questionNum = 1;


var test = {
    quiz1: {
        question: "What is anything multiplied by zero?",
        options: ["anything", "zero", "infinity", "I dunno"],
        answer: 1
    },
    quiz2: {
        question: "What is anything to the power of zero?",
        options: ["zero", "anything", "not possible", "infinity"],
        answer: 0
    },
    quiz3: {
        question: "What is the derivative of sine?",
        options: ["not possible", "I dunno", "negative sine", "cosine"],
        answer: 3
    }
};




starterBtn.addEventListener("click", function () {
    quizStart.style.display = "none";
    asker.style.display = "block";
    question.innerHTML = test.quiz1.question;
    option1.innerHTML = test.quiz1.options[0];
    option2.innerHTML = test.quiz1.options[1];
    option3.innerHTML = test.quiz1.options[2];
    option4.innerHTML = test.quiz1.options[3];
});
for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        if (questionNum == 1) {
            question.innerHTML = test.quiz2.question;
            option1.innerHTML = test.quiz2.options[0];
            option2.innerHTML = test.quiz2.options[1];
            option3.innerHTML = test.quiz2.options[2];
            option4.innerHTML = test.quiz2.options[3];
            questionNum++;
        }
        else if (questionNum == 2) {
            question.innerHTML = test.quiz3.question;
            option1.innerHTML = test.quiz3.options[0];
            option2.innerHTML = test.quiz3.options[1];
            option3.innerHTML = test.quiz3.options[2];
            option4.innerHTML = test.quiz3.options[3];
            questionNum++;
        }

    });
}


