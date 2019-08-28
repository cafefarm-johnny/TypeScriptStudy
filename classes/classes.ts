// 클래스
class Greeter {
    greeting: string;
    constructor(message: string) {
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
    move(distanceInMeters: number = 0) {
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
    name: string;
    constructor(theName: string) { 
        this.name = theName; 
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal2 {
    constructor(name: string) {
        super(name); // 수퍼클래스(부모 클래스 Animal2)에게 전달하여 부모의 생성자를 실행시킨다.
        // 이는 수퍼클래스(Animal2)를 확장하는 서브클래스(Snake)에서 부모 클래스의 this에 있는 프로퍼티에 접근하기 위해서는 항상 super()를 호출해야 한다.
    }
    move(distanceInMeters = 5) { // 메소드 오버라이딩
        console.log('Slithering ...');
        super.move(distanceInMeters); // 수퍼클래스의 move에게 인자를 전달하여 부모의 함수를 실행시킨다.
    }
}
class Horse extends Animal2 {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log('Galloping ...');
        super.move(distanceInMeters);
    }
}

let snake:Snake = new Snake('Snake the Python');
let horse:Animal2 = new Horse('Horse the Palomino');
snake.move();
horse.move(60); // hourse는 Animal2 타입이지만 Hourse에서 move()를 오버라이드하여 구현하므로 호출할 수 있다. 자바와 같음.
