// For the javascript I took a very straight forward approach.

// All variable for elements, or needed for javascript.
var starterBtn = document.querySelector("#starterBtn");
var quizStart = document.querySelector("#quizStart");
var scorePage = document.querySelector("#scorePage");
var asker = document.querySelector("#asker");
var highscores = document.querySelector("#highscores");

// Store all saved names and scores variables.
var allNames = [];
var allScores = [];

var seeScore = document.querySelector("#seeScore");
var initials = document.querySelector("#initials");
var input = document.querySelector("#input");
var goAgain = document.querySelector("#goAgain");
var goAgain2 = document.querySelector("#goAgain2");
var question = document.querySelector("#questions");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var options = [option1, option2, option3, option4];
var disScore = document.querySelector("#score");
var score = 0;
var questionNum = 0;

// All questions, options, and answer number variable/object.
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
    },
    quiz4: {
        question: "What is 10+10?",
        options: ["10", "0", "20", "1010"],
        answer: 2
    }
};

var liveScore = document.querySelector("#scoreDis")
var finished = false;
var timeLeft = 30;
var elem = document.querySelector("#someDiv");
var timerId;
var timePenalty = 3;
var scoreCount = [];

// This function produces the next question, updates your score, and will 
// show the end of quiz page at the end.
function nextQuest() {
    liveScore.innerHTML = "Your score: " + score;

    if (questionNum == 0) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz1.options[i];
        }
        question.innerHTML = test.quiz1.question;
    }
    else if (questionNum == 1) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz2.options[i];
        }
        question.innerHTML = test.quiz2.question;
    }
    else if (questionNum == 2) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz3.options[i];
        }
        question.innerHTML = test.quiz3.question;

    }
    else if (questionNum == 3) {
        for (var i = 0; i < options.length; i++) {
            options[i].innerHTML = test.quiz4.options[i];
        }
        question.innerHTML = test.quiz4.question;
    }
    else {
        asker.style.display = "none";
        highscores.style.display = "block";
        disScore.innerHTML = score;
        finished = true;
    }

    scoreCount.push(score);
    questionNum++;
};

// This is for the "Begin Quiz" button to start the quiz, and the timer when clicked.
starterBtn.addEventListener("click", function () {
    quizStart.style.display = "none";
    asker.style.display = "block";
    document.querySelector("#someCont").style.display = "block";
    countdown();
    nextQuest();
    timerId = setInterval(countdown, 1000);
});

// Every option button produces the next question when clicked, updates your
// score and timer, and flashes the top red or green.

// First option .
option1.addEventListener("click", function () {
    if (questionNum == 3) {
        score = score + 5;
        flashGreen();
    }
    else {
        score--;
        timeLeft = timeLeft - timePenalty;
        flashRed();
    }
    nextQuest();
});

// Second option.
option2.addEventListener("click", function () {
    if (questionNum == 1) {
        score = score + 5;
        flashGreen();
    }
    else {
        score--;
        timeLeft = timeLeft - timePenalty;
        flashRed();
    }
    nextQuest();
});

// Third option.
option3.addEventListener("click", function () {
    if (questionNum == 4) {
        score = score + 5;
        flashGreen();
    }
    else {
        score--;
        timeLeft = timeLeft - timePenalty;
        flashRed();
    }
    nextQuest();
});

// Fourth option.
option4.addEventListener("click", function () {
    if (questionNum == 2) {
        score = score + 5;
        flashGreen();
    }
    else {
        score--;
        timeLeft = timeLeft - timePenalty;
        flashRed();
    }
    nextQuest();
});

// This is for the "See All Scores" button when clickled will get your saved
// scores and show the scores page with all saved scores.
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
        scoreList.appendChild(pa);
    }
});

// This is for when you submit your name to saved score it will save it to
// be brought up again.
input.addEventListener("submit", function (event) {
    event.preventDefault();
    var storedNames = JSON.parse(localStorage.getItem("initials"));
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedNames !== null) {
        allNames = storedNames;
    }
    if (storedScores !== null) {
        allScores = storedScores
    }
    var inputText = initials.value.trim();
    allNames.push(inputText);
    allScores.push(score);
    initials.value = "";
    localStorage.setItem("initials", JSON.stringify(allNames));
    localStorage.setItem("scores", JSON.stringify(allScores));
});

// For the "Try Again" button on the end of quiz page to restart the site.
goAgain.addEventListener("click", function () {
    location.reload();
});

// For the "Try Again" button on the scores page to restart the site.
goAgain2.addEventListener("click", function () {
    location.reload();
});

// This function runs the timer and display the time left.
function countdown() {
    if (timeLeft < 0 && finished == false) {
        clearInterval(timerId);
        outOfTime();
    }
    else if (finished == true) {
    }
    else {
        elem.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
    }
};

// This function will display the end of quiz page if you run out of time,
// also changes the words to "Out Of Time".
function outOfTime() {
    asker.style.display = "none";
    highscores.style.display = "block";
    disScore.innerHTML = score;
    document.querySelector("#outOfTime").innerHTML = "Out Of Time";
};

// This function flashes the top of the page red.
function flashRed() {
    document.querySelector("#someCont").classList.add("bg-danger");
    window.setTimeout(function () {
        document.querySelector("#someCont").classList.remove("bg-danger")
    }, 300);
};

// This function flashes the top of the page green.
function flashGreen() {
    document.querySelector("#someCont").classList.add("bg-success");
    window.setTimeout(function () {
        document.querySelector("#someCont").classList.remove("bg-success")
    }, 300);
};