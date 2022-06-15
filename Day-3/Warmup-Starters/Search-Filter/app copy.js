var app = new Vue({
    el: '#app',
    data: {
        // input for new dice sides
        sidesInput: "",

        // array to hold dice
        dice: []
    },
    methods: {
        // create new die, push it to our dice array
        addDie: function () {
            let newDie = {
                sides: this.sidesInput,
                currentValue: this.sidesInput
            }

            this.dice.push(newDie);
        },
        // use setInterval, as well as a counter variable (ie. i = 0), to get a random value for the die.
        //   After the counter variable reaches a stopping point (ie. i >= 20), clear the interval.
        rollDie: function (index) {
            let i = 0;
            let clickedDie = this.dice[index];
            let intervalID = setInterval(() => {
                let roll = Math.ceil(Math.random()*this.dice[index].sides);
                clickedDie.currentValue = roll;
                if (i >= 20) {
                    clearInterval(intervalID);
                }
                i++;
            }, 75);
        },
        // use the array.splice function to delete the dice at the given index
        deleteDie: function (index) {
            this.dice.splice(index, 1);
        },
        // similar to rolling a single die, but start a setInterval for each die. 
        //   Each interval stopping point (ie. 20) should be more than the previous (ie. 20, 40, 60, ...)
        rollAllDice: function () {
            let rollInterval = 20;
            for (let i = 0; i < this.dice.length; i++) {
                let rollCount = 0;
                let rollFinish = rollInterval * (i + 1);
                let currentDie = this.dice[i];
                
                let intervalID = setInterval(() => {
                    let roll = Math.ceil(Math.random() * currentDie.sides);
                    currentDie.currentValue = roll;
                    if (rollCount >= rollFinish) {
                        clearInterval(intervalID);
                    }
                    rollCount++;
                }, 75);
            }
        }
    }
})