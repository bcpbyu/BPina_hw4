var starterBtn = document.querySelector("#starterBtn");
var questiony = document.querySelector("#asker");
var questionasker;



var test = {
    quiz1: {
        question: "What is anything multiplied by zero",
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
console.log("java");



starterBtn.addEventListener("click", function() {
    questiony.classList.remove("jumbotron");
    questiony.innerHTML = "";
    questionAsker = questiony.appendChild(h1);
    questionAsker.createAttribute("class");
    questionAsker.innerHTML = test.quiz1.question;

});

