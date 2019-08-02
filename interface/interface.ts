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
    }

    if (config.width) 
    {
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({ color: 'black' });

console.log(mySquare);