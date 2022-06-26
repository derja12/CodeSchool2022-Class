const API_URL = "https://fakestoreapi.com";

Vue.component('product-component', {
    template: `
    <div>
        <h1>This is a component!<h1>
        <button>Click here!</button>
    </div>
    `,
    props: [],
    data: function () {
        return {};
    }
})

var app = new Vue({

});




/*

=== Instructions ===

0. comment out previous html - we'll want it to reference for later

1. use the tag <product-component> to display the components current html template

2. add a v-for (with your products array) to your component to display it multiple times

3. add a prop for each product info (image, title, description, price)
    3.1  change the component's html to display that information (use the last warmup's html for reference)
    


=== If you've finished the above ===

4. Use a single prop, one that accepts the entire product object
    (you can then access each piece)

*/