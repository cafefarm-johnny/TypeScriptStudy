// 클래스
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(greeter.greet());
// 상속 (Inheritance)
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('F! F!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
class Animal2 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal2 {
    constructor(name) {
        super(name); // 수퍼클래스(부모 클래스 Animal2)에게 전달하여 부모의 생성자를 실행시킨다.
        // 이는 수퍼클래스(Animal2)를 확장하는 서브클래스(Snake)에서 부모 클래스의 this에 있는 프로퍼티에 접근하기 위해서는 항상 super()를 호출해야 한다.
    }
    move(distanceInMeters = 5) {
        console.log('Slithering ...');
        super.move(distanceInMeters); // 수퍼클래스의 move에게 인자를 전달하여 부모의 함수를 실행시킨다.
    }
}
class Horse extends Animal2 {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping ...');
        super.move(distanceInMeters);
    }
}
let snake = new Snake('Snake the Python');
let horse = new Horse('Horse the Palomino');
snake.move();
horse.move(60); // hourse는 Animal2 타입이지만 Hourse에서 move()를 오버라이드하여 구현하므로 호출할 수 있다. 자바와 같음.
// public, private, protected 지정자
// 1. 기본적인 public (public by default)
class Animal3 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// 2. private 이해하기 (Understanding private)
class Animal4 {
    constructor(theName, theLegs) {
        this.name = theName;
        this.legs = theLegs;
    }
}
// new Animal4('Cat').name; // 오류: 'name'은 private이다.
console.log(new Animal4('Cat', 4).legs); // public은 접근 가능
class Phone {
    constructor(theName) { this.name = theName; }
}
class IPhone extends Phone {
    constructor() { super('iPhone'); }
}
class Employee {
    constructor(theName) { this.name = theName; }
}
let phone = new Phone('Galaxy S2');
let iphone = new IPhone();
let employee = new Employee('Johnny');
phone = iphone; // IPhone 클래스는 Phone 클래스의 'private name: string'의 private 형태를 공유하기 때문에 호환된다.
// phone = employee; // 오류: Phone과 Employee는 호환되지 않는다. 'private name: string' 필드가 있지만 Phone에서 선언된 것이 아니기 때문이다.
// 3. protected 이해하기 (Understanding protected)
class Person {
    constructor(name) { this.name = name; }
}
class Korean extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    getIntroduce() {
        return `Hello, my name is ${this.name} and I can use ${this.language}`;
    }
}
let johnny = new Korean('Johnny', 'korean');
console.log('johnny.getIntroduce() :', johnny.getIntroduce());
// console.log('johnny.name :', johnny.name); // 오류
class Book {
    constructor(name) { this.name = name; }
}
class NodeJSBook extends Book {
    constructor(name, price) {
        super(name);
        this.price = price;
    }
    getIntroduce() {
        return `This book is ${this.name} and price is ${this.price}.`;
    }
}
let nodeJS = new NodeJSBook('NodeJS Book', 34000);
// let learningJavascript = new Book('learning JavaScript'); // 오류: Book의 생성자는 protected다.
console.log('nodeJS.getIntroduce() :', nodeJS.getIntroduce());
// Readonly 지정자 (Readonly modifier)
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus('Man with the 8 strong legs');
console.log('dad.name :', dad.name);
// dad.name = 'Man with the 8 strong legs'; // 오류: name은 읽기전용이다.
// 매개변수 프로퍼티 (Parameter Properties)
class Tiger {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 4;
    } // 생성자에서 'readonly name: string' 매개 변수를 사용해 멤버 필드 name을 생성하고 초기화할 수 있다. (선언과 할당을 하나의 장소로 통합하기)
}
// 접근자 (Accessors)
// * 접근자 (getter, setter)를 사용할 경우 컴파일러 설정을 ECMAScript5 이상으로 지정해야한다. ex) tsc(ts-node)로 컴파일할 때 'tsc --target ES2015 dir/some.ts'로 해야한다.
let passcode = 'secret passcode';
class Employee2 {
    // get과 set을 가지는 접근자는 자동적으로 readonly 속성으로 추론된다.
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('오류: employee 무단 업데이트가 시도됨!');
        }
    }
}
let employee2 = new Employee2();
employee2.fullName = 'Johnny Uhm'; // set
if (employee2.fullName) {
    console.log('employee2.fullname :', employee2.fullName); // get
}
// 정적 프로퍼티 (Static Properties)
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log('grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }) :', grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log('grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }) :', grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// 추상 클래스 (Abstract Classes)
class Animal5 {
    constructor(distanceInMeter) {
        this.distanceInMeter = distanceInMeter;
    }
    move() {
        console.log(`roaming the earth ${this.distanceInMeter}m.`);
    }
}
class Lion extends Animal5 {
    constructor() { super(60); } // 파생된 클래스의 생성자는 super()를 호출해야한다.
    makeSound() {
        console.log('gwak!!! gwak!!!');
    }
    huntingFood() {
        console.log('killed the puma.');
    }
}
let animal5; // 좋아요: abstract 타입에 대한 참조를 만든다.
// animal5 = new Animal5(); // 오류: 추상 클래스는 인스턴스를 생성할 수 없다.
animal5 = new Lion(); // 좋아요: 추상적이지 않은 하위 클래스를 생성하고 할당한다.
animal5.move();
animal5.makeSound();
// animal5.huntingFood(); // 오류: abstract타입으로 선언된 메소드가 존재하지 않아 호출할 수 없다.
// 고급 기법 (Advanced Techniques)
// 생성자 함수 (Constructor functions)
// 1. 클래스의 인스턴스 타입
class Greeter2 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
let greeter2; // Greeter2 클래스의 인스턴스 타입으로 Greeter2를 사용한다.
greeter2 = new Greeter2("world"); // 인스턴스를 new 할 때 호출되는 함수
console.log('greeter2.greet() :', greeter2.greet());
// 위의 코드를 JavaScript로 변환하면 다음과 같다.
// let Greeter2 = (function () {
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//         return `Hello, ${this.greeting}`;
//     };
//     return Greeter2;
// })();
// let greeter2;
// greeter = new Greeter('world');
// console.log('greeter2.greet() :', greeter2.greet());
// 2. 클래스의 스태틱 타입
class Greeter3 {
    greet() {
        if (this.greeting) {
            return `Hello, ${this.greeting}`;
        }
        else {
            return Greeter3.standardGreeting;
        }
    }
}
Greeter3.standardGreeting = 'Hello, there';
let greeter3;
greeter3 = new Greeter3(); // 클래스를 인스턴스화하고 사용한다.
console.log('greeter3.greet() :', greeter3.greet());
let greeterMaker = Greeter3; // 인스턴스 타입이 아닌 Greeter 클래스 자체의 타입을 제공한다.(더 정확하게는 Greeter라는 symbol타입을 제공)
greeterMaker.standardGreeting = 'Hey, there!'; // 이 타입에는 Greeter 클래스의 인스턴스를 생성하는 생성자와 함께 모든 스태틱 멤버가 포함된다.
let greeter4 = new greeterMaker(); // Greeter의 새로운 인스턴스를 생성하고 이전과 같이 호출할 수 있음을 보여준다.
console.log('greeter4.greet() :', greeter4.greet());
// 클래스를 인터페이스로 사용하기 (Using a class as an interface)
class Point {
}
let point3d = { x: 1, y: 2, z: 3 };
console.log('point3d :', point3d);
