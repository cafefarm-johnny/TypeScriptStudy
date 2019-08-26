var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
// 객체 비구조화
var o = {
    a: 'foo',
    b: 12,
    c: 'bar',
    d: 'descript',
    e: 'element'
};
console.log(o);
var a = o.a, b = o.b;
console.log(a);
console.log(b);
(_a = { a: 'baz', b: 101 }, a = _a.a, b = _a.b);
console.log(a);
console.log(b);
var c = o.c, passthrough = __rest(o, ["c"]);
console.log(c);
console.log(passthrough);
// 객체 프로퍼티 이름 변경
var newName1 = o.a, newName2 = o.b; // 여기서 콜론은 타입을 의미하는 콜론이 아니다.
console.log(newName1);
console.log(newName2);
// 형식을 지정하는 경우 전체 형식이 비구조화된 후에 형식을 작성해야한다.
var d = o.d, e = o.e;
console.log(d);
console.log(e);
// 기본 값
function keepWholeObject(wholeObject) {
    console.log('keepWholeObject :: wholeObject : ', wholeObject);
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a; // 속성 b가 없을 때 b를 선언하고 초기화할 수 있다.
    console.log('keepWholeObject :: a : ', a);
    console.log('keepWholeObject :: b : ', b);
}
keepWholeObject({ a: a });
