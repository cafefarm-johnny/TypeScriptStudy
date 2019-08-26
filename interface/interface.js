// 인자 타입 체크하기
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObject = { size: 10, label: 'Size 10 Object' };
printLabel(myObject);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObject2 = { size: 10, label: 'Size 10 Object' };
printLabel2(myObject2);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        // newSquare.color = config.clr; // Property 'clr' does not exist on type 'SquareConfig'.ts(2339)
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // Cannot assign to 'x' because it is a read-only property.ts(2540)
var a = [1, 2, 3, 4];
var ro = a; // 읽기 전용 배열
// ro[0] = 12; // Index signature in type 'readonly number[]' only permits reading.ts(2542)
// ro.push(5); // Property 'push' does not exist on type 'readonly number[]'.ts(2339)
// ro.length = 100; // Cannot assign to 'length' because it is a read-only property.ts(2540)
// a = ro; // Cannot assign to 'length' because it is a read-only property.ts(2540)
a = ro; // 타입 단언(assertion)을 통해 오버라이딩은 가능하다.
function createRamen(recipe) {
    var newRamen = { men: false, water: 600 };
    if (recipe.men) {
        newRamen.men = recipe.men;
    }
    if (recipe.water) {
        newRamen.water = recipe.water;
    }
    return newRamen;
}
// let myRamen = createRamen({ soup: 30, egg: 1 } as RamenConfig); // 1. 타입 단언(type assertion)을 사용하여 프로퍼티 초과 검사를 회피하고 추가 프로퍼티를 사용한다
// let myRamen = createRamen({ soup: 30, egg: 1 });
var ramenCustomOption = { soup: 30, egg: 1 }; // 3. 객체를 다른 변수에 할당하여 인자로 넘기기
var myRamen = createRamen(ramenCustomOption);
console.log(myRamen);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('안녕하세요', '히히'));
