// 인자 타입 체크하기
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObject = { size: 10, label: 'Size 10 Object' };
printLabel(myObject);



// 인터페이스를 이용하여 인자 타입 체크하기
interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObject2 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObject2);



// 선택적 프로퍼티
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };

    if (config.color)
    {
        newSquare.color = config.color;
        // newSquare.color = config.clr; // Property 'clr' does not exist on type 'SquareConfig'.ts(2339)
    }

    if (config.width) 
    {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: 'black' });

console.log(mySquare);



// 읽기 전용 프로퍼티 (Readonly properties)
// * 읽기 전용 프로퍼티는 객체의 속성에 사용한다. 객체의 const같은 느낌
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Cannot assign to 'x' because it is a read-only property.ts(2540)

let a: number[] = [1, 2, 3, 4]; 
let ro: ReadonlyArray<number> = a; // 읽기 전용 배열
// ro[0] = 12; // Index signature in type 'readonly number[]' only permits reading.ts(2542)
// ro.push(5); // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
// ro.length = 100; // Cannot assign to 'length' because it is a read-only property.ts(2540)
// a = ro; // Cannot assign to 'length' because it is a read-only property.ts(2540)
a = ro as number[]; // 타입 단언(assertion)을 통해 오버라이딩은 가능하다.



// 프로퍼티 초과 검사 (Excess Property Checks)
interface RamenConfig {
    men?: boolean; 
    water?: number; 
    [ propName: number ]: any; // 2. 문자열 인덱스 시그니처(string index signature) 활용하기
}

function createRamen(recipe: RamenConfig): { men: boolean; water: number } {
    let newRamen = { men: false, water: 600 };

    if (recipe.men)
    {
        newRamen.men = recipe.men;
    }

    if (recipe.water)
    {
        newRamen.water = recipe.water;
    }
    return newRamen;
}
// let myRamen = createRamen({ soup: 30, egg: 1 } as RamenConfig); // 1. 타입 단언(type assertion)을 사용하여 프로퍼티 초과 검사를 회피하고 추가 프로퍼티를 사용한다
// let myRamen = createRamen({ soup: 30, egg: 1 });
let ramenCustomOption = { soup: 30, egg: 1 }; // 3. 객체를 다른 변수에 할당하여 인자로 넘기기
let myRamen = createRamen(ramenCustomOption);

console.log(myRamen);



// 함수 타입 (Function Types)
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch('안녕하세요', '히히'));



// 인덱싱 가능 타입  (Indexable Types)
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Johnny', 'Uhm'];

let myStr: string = myArray[0];
console.log(myStr);

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // [x: number]: Animal; // Numeric index type 'Animal' is not assignable to string index type 'Dog'.ts(2413)
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    // [index: string]: string;
    length: number;
    // name: string; // name의 타입이 인덱서의 하위 타입이 아니다.
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ['Johnny', 'Uhm'];
// myArray2[2] = 'Mallory'; // Index signature in type 'ReadonlyStringArray' only permits reading.ts(2542)



// 클래스 타입 (Class Types)
// 1. 인터페이스 구현 (Implementing an interface)
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date; 
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

// 2. 클래스의 스태틱과 인스턴스의 차이점 (Difference between the static and instance sides of classes)
interface ClockConstructor {
    new (hour: number, minute: number);
}

// 스태틱 측면의 타입과 인스턴스 측면의 타입으로 인터페이스를 만들고 
// 이 인터페이스를 구현하는 클래스를 생성하려고 하면 오류가 발생한다.
// 그 이유는 클래스가 인터페이스를 구현할 때 클래스의 인스턴스 측면만 검사되기 때문이다.
// 생성자는 정적인 측면이고, 이 때문에 검사에 포함되지 않는다.
// class Clock2 implements ClockConstructor { 
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }

interface ClockConstructor2 {
    new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
    tick();
}

function createClock(ctor: ClockConstructor2, hour: number, minute: number): ClockInterface2 {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep beep');
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick tock');
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.log('digital: ', digital.tick());
console.log('analog: ', analog.tick());