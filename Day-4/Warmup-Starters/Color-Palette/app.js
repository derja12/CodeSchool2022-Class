var app = new Vue({
    el: "#app",
    data: {
        // 1. 3 number variables, one for each input
        redInput: 0,
        greenInput: 127,
        blueInput: 255,
        // 3. 1 list variable, holds strings (ex. ['rgb(0,255,128)', 'rgb(0,0,0)', ...])
        colorContainer: []
    },
    methods: {
        // 3. push the current rgbString into the color list
        addColor: function () {
            this.colorContainer.push(this.rgbString);
        }
    },
    computed: {
        // 1. insert your variable names into their respective places
        rgbString: function () {
            let finalString = "rgb(";
            finalString += this.redInput + ",";
            finalString += this.greenInput + ",";
            finalString += this.blueInput + ")";
            return finalString;
        },
        hexString: function () {
            let finalString = "#";
            // ...
        }
    }
});