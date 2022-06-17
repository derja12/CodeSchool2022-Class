const URL = "https://poetrydb.org/author/Edgar%20Allan%20Poe/title"

var app = new Vue({
    el: '#app',
    data: {
        // One variable for search input, one variable for poems array
        searchInput: "",

        poems: []
    },

    computed:{
        // Using filter and indexOf, filter your array using the user's search string
        filteredPoems: function(){
            // 1. Get a copy of the poems array
            var poemsArray = [...this.poems];
            var searchString = this.searchInput;

            // 2. Get a trimmed/lowercase version of the user's search
            searchString = searchString.trim().toLowerCase();

            // 3. use ARRAY.filter((item) => {...}) to get your filtered array
                // 4. when filtering, if the title does not contain the user's search (STRING.indexOf() != 1), return that poem
            poemsArray = poemsArray.filter((poem) => {
                if (poem.title.toLowerCase().indexOf(searchString) != -1 ){
                    return poem
                }
            })

            // 5. return the filtered array
            return poemsArray
        }
    },
    created: function () {
        // do a GET request with the given url to fill in the your poems array
        fetch(URL).then(response => {
            response.json().then(data => {
                this.poems = data;
            });
        });
    }
});