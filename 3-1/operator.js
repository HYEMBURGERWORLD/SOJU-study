"use strict";

// * 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 


""""
1+2 = ${1 + 2}`); // 공백도 모두 출력된다.
console.log("burger's \n\tbook");
// single quote : \'
// 줄바꿈 : \n
// 탭 : \t

// * 2. Numeric operators (연산자)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation -> 2의 3승

// * 3. Increment and decrement operators (++, --)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// * 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// * 5. Comparison operators (비교연산자)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// * 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// * || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || cehck()}`); // true
// or -> true 가 한 번 나오면 끝나버린다. (뒤는 안나온다 !!)
// simple한 애들을 먼저 확인하도록 하는 게 효율적인 코드 작성방법.

// * && (and), finds the first falsy value
// 한 번이라도 false를 만나면 거기서 멈춘다.
console.log(`and: ${value1 && value2 && cehck()}`); // false
// 마찬가지로 복잡한 것일수록 뒤에 배치하는 게 효율적인 작성법.

// often used to compress log if-statement
// nullalbeObject && nullableObject.something
// object가 null(false)이 아닐 경우에만 something을 받아오게 된다.
if (nullableObject != null) {
  nullableObject.something;
}

function cehck() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("🎉");
  }
  return true;
}

// * ! (not) 값을 반대로 바꿔준다.
console.log(!value1); // true;

// * 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사한다)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
// burger1, burger2는 같은 값을 담고 있으니 같은 object라고 생각할 수 있지만 그렇지 않다.
// 각각의 object를 가리키고 있는 reference value가 다르기 때문이다.
// 하지만 burger3 의 경우 burger1 을 가리키는 reference를 할당되었으므로 같다고 할 수 있다.
const burger1 = { name: "burger" };
const burger2 = { name: "burger" };
const burger3 = burger1;

console.log(burger1 == burger2); // false
console.log(burger1 === burger2); // false
console.log(burger1 === burger3); // true

// ! equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false (not boolean)
console.log("" == false); // true
console.log("" === false); // false (not boolean)
console.log(null == undefined); // true
console.log(null === undefined); // false

// * 8. Conditinal operators: if
// if, else if, else
const name = "burger";
if (name === "burger") {
  console.log("Welcome, Burger!");
} else if (name === "hyem") {
  console.log("Oh, hyem");
} else {
  console.log("unknown");
}

// * 9. Ternary operator: ? (if문을 간단하게 써보자)
// ㅊondition ? value1 : value2;
console.log(name === "burger" ? "yes" : "no");
// 코드의 가독성이 떨어지므로 간단할 때만 사용하자.

// * 10. Switch Statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// * 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`While: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 먼저 실행하고 출력 후 검사
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nasted loops 이중for문
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// ! break, continue
// break : 끝낸다.
// continue : 지금것 스킵, 다음으로 넘어간다

// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
