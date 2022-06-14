var app = new Vue({
    el: "#app",
    data: {
        // row count and column count

        // mole position (row and column)

        // score and total
    },
    methods: {
        updateMoleRecursive: function () {
            // use SetTimeout to 
            // 1. change the mole's position
            // 2. update the total
            
        },
        hitMole: function () {
            // 1. add 1 to the score

            // 2. clear the mole off the board

        }
    },
    created: function () {
        // Call Recursive function to start
    }
});



// Extra Challenges:
// - Restart/Play button - begins the game
// - Stop the mole after a certain total (10, 20, etc.)
// - Keep a high score, separate from the current game's score
// - Have multiple Moles