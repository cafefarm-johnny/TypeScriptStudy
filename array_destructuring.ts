// 배열 비 구조화
let input = [1, 2];
let [first, second] = input; // 구조화된 배열을 비구조화하여 할당
console.log(first);
console.log(second);

// 변수 교환
[first, second] = [second, first];
console.log(first);
console.log(second);

// 함수에 대한 매개 변수가 있는 경우
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

f([1,2]);


// 확산 연산자 (spread)
let [third, ...rest] = [1, 2, 3, 4];
console.log(third);
console.log(rest);