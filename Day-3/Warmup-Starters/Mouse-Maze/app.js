const WALLS_URL = "https://api.jsonbin.io/b/62a94a26402a5b38022853a7"

var app = new Vue({
    el: "#app",
    data: {
        // bool variables for started, won, lost
        
        // array for walls

    },
    methods: {
        // resets started, won, lost to initial values
        restartMaze: function () {

        }
    },
    // fetch walls from jsonbin and assign wall array
    created: function () {

    }
});


// Extra Challenges:
// - Restart button
// - Create your own maze (your own walls, same or different css)
// - Have 'moving' walls (hint: transition property)
// - Have multiple levels