// function userInfo<X, Y>(userId: X, userName: Y) {
//   console.log(`id: ${userId}, name: ${userName}`);
// }
// userInfo("101", 122);

// arrow function-->

const userInfo = <X, Y>(userId: X, userName: Y) => {
  console.log(`id: ${userId}, name: ${userName}`);
};
userInfo("101", "Abhishek");
