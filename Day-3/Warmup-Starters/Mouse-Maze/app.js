const WALLS_URL = "https://api.jsonbin.io/b/62a94a26402a5b38022853a7"

var app = new Vue({
    el: "#app",
    data: {
        // bool variables for started, won, lost
        started: false,
        won: false,
        lost: false,

        // array for walls
        walls: []
    },
    methods: {
        // resets started, won, lost to initial values
        restartMaze: function () {
            this.started = false;
            this.won = false;
            this.lost = false;
        }
    },
    // fetch walls from jsonbin and assign wall array
    created: function () {
        fetch(WALLS_URL).then(response => {
            response.json().then(data => {
                this.walls = data;
                
                
                // moving walls
                let bottom_wall = this.walls[0];
                let top_wall = this.walls[1];
                bottom_wall.style.transition = "5s";
                top_wall.style.transition = "5s";
                top_wall.style.height = "40vh";

                let moving_up = true;
                setInterval(() => {
                    if (moving_up) {
                        bottom_wall.style.height = "38vh",
                        top_wall.style.bottom = "68vh"
                    } else {
                        bottom_wall.style.height = "32vh",
                        top_wall.style.bottom = "62vh"
                    }
                    moving_up = !moving_up;
                }, 5000);
            })
        })
    }
});


// Extra Challenges:
// - Restart button
// - Create your own maze (your own walls, same or different css)
// - Have 'moving' walls (hint: transition property)
// - Have multiple levels