"use strict";

// * Function
// - fundamental building block in the program (프로그램을 구성하는 기본적인 빌딩 블럭)
// - subprogram can be used multiple times (서브프로그램으로도 불리며 여러번 재사용 가능)
// - performs a task or calculates a value (한가지 task나 어떤 값을 계산하기 위해 쓰여짐)

// * 1. Function declaration (Function 정의하는 법)
// function name(param1, param2) { body... return; }
// one function === one thing 하나의 함수는 한 가지의 일만 하도록 만든다.
// naming : doSomething, command, verb 동작하는 것이기 때문에 동사 형태로 지정한다.
// e.g. createCardAndPoint -> createCard, createPoint 함수만들때 고민해보기
// ! function is object in JS (-> 그렇기 때문에 변수 할당, 파라미터 전달, 함수 return 가능)
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello!!");
log(1234);
// 타입이 중요한 경우에는 조금 난해할 수도 있다.
// 함수만 봤을 때 어떤 타입의 값을 전달해야 올바른지 알 수 없기 때문이다.
// TS의 경우, 파라미터나 리턴값에 타입을 명시하도록 한다! ex ) function log(message: string):number{...}

// * 2. Oaraneters
// premitive parameters : passed by value (value 전달)
// object parameters : passed by reference (reference 전달)
function changeName(obj) {
  obj.name = "coder";
}
const burger = { name: "burger" };
changeName(burger);
console.log(burger);

// * 3. Default parameters (added in ES6)
// 전달되지 않은 파라미터의 값은 undefined로 출력된다.
// 파라미터에 default 값을 추가할 수 있다.
function showMessage(message, from = "unknown") {
  console.log(`${message} by${from}`);
}
showMessage("hi!");

// * 4. Rest parameters (added in ES6)
// ...파라미터 -> 배열 형태로 전달되어진다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("Love", "Ham", "BURGER!");

// * 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다!
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello!";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    // 부모의 값은 볼 수 있고 접근할 수 있지만, 자식(안)에서 정의된 변수는 확인할 수 없다. (= 클로저)
    console.log(message);
    let childMessage = "hello!?";
  }
  // return 값이 생략된 함수는 return undefined; 가 생략되어 있다.
}
printMessage();

// * 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// * 7. Early return, early exit ... (현업에서의 코드 지적!)
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic ...
  }
}

// good!
// 조건이 맞지 않을 때는 빨리 종료!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // log upgrade logic ...
}

// * 8. First-class function
// Functions are treated like any other variable (다른 변수와 마찬가지로 변수에 할당된다)
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function  (리턴값 전달 가능)

// ? 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted 호이스팅된다)
// a function expression is created when the execution reaches it.
// 변수를 선언함과 동시에 함수를 할당하고 있다.
const print = function () {
  // annoymous function
  console.log("print");
};
print(); // 변수에 할당한 함수 호출
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// ? 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // ! 함수를 파라미터로 전달
  // -> 함수를 전달해서 상황에 맞을 때 전달된 함수를 불러~! 라고 전달하는 것 = 콜백함수Callback Function
  if (answer === "love u") {
    printYes();
  } else {
    printNo();
  }
}

// * annoymous function
const printYes = function () {
  console.log("Yes");
};

// * named function
// better debugging in debugger's stack traces -> 디버깅시 함수 이름이 나오게
// recursions (함수 안에서 함수 자신을 부르는 것)
const printNo = function print() {
  console.log("No");
  // print(); -> recursions
};

randomQuiz("NNNN", printYes, printNo);
randomQuiz("love u", printYes, printNo);

// * Arrow function
// always annoymous
const simplePrint = function () {
  console.log("simple~");
};

const moreSimplePrint = () => console.log("more SIMPLE!!!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// * IIFE: Immeditely Invoked Function Expression 선언과 함께 호출
(function hello() {
  console.log("IIFE");
})();

// QUIZ!!
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remaider":
      return a % b;
    default:
      throw Error("unknown command!");
  }
}

calculate("add", 2, 3);
