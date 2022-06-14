var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        nameInput: "",
        addressInput: "",

        // list to hold addresses
        addressList: [],

        // hovering index
        hoverIndex: -1,
    },
    methods: {
        // function to add(push) address into list, clear input fields
        recordAddress: function () {
            let newAddress = {
                name: this.nameInput,
                address: this.addressInput
            }

            this.addressList.push(newAddress);
            this.nameInput = "";
            this.addressInput = "";
        },
        deleteAddress: function (index) {
            this.addressList.splice(index, 1);
        },
    }
});


// Extra Challenges:
// - Delete button for each address - removes the individual address
// - Only show the address if you hover over the person's name
// - Disable the button if the inputs are blank
// - Edit button - lets you edit already recorded addresses