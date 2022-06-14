var app = new Vue({
    el: "#app",
    data: {
        // row count and column count
        rows: 5,
        columns: 5,

        // mole position (row and column)
        moleRow: -1,
        moleColumn: -1,


        // score and total
        score: 0,
        total: 0,
    },
    methods: {
        updateMoleRecursive: function () {
            // use SetTimeout to 
            // 1. change the mole's position
            // 2. update the total
            this.total = 0;
            var updateMoleIntervalID = setInterval(() => {
                this.moleRow = Math.ceil(Math.random() * this.rows);
                this.moleColumn = Math.ceil(Math.random() * this.columns);

                this.total++;
                if (this.total >= 10) {
                    setTimeout(() => {
                        this.moleRow = -1;
                        this.moleColumn = -1;
                    }, 1000);
                    clearInterval(updateMoleIntervalID);
                }
            }, 1000);
            
        },
        hitMole: function () {
            console.log("hit mole!");
            // 1. add 1 to the score
            this.score++;
            // 2. clear the mole off the board
            this.moleRow = -1;
            this.moleColumn = -1;
        }
    },
    created: function () {
        // Call Recursive function to start
        this.updateMoleRecursive();
    }
});


// Extra Challenges:
// - Restart/Play button - begins the game
// - Stop the mole after a certain total (10, 20, etc.)
// - Keep a high score, separate from the current game's score
// - Have multiple Moles