// 타입
function greeter(person) {
    return "Hello, " + person;
}
// function greeter() {
//     return "Hello, " + person;
// }
var user = "Johnny";
// const user = [0, 1, 2];
console.log(greeter(user));
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userObj = {
    firstName: "Johnny",
    lastName: "Uhm"
};
console.log(greeter2(userObj));
// 클래스
var Student = /** @class */ (function () {
    function Student(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userClass = new Student("Johnny", "C.", "Uhm");
console.log(greeter3(userClass));
