/*

// Example quiz object might look like:

var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 3rd letter in the alphabet?",
        answers: [
            {text: "a", correct: false},
            {text: "b", correct: false},
            {text: "c", correct: true},
            {text: "d", correct: false}
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How many licks to the center of a tootsie pop?",
        answers: [
            {text: "3", correct: true},
            {text: "682", correct: false},
            {text: "841", correct: false},
            {text: "1000", correct: false},
        ],
        userAnswer: ""
    }
]

*/



var app = new Vue({
    el: "#app",
    data:{
        // to attach your global quiz variable to a data variable:
        // myQuiz: QUIZ,
    },
    methods:{
        // used for showing questions individually
        nextQuestion : function () {},

        // used for showing questions individually
        previousQuestion : function () {},

        setPage: function (page) {},
        
        calculateScore: function () {}
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () {}
    }
});