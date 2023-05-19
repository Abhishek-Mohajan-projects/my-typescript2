// const showTodos = (todos: string[] | string) => {
//   if (typeof todos === "object") {
//     todos.map((todo) => console.log(todo));
//   } else if (typeof todos === "string") {
//     console.log(todos);
//   }
// };

// const todos = ["todo1", "todo2"];
// showTodos(todos);

const showTodos = (todos: string[] | null) => {
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("no todos");
  }
};

const todos = ["todo1", "todo2"];
showTodos(null);
