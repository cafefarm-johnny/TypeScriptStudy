function f(_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
}
f({ a: 'a', b: 6 });
f({ a: 'aa' });
// 타입 추론 방식
function f2(_a) {
    var _b = _a === void 0 ? { a: '', b: 0 } : _a, a = _b.a, b = _b.b;
    console.log(a);
    console.log(b);
}
f2({ a: 'a', b: 6 });
// 비구조화 프로퍼티에 대한 선택적인 프로퍼티를 기본값으로 지정
function f3(_a) {
    var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a);
    console.log(b);
}
f3({ a: 'yes' });
f3();
// f3({}); // Arguemnt of type '{}' is not assignable to parameter of type '{ a: string; b?: number; }'.
