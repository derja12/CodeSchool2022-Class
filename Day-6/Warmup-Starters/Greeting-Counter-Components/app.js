// ======================= GREETING =======================

/* Steps:

1. give the component a template, something like:
    <div>
        Hello, Vue Components, I am greeting_component!
        <button>Change Name</button>
    </div>

2. Create a data member called 'name', and update the html to now use the data member:
    'Hello, Vue Components, I am {{ name }}!'

3. Create a method called 'changeName', which updates the data member 'name' to a new name (ie. Chuck Norris).

4. Give the button a click event that calls 'changeName'.

5. Now when you click on the button, the name displayed in the greeting should change.

*/

Vue.component('greeting', {
    template: `
    <div>
        Hello, Vue Components, I am {{ name }}!
        <button v-on:click="changeName">Change Name</button>
    </div>  
    `,
    data: function () {
        return {
            name: 'greeting component'
        }
    },
    methods: {
        changeName: function () {
            this.name = "Chuck Norris";
        }
    }
});




// ======================= COUNTER =======================

/* Steps:

1. give the component a template, this time a div surrounding a single button.

2. Create a data member called 'count', and display it somewhere in the html.

3. Create a method called 'increaseCounter' which adds one to the count.

4. Give the button a click event that calls 'increaseCounter'.

5. Now when you click on the button, the count should increase.

*/

Vue.component('counter', {
    template: `
    <div>
        <button v-on:click="increaseCount">Count {{ currentValue }}</button>    
    </div>
    `,
    data: function () {
        return {
            currentValue: 0
        }
    },
    methods: {
        increaseCount: function () {
            this.currentValue++;
        }
    }
});




// ======================= MAIN APP =======================

/*

We aren't doing anything with the main app right now,
it, is only here to hold the components we implement.

*/

var app = new Vue({
    el: "#app",
});