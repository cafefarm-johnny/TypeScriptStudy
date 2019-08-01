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
var TempClass = /** @class */ (function () {
    function TempClass(prod, id, item) {
        this.prod = prod;
        this.id = id;
        this.item = item;
        this.product = prod;
        this.itemID = item;
        this.ID = id;
    }
    return TempClass;
}());
var classArray = [];
var a = [
    { product: "123", ID: "abc" },
    { product: "456", ID: "efg" }
];
var b = [
    { product: "123", itemID: "itemID A" },
    { product: "456", itemID: "itemID B" }
];
if (a.length === b.length) {
    for (var i = 0; i < a.length; i += 1) {
        if (a[i].product === b[i].product) {
            classArray.push(new TempClass(a[i].product, a[i].ID, b[i].itemID));
        }
    }
}
classArray.forEach(function (item) {
    console.log('classArray : ', item);
});
