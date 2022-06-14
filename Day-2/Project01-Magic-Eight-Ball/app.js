const URL = "https://cs2022-eight-ball.herokuapp.com";

var app = new Vue({
    el: "#app",
    data: {
        prompt: "Ask a question",
        message: "",
        messageColor: "",
        answerReady: true,
        gradient: "",
        // messageBank: [
        //     "Yes",
        //     "No",
        //     "Maybe",
        //     "Ask Again Tomorrow",
        //     "Probably",
        //     "Probably Not"
        // ],

        question: "",
    },
    methods: {
        askQuestion: function () {
            if (!this.isValidQuestion()) {return;}

            // let nextIndex = Math.floor(Math.random() * this.messageBank.length);
            // let nextResponse = this.messageBank[nextIndex];
            // this.message = "";
            this.answerReady = false;
            this.messageColor = "rgba(255,255,255,0)";
            setTimeout(() => {
                fetch(URL + "/questions").then((response) => {
                    response.json().then((data) => {
                        let answerObject = data;
    
                        this.message = answerObject.answer;
                        this.messageColor = answerObject.color;
                        this.gradient = "linear-gradient(0deg, rgba(0,0,0,1) 0%, " + answerObject.color + " 50%)";
                        setTimeout(() => {
                            this.answerReady = true;
                        }, 1000);
                    });
                });
            }, 1500);
            //this.message = nextResponse;
            this.prompt = "Ask another question";
            this.question = "";
        },
        isValidQuestion: function () {
            return this.question[this.question.length-1] == "?";
        }
    }

});
