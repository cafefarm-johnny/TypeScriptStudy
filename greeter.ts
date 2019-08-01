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







class TempClass {
    product: string; 
    ID: string;
    itemID: string;

    constructor(public prod: string, public id: string, public item: string) {
        this.product = prod;
        this.itemID = item;
        this.ID = id;
    }
}

let classArray: Array<{ product: string, ID: string, itemID: string }> = [];

const a: Array<{ product: string, ID: string }> = [
    { product: "123", ID: "abc" }, 
    { product: "456", ID: "efg" }
];
const b: Array<{ product: string, itemID: string }> = [
    { product: "123", itemID: "itemID A" }, 
    { product: "456", itemID: "itemID B" }
];

if (a.length === b.length)
{
    for (let i: number = 0; i < a.length; i += 1)
    {
        if (a[i].product === b[i].product)
        {
            classArray.push(new TempClass(a[i].product, a[i].ID, b[i].itemID));
        }    
    }
}

classArray.forEach(item => {
    console.log('classArray : ', item);
});