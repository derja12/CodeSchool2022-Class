var url="http://todo2022.codeschool.cloud";

var app = new Vue({
    el: '#app',
    data: {
        todo_data: [],

        nameInput: "",
        descInput: "",
        deadlineInput: "",

        editingTodo: -1,

        tags: [],
        editingTags: [],
    },
    methods: {
        // GET todos
        getTodos: function () {
            fetch(url + "/todos").then((response) => {
                response.json().then((data) => {
                    data.forEach((todo) => {
                        todo.deadline = todo.deadline.split("T")[0];
                    });
                    this.todo_data = data;
                });
            });
        },

        // GET tags
        getTags: function () {
            fetch(url + "/tags").then((response) => {
                response.json().then((tags) => {
                    tags.forEach(tag => {
                        this.tags.push({
                            name: tag,
                            selected: false
                        });
                    });
                });
            });
        },

        // CREATE new todo
        createNewTodo: function () {

            let selectedTagNames = [];
            this.tags.forEach((tag) => {
                if (tag.selected) {
                    selectedTagNames.push(tag.name);
                }
            });

            let rawData = {
                "name": this.nameInput,
                "description": this.descInput,
                "deadline": this.deadlineInput,
                "tags": selectedTagNames,
                "done": false
            }
            let sendData = JSON.stringify(rawData);
            
            fetch(url + "/todo", {
                method: "POST",
                body: sendData,
                headers: {"Content-Type" : "application/json"}

            }).then((response) => {
                if (response.status == 200) {
                    this.getTodos();
                    this.nameInput = "";
                    this.descInput = "";
                    this.deadlineInput = "";
                    this.tags.forEach(tag => {
                        tag.selected = false;
                    });
                }
            });
        },

        // UPDATE existing todo
        editTodo: function (index) {
            this.editingTags = [];
            this.tags.forEach(tag => {
                this.editingTags.push({
                    name: tag.name,
                    selected: this.todo_data[index].tags.includes(tag.name)
                });
            });
            this.editingTodo = index;
        },

        updateTodo: function (index) {
            let todo = this.todo_data[index];
            let selectedTagNames = [];
            this.editingTags.forEach((tag) => {
                if (tag.selected) {
                    selectedTagNames.push(tag.name);
                }
            });

            let rawData = {
                "name": todo.name,
                "description": todo.description,
                "deadline": todo.deadline,
                "tags": selectedTagNames,
                "done": todo.done
            }
            let sendData = JSON.stringify(rawData);
            
            fetch(url + "/todo/" + todo._id, {
                method: "PUT",
                body: sendData,
                headers: {"Content-Type" : "application/json"}

            }).then((response) => {
                if (response.status == 200) {
                    this.getTodos();
                }
                this.editingTodo = -1;
            });
        },

        // DELETE todo
        deleteTodo: function (index) {
            fetch(url + "/todo/" + this.todo_data[index]._id, {
                method: "DELETE"
            }).then((response) => {
                this.getTodos();
                this.editingTodo = -1;
            });
        }

        // =============== HELPERS ===============

        // FORMAT DEADLINE for displaying
        // displayDeadline: function (index) {
        //     console.log(index);
        //     let deadline = this.todo_data[index].deadline;
        //     deadline = new Date(deadline + "MDT");
        //     return deadline.toDateString();
        // }
    },
    created: function () {
        this.getTodos();
        this.getTags();
    }
});

/* EXTRA FUNCTIONALITIES

[ ] SORT incoming list of Todos (coming up -> farther out -> past deadline)
[ ] SEPARATE todos into separate lists - Incomplete | Complete
[ ] COLOR different todos based on completed, time left, etc
[ ] HIDE extra information until user clicks on the title to expand it
[ ] ADD category for todo (school, chores, work, etc.)
    [ ] ADD filter for different categories
[ ] DISABLE update button if no data has changed
[ ] RESTORE original values when canceling edits

*/