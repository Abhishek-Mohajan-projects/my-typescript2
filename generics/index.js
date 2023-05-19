// function userInfo<X, Y>(userId: X, userName: Y) {
//   console.log(`id: ${userId}, name: ${userName}`);
// }
// userInfo("101", 122);
// arrow function-->
var userInfo = function (userId, userName) {
    console.log("id: ".concat(userId, ", name: ").concat(userName));
};
userInfo("101", "Abhishek");
