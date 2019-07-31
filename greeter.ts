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





// 데이터 타입
// boolean
const isDone: boolean = false;
console.log(isDone);

// number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// string
let color: string = "blue";
color = 'red';
console.log(color);

const fullName: string = `Johnny Uhm`;
let age: number = 26;
let sentence: string = `Hello, my name is ${ fullName }. 
I'll be ${ age + 1 } years old after 5 month.`;
console.log(sentence);

// array
const list: number[] = [1,2,3];
console.log(list);
list.push(4)
console.log(list);

const listGeneric: Array<number> = [1,2,3];
console.log(listGeneric);

// tuple
let x: [string, number]; // 튜플 타입 선언
x = ['hello', 10]; // 초기화
// x= [10, 'hello']; // 부정확한 초기화 - 명시한 타입 순으로 초기화하자.
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // number타입에 존재하지 않는 함수 호출을 하므로 오류를 발생시킴

x[0] = 'world'; // 새로운 요소를 추가는 선언한 타입내의 값이면 할당이 가능하다. typeof x[3] === string | number ? x.push(x[3]) : throw error;
console.log(x.toString());
// x[1] = true; // 새로운 요소가 선언한 타입 내에 존재하지 않는다면 할당이 불가능하다.

// enum
enum Fruit { Apple, Banana, Jamong }
let f: Fruit = Fruit.Apple;
console.log(f);

// any 
let notSure: any = 4;
console.log(notSure);
notSure = '문자열일 수도 있습니다.';
console.log(notSure);
notSure = false;
console.log(notSure);

// void
function warnUser(): void {
    alert('This is my warning message');
}

let unusable: void = undefined; // void 타입의 변수 선언은 undefined 또는 null만 할당할 수 있다.

// 타입 단언 Type assertions
let someValue: any = 'String Data';
// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
console.log(strLength);