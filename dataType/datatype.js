// 데이터 타입
// boolean
var isDone = false;
console.log(isDone);
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// string
var color = "blue";
color = 'red';
console.log(color);
var fullName = "Johnny Uhm";
var age = 26;
var sentence = "Hello, my name is " + fullName + ". \nI'll be " + (age + 1) + " years old after 5 month.";
console.log(sentence);
// array
var list = [1, 2, 3];
console.log(list);
list.push(4);
console.log(list);
var listGeneric = [1, 2, 3];
console.log(listGeneric);
// tuple
var x; // 튜플 타입 선언
x = ['hello', 10]; // 초기화
// x= [10, 'hello']; // 부정확한 초기화 - 명시한 타입 순으로 초기화하자.
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // number타입에 존재하지 않는 함수 호출을 하므로 오류를 발생시킴
x[0] = 'world'; // 새로운 요소를 추가는 선언한 타입내의 값이면 할당이 가능하다. typeof x[3] === string | number ? x.push(x[3]) : throw error;
console.log(x.toString());
// x[1] = true; // 새로운 요소가 선언한 타입 내에 존재하지 않는다면 할당이 불가능하다.
// enum
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Jamong"] = 2] = "Jamong";
})(Fruit || (Fruit = {}));
var f = Fruit.Apple;
console.log(f);
// any 
var notSure = 4;
console.log(notSure);
notSure = '문자열일 수도 있습니다.';
console.log(notSure);
notSure = false;
console.log(notSure);
// void
function warnUser() {
    alert('This is my warning message');
}
var unusable = undefined; // void 타입의 변수 선언은 undefined 또는 null만 할당할 수 있다.
// 타입 단언 Type assertions
var someValue = 'String Data';
// let strLength: number = (<string>someValue).length;
var strLength = someValue.length;
console.log(strLength);
var arr = [0, 1, 2, 3];
arr.forEach(function (num) {
    console.log(num);
});
