"use strict";

// ! 변수
// * data type : number, string, boolean, null, undefined (+symbol) 작은단위의데이터
// 변수 이름 : 유의미한 이름을 정한다.

// 변수 선언 > 메모리에 변수를 위한 공간이 생김 > 값을 할당 > 공간에 값이 들어감
let number = 2;
let number2 = number;
console.log(number); // 2
console.log(number2); // 2 (copy)

// update
number2 = 3;
console.log(number); // 2
console.log(number2); // 3

// * object 한두가지 이상의 데이터들을 묶어둔 것 (위의 data type을 제외한 모든 것: 함수, 리스트 ... 등) 비교적큰데이터
// 각각의 key 마다 메모리 할당. 예 : name이라는 메모리 공간에 burger이 들어가 있다.
// 메모리 공간을 가리키는 주소(reference)가 변수에 할당된다.
let obj = {
  name: "burger",
  age: 71,
};
//  예 : 이 주소가 가리키고 있는 곳의 name 변수의 값을 찾는다.
console.log(obj.name); // burger

// 변수에 오브젝트 할당.
// obj2 라는 새로운 메모리 공간 > 주소가 copy (값이 아니라 주소!!)
let obj2 = obj;
console.log(obj2.name); // burger

obj.name = "James";
console.log(obj.name); // James
console.log(obj2.name); // James

let a = 2;
a = 3;
a = 5;
// 맘껏 바꿀 수 있다!

const num = 3;
//num = 4; // 불가능
// const object의 경우 값이 아니라 주소가 들어가 있는데 주소가 가리키고 있는 오브젝트는 어딘가 따로 저장되어 있다. 그러므로 주소자체를 바꾸는 건 불가능하지만 따로 저장되어 있는 오브젝트의 내용은 변경할 수 있다.

console.clear();
console.log("------------------------------------------------------------------");

// ! 함수
// 반복해서 사용하는, 수행하는 로직이 있다면 함수로 만들어서 계속해서 재사용할 수 있다.
const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log(result);

// * 정의
// 이 코드블럭의 이름을 지정 (add)
function add(a, b) {
  // 정의한 기능을 수행하는 코드블럭
  return a + b;
}
// ? 함수 = 오브젝트 !! 함수이름(like 변수) 함수가 정의된 곳을 가리키고 있는 reference가 들어있다

function print() {
  console.log("print");
}

print(9, 291, 392, 3); // 아무리 많은 input을 주어도 받지 않는다.

// * 호출
const sum = add(2, 3); // return 된 5가 sum 이라는 변수에 할당.
console.log(sum);

// * 함수를 다른 변수에 할당
const doSomething = add;
// -> doSomething이라는 변수 공간 > add 가 가리키고 있는 reference copy 할당
console.log(doSomething); // -> add 정의 내용 자체가 출력된다.

const answer = doSomething(7, 1);
console.log(answer);

// * 함수를 다른 함수의 인자로 전달
function divide(a, b) {
  return a / b;
}
function surprise(operator) {
  const result = operator(100, 200); // 받아온 operator를 실행 () > 리턴값 result 변수에 할당
  console.log(result);
}

surprise(add);
// add 가 가리키고 있는 reference를 인자로 할당 > operator >> add ref >> oerator() >> add()
surprise(divide);

console.clear();
console.log("------------------------------------------------------------------");

// * 연산자

// ? false : 0, -0 (0은 무조건 false!), "", null, undefined (데이터가 없거나 비어있는 것들)
// ? true : -1 (어떤 숫자든 트루!), "hi~", [] (오브젝트이기 때문에)
let num3; //undefined
if (num3) {
  console.log("true!!");
} else {
  console.log("false");
}
// =
num3 && console.log(num3); // num3의 값이 있다면 뒤의 코드블럭이 실행된다
// ? 왜 이런 방법을 사용할까 : 유효하지 않은 코드 방지. 데이터가 없어서 에러발생, 프로그램 멈춤 방지

console.clear();
console.log("------------------------------------------------------------------");

// * 클래스 (다양한 오브젝트를 만들기 위한 청사진!)
// 생성이 되면 counter라는 변수가 있고 0부터 시작한다.
// Counter라는 클래스에는 자체적으로 counter라는 변수가 있고, 0으로 초기화된다.
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // class 내에서 함수 선언할 때는 function 안써도 된다
  increase() {
    this.counter++;
    console.log(this.counter);
    // 1번째 방법 if문 안에서 출력 console.log() (문제: 출력이 아니라 다른 방법으로 보여주고 싶다면? yo말고 다른 걸 출력하고 싶다면? -> 즉, 컨트롤할 수 없다)
    if (this.counter % 5 === 0) {
      // 2번째 방법 콜백함수 사용. (장점 : 원하는 기능 추가 변경 등 손쉬움.)
      // runIf5Times(this.counter);
      this.callback && this.callback(this.counter); // undefined가 아닐 때 실행
    }
  }
}

// constructor 실행 > counter = 0 초기화
function printSomething(num) {
  console.log(`wow! ${num}`);
}

function alertNum(num) {
  alert(num);
}

// class 에 원하는 콜백함수를 전달하는 방법
const coolCounter = new Counter(printSomething);
// ? 만약 클래스를 생성할 때 콜백함수를 전달하지 않는다면 (undefined) -> TypeError!

// ! 하나의 클래스로 다양한 오브젝트를 만들어서 서로 다른 기능을 수행하는 오브젝트를 만들 수 있다 -> 재사용률이 높아진다!
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

coolCounter.increase(); //1
coolCounter.increase(); //2
coolCounter.increase(); //3
coolCounter.increase(); //4
coolCounter.increase(); //5 > 출력
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(); // alert 10
