Vue.component('custom-address', {
    template: `
    <div>
        <h3>{{ address.name }}</h3>
        <p>{{ address.address }}</p>
        <button v-on:click='removeAddress'>Remove</button>
    </div>
    `,
    props: {
        'address': Object,
        'index': Number,
        'list': Array
    },
    methods: {
        removeAddress: function () {
            this.list.splice(this.index, 1);
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        // variables to model each input
        name: "",
        address: "",

        // list to hold addresses
        addressList: []
    },
    methods: {
        // function to push address into list, clear input fields
        createAddress: function () {
            // create new address object
            let newAddress = {
                name: this.name,
                address: this.address
            }
            
            // push on the new address
            this.addressList.push(newAddress);

            // clear the inputs
            this.name = "";
            this.address = "";
        }
    }
})