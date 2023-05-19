var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.userFormat = function () {
            return "fullName : ".concat(_this.fullName, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Abhishek", 21);
console.log(user.userFormat());
