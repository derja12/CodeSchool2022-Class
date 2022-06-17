var url="http://todo2022.codeschool.cloud";

var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        usableTags: [],

        // create variables for input
        nameInput: "",
        descInput: "",
        doneInput: false,
        dateInput: "",
        tagsInput: {},
    
        newTodoId: "",

        editingIndex: -1,
        // copy of todo for editing
        editingTodoCopy: {},
        editingTags: [], // ex. [true, false, false, true, ...]
    },
    methods: {
        addTodo: function () {
            // 1. get list of tags checked
            let tagsList = [];
            this.usableTags.forEach(tag => {
                if (this.tagsInput[tag]) {
                    tagsList.push(tag);
                }
            });

            // 2. create new todo with input variables
            let newTodo = {
                name: this.nameInput,
                description: this.descInput,
                done: this.doneInput,
                deadline: this.dateInput,
                tags: tagsList,
            }

            // 3. post it to the server
            this.postTodo(newTodo);

            // 4. clear inputs
            this.nameInput = "";
            this.descInput = "";
            this.doneInput = false;
            this.dateInput = "";
            this.resetTagInputs();
        },
        resetTagInputs: function () {
            this.tagsInput = {};
        },

        editTodo: function (todo_object, todo_index) {
            this.editingIndex = todo_index;
            // get a copy of the todo
            this.editingTodoCopy = {...todo_object};

            // does the todo_object have .tags?
            if (Object.keys(todo_object).includes('tags')) {
                // get the list of tags already checked []
                this.editingTags = [];
                this.usableTags.forEach(tag => {
                    this.editingTags.push(todo_object.tags.includes(tag));
                });
            }
        },

        // ============== FETCH FUNCTIONS ==============

        // POST todo
        postTodo: function (new_todo) {
            fetch(url + "/todo", {
                method: "POST",
                body: JSON.stringify(new_todo),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                response.json().then((created_todo) => {
                    // created_todo._id -> newly posted todo
                    this.newTodoId = created_todo._id;
                    this.getTodos();
                });
            });
        },

        // GET todos
        getTodos: function () {
            fetch(url + "/todos").then((response) => {
                response.json().then((data) => {
                    this.todos = data;

                    // removes the T00:00:000Z from the deadline
                    this.todos.forEach((todo) => {
                        todo.deadline = todo.deadline.split("T")[0];
                    })
                    
                });
            });
        },

        // PUT todo
        putTodo: function (todo_object) {
            // Get list of tag strings
            let listOfTags = [];
            this.usableTags.forEach((tag, index) => {
                if (this.editingTags[index]) {
                    listOfTags.push(tag);
                }
            });

            // update todoCopy.tags to list of strings
            //      ex. ["school", "home", ...]
            this.editingTodoCopy.tags = [...listOfTags];

            // PUT request
            fetch(url + "/todo/" + todo_object._id, {
                method: "PUT",
                body: JSON.stringify(this.editingTodoCopy),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                response.json().then((updated_todo) => {
                    // created_todo._id -> newly posted todo
                    this.newTodoId = updated_todo._id;
                    this.getTodos();
                });
            });

            // clear editingTodo
            this.editTodo({}, -1);
        },

        // DELETE todo
        deleteTodo: function (todo_object) {
            fetch(url + "/todo/" + todo_object._id, {
                method: "DELETE",
            }).then(response => {
                response.json().then(deleted_todo => {
                    console.log(deleted_todo);
                    this.getTodos();
                });
            });
        }

    },
    created: function () {
        this.getTodos();

        fetch(url + "/tags").then((response) => {
            response.json().then((data) => {
                this.usableTags = data;
                this.resetTagInputs();
            });
        });
    }
});