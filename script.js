var starterBtn = document.querySelector("#starterBtn");
var quizStart = document.querySelector("#quizStart");
var asker = document.querySelector("#asker");
var question = document.querySelector("#questions");
var buttons = document.querySelector("#option");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var options = [option1, option2, option3, option4];
var score = 0;
var questionasker;
var questionNum = 0;
var test = {
    quiz1: {
        question: "What is anything multiplied by zero?",
        options: ["anything", "zero", "infinity", "I dunno"],
        answer: 1
    },
    quiz2: {
        question: "What is anything to the power of zero?",
        options: ["zero", "anything", "not possible", "one"],
        answer: 3
    },
    quiz3: {
        question: "What is the derivative of sine?",
        options: ["cosine", "not possible", "negative sine", "I dunno"],
        answer: 0
    }
};
function nextQuest() {

    if (questionNum == 0) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz1.options[i];
            question.innerHTML = test.quiz1.question;
        }
    }
    else if (questionNum == 1) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz2.options[i];
            question.innerHTML = test.quiz2.question;
        }
    }
    else if (questionNum == 2) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz3.options[i];
            question.innerHTML = test.quiz3.question;
        }

    }
    else {
        asker.style.display = "none";
    }
    console.log(questionNum);
    console.log(score);
    questionNum++;
};

starterBtn.addEventListener("click", function () {
    quizStart.style.display = "none";
    asker.style.display = "block";
    nextQuest();
});

option1.addEventListener("click", function () {
    if (questionNum == 3) {
        score = score+5;
    }
    nextQuest();
    
});
option2.addEventListener("click", function () {
    if (questionNum == 1) {
        score = score+5;
    }
    nextQuest();
    
});
option3.addEventListener("click", function () {
    nextQuest();
});
option4.addEventListener("click", function () {
    if (questionNum == 2) {
        score = score+5;
    }
    nextQuest();
    
});

// for (var i = 0; i < options.length; i++) {
//     options[i].addEventListener("click", function () {
//         if (questionNum == 1) {
//             question.innerHTML = test.quiz2.question;
//             option1.innerHTML = test.quiz2.options[0];
//             option2.innerHTML = test.quiz2.options[1];
//             option3.innerHTML = test.quiz2.options[2];
//             option4.innerHTML = test.quiz2.options[3];
//             questionNum++;
//             if (i == test.quiz1.answer) {
//                 score = score +5
//             }
//             console.log(score);
//         }
//         else if (questionNum == 2) {
//             question.innerHTML = test.quiz3.question;
//             option1.innerHTML = test.quiz3.options[0];
//             option2.innerHTML = test.quiz3.options[1];
//             option3.innerHTML = test.quiz3.options[2];
//             option4.innerHTML = test.quiz3.options[3];
//             questionNum++;
//             if (i == test.quiz2.answer) {
//                 score = score +5
//             }
//             console.log(score);
//         }

//     });


