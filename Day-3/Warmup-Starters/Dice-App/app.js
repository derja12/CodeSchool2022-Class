var app = new Vue({
    el: '#app',
    data: {
        // input for new dice sides

        // array to hold dice
    },
    methods: {
        // create new die, push it to our dice array
        addDie: function () {

        },
        // use setInterval, as well as a counter variable (ie. i = 0), to get a random value for the die.
        //   After the counter variable reaches a stopping point (ie. i >= 20), clear the interval.
        rollDie: function (index) {

        },
        // use the array.splice function to delete the dice at the given index
        deleteDie: function (index) {

        },
        // similar to rolling a single die, but start a setInterval for each die. 
        //   Each interval stopping point (ie. 20) should be more than the previous (ie. 20, 40, 60, ...)
        rollAllDice: function () {

        }
    }
})