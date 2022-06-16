var app = new Vue({
    el: "#app",
    data: {
        // 1. 3 number variables, one for each input

        // 3. 1 list variable, holds strings (ex. ['rgb(0,255,128)', 'rgb(0,0,0)', ...])

    },
    methods: {
        // 3. push the current rgbString into the color list
        addColor: function () {

        }
    },
    computed: {
        // 1. insert your variable names into their respective places
        rgbString: function () {
            let finalString = "rgb(";
            finalString += this.YOUR_RED_VARIABLE + ",";
            finalString += this.YOUR_GREEN_VARIABLE + ",";
            finalString += this.YOUR_BLUE_VARIABLE + ")";
            return finalString;
        },
    }
});