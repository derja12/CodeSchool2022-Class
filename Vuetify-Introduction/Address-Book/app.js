// example address - {name: "Derek", address: "1234 E Vuetify Avenue"}

var app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        inputName: "",
        inputAddress: "",

        addressList: [], 
    },
    methods: {
        recordAddress: function () {
            let newAddress = {
                name: this.inputName,
                address: this.inputAddress
            }

            this.addressList.push(newAddress);
            this.inputName = "";
            this.inputAddress = "";
        },
        sayHello: function () {
            console.log("hello");
            alert("hello");
        }
    }
})