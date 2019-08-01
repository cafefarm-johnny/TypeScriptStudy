// 타입
function greeter(person: string) {
    return "Hello, " + person;
}

// function greeter() {
//     return "Hello, " + person;
// }

const user = "Johnny";
// const user = [0, 1, 2];

console.log(greeter(user));





// 인터페이스
interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const userObj = {
    firstName: "Johnny", 
    lastName: "Uhm"
};

console.log(greeter2(userObj));







// 클래스
class Student {
    fullName: string;

    constructor(public firstName: string, public middleInital: string, public lastName: string) {
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }

}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const userClass = new Student("Johnny", "C.", "Uhm");

console.log(greeter3(userClass));