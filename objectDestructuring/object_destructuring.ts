// 객체 비구조화
let o = {
    a: 'foo', 
    b: 12, 
    c: 'bar', 
    d: 'descript', 
    e: 'element'
};
console.log(o);

let { a, b } = o;
console.log(a);
console.log(b);

({ a, b } = { a: 'baz', b: 101 });
console.log(a);
console.log(b);

let { c, ...passthrough } = o;
console.log(c);
console.log(passthrough);

// 객체 프로퍼티 이름 변경
let { a: newName1, b: newName2 } = o; // 여기서 콜론은 타입을 의미하는 콜론이 아니다.
console.log(newName1);
console.log(newName2);

// 형식을 지정하는 경우 전체 형식이 비구조화된 후에 형식을 작성해야한다.
let { d, e }: { d: string, e: string } = o;
console.log(d);
console.log(e);

// 기본 값
function keepWholeObject(wholeObject: { a: string, b?: number }) { // wholeObject 객체에 b가 있는지 없는지 모르는 경우 ?:(엘비스 연산자)를 사용한다.
    console.log('keepWholeObject :: wholeObject : ', wholeObject);
    let { a, b = 1001 } = wholeObject; // 속성 b가 없을 때 b를 선언하고 초기화할 수 있다.

    console.log('keepWholeObject :: a : ', a);
    console.log('keepWholeObject :: b : ', b);
}

keepWholeObject({ a });