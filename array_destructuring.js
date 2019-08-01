var _a;
// 배열 비 구조화
var input = [1, 2];
var first = input[0], second = input[1]; // 구조화된 배열을 비구조화하여 할당
console.log(first);
console.log(second);
// 변수 교환
_a = [second, first], first = _a[0], second = _a[1];
console.log(first);
console.log(second);
// 함수에 대한 매개 변수가 있는 경우
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
// 확산 연산자 (spread)
var _b = [1, 2, 3, 4], third = _b[0], rest = _b.slice(1);
console.log(third);
console.log(rest);
