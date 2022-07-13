// example address - {name: "Derek", address: "1234 E Vuetify Avenue"}

var app = new Vue({
    el: "#app",
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
        }
    }
})