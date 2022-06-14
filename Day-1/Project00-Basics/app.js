var app = new Vue({
    el: "#app",
    data: {
        hello : "Hello, vue!",
        showText : true,
        globalColor: "#000",
        items: [
            {text:"item a", show: true, color:"#1f2"},
            {text:"item b", show: true, color:"#500"},
            {text:"item c", show: true, color:"#5cf"},
            {text:"item d", show: true, color:"#0f0"}
        ],
        strings: [
            "a",
            "b",
            "c",
            "d"
        ],
        listA: [10,9,8,7,6,5,4,3,2,1]
    },
    methods: {
        toggleTextandAddA_GLOBAL: function () {
            this.showText = !this.showText;
            this.hello = this.hello + "a";
        },
        toggleTextandAddA: function (item) {
            item.show = !item.show;
            item.text = item.text + "a";
        },
        changeColor: function (item) {
            if (item.color != "#fff") {
                item.previousColor = item.color;
                item.color = "#fff"
            } else {
                item.color = item.previousColor;
            }
            this.globalColor = "#444";
            // if (item.show){
            // }
        }
    }
})