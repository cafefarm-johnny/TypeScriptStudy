// 함수 선언에서 비구조화
type C = { a: string, b?: number };

function f({ a, b }: C): void { // f({ a, b }: { a: string, b?: number }): void {} 와 같다
    console.log(a);
    console.log(b);
}
f({ a: 'a', b: 6 });
f({ a: 'aa' });


// 타입 추론 방식
function f2({ a, b } = { a: '', b: 0 }): void {
    console.log(a);
    console.log(b);
}
f2({ a: 'a', b: 6 });

// 비구조화 프로퍼티에 대한 선택적인 프로퍼티를 기본값으로 지정
function f3({ a, b = 0 } = { a: '' }): void {
    console.log(a);
    console.log(b);
}

f3({ a: 'yes' });
f3();
// f3({}); // Arguemnt of type '{}' is not assignable to parameter of type '{ a: string; b?: number; }'.