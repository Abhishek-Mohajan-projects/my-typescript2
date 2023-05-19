// const showTodos = (todos: string[] | string) => {
//   if (typeof todos === "object") {
//     todos.map((todo) => console.log(todo));
//   } else if (typeof todos === "string") {
//     console.log(todos);
//   }
// };
// const todos = ["todo1", "todo2"];
// showTodos(todos);
var showTodos = function (todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos");
    }
};
var todos = ["todo1", "todo2"];
showTodos(null);
