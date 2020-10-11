var starterBtn = document.querySelector("#starterBtn");
var quizStart = document.querySelector("#quizStart");
var scorePage = document.querySelector("#scorePage");
var asker = document.querySelector("#asker");
var highscores = document.querySelector("#highscores");
var allNames = [];
var allScores = [];
var seeScore = document.querySelector("#seeScore");
var initials = document.querySelector("#initials");
var input = document.querySelector("#input");
var goAgain = document.querySelector("#goAgain");
var question = document.querySelector("#questions");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var options = [option1, option2, option3, option4];
var disScore = document.querySelector("#score");
var score = 0;
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
        highscores.style.display = "block";
        disScore.innerHTML = score;
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
        score = score + 5;
    }
    nextQuest();

});
option2.addEventListener("click", function () {
    if (questionNum == 1) {
        score = score + 5;
    }
    nextQuest();

});
option3.addEventListener("click", function () {
    nextQuest();
});
option4.addEventListener("click", function () {
    if (questionNum == 2) {
        score = score + 5;
    }
    nextQuest();

});

seeScore.addEventListener("click", function () {
    highscores.style.display = "none";
    scorePage.style.display = "block";
    allNames = JSON.parse(localStorage.getItem("initials"));
    allScores = JSON.parse(localStorage.getItem("scores"));
    for (var i = 0; i < allScores.length; i++) {
        var some = allNames[i];
        var some2 = allScores[i];
    
        var pa = document.createElement("p");
        pa.textContent = some + ": " + some2;
        pa.setAttribute("class", "text-center");
    
        scoreList.appendChild(pa);
      }
});

input.addEventListener("submit", function(event) {
    event.preventDefault();
    var inputText = initials.value.trim();
    allNames = JSON.parse(localStorage.getItem("initials"));
    allScores = JSON.parse(localStorage.getItem("scores"));
    allNames.push(inputText);
    allScores.push(score);
    initials.value = "";
    localStorage.setItem("initials", JSON.stringify(allNames));
    localStorage.setItem("scores", JSON.stringify(allScores));
});

goAgain.addEventListener("click", function() {
    location.reload();
});