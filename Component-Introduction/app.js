Vue.component("newComponent",
    { 
        data: function () {
            return {
                counter: 0
            }
        },
        props:[
            "name",
            "color",
        ],
        template: `
        <div>
            <h1>Hello</h1>
            {{ name }}
            <button v-bind:style="{ backgroundColor : color }" v-on:click="counter += 1;">Increase Counter</button>
            {{ counter }}
        </div>
        `
    }
);

var app = new Vue({
    el: "#app",
    data: {
        button_name: "component_button"
    }
});