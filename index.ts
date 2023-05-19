interface IUserFormat {
  userFormat: () => string;
}

class User implements IUserFormat {
  constructor(private fullName: string, private age: number) {}

  userFormat = () => {
    return `fullName : ${this.fullName}, age: ${this.age}`;
  };
}

let user = new User("Abhishek", 21);

console.log(user.userFormat());
