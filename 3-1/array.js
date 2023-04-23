"use strict";

// 자료구조 : 비슷한 종류의 물건들을 한곳에 담아두는 것처럼, 비슷한 종류의 데이터들을 묶어서 한 곳에 정리해두는 것
// Object vs 자료구조 ?
// Object ->>> 토끼 : 동물, 귀가 두개, 먹는다, 뛴다 .. -> 서로 연관된 특징이나 행동을 묶어둔다
// 자료구조 ->>> 토끼'들' 당근'들'... 등 비슷한 타입의 object들을 묶어두는 것

// 자료구조 & 알고리즘 공부의 필요성 (검색, 삽입, 정렬, 삭제 -> 의 효율성)

// ! 배열 안에는 비슷한 타입의 데이터들을 묶도록 한다. (그러지 않아도 되지만 최대한 지양)

// * Array 🎉 First 자료구조!

// * 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// * 2. Index position 인덱스를 통해 배열에 어떻게 접근?
const fruits = ["🍎", "🍌"];
console.log(fruits); // ["🍎", "🍌"]
console.log(fruits.length); // 2
console.log(fruits[0]); // "🍎"
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 data 접근

// * 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let v of fruits) {
  console.log(v);
}
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// * 4. Addition, deletion, copy (추가, 삭제, 복사)
// push : add an item do the end
fruits.push("🍇", "🍓");
console.log(fruits); // ['🍎', '🍌', '🍇', '🍓']

// pop : remove an item from the end
fruits.pop();
console.log(fruits); // ['🍎', '🍌', '🍇']
fruits.pop();
console.log(fruits); // ['🍎', '🍌']

// unshift : add an item to the benigging
fruits.unshift("🥭", "🍉");
console.log(fruits); // ['🥭', '🍉', '🍎', '🍌']

// shift : remove an item from the benigging
fruits.shift();
console.log(fruits); //['🍉', '🍎', '🍌']

// ! note : shift, unshift are slower than pop, push
// ! why ? 밀고, 당기고 하는 작업들을 계속 반복해줘야 하기 때문이다. 가능하면 shift, unshift 보다는 pop, push 사용을 지향. (배열이 길면길수록 더더욱!!)

// splice : remove an item by index position
fruits.push("🍒", "🥝", "🍊");
console.log(fruits);
fruits.splice(1, 1); // 딜리트카운트 지정안할 시 지정한 인덱스부터 모든 아이템 제거
console.log(fruits);
fruits.splice(1, 1, "🍇", "🍉"); // 지우고 나서 그 자리에 원하는 데이터 추가 (딜리트카운트가 0일 경우 지우지 않고 추가만 가능)
console.log(fruits);

// combine two arrays
const fruits2 = ["🥭", "🍎"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// * 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍉")); // 0 (없으면 -1)
console.log(fruits.includes("🍉")); // true (없으면 false)

// lastIndexOf
console.clear();
fruits.push("🍉");
console.log(fruits);
console.log(fruits.indexOf("🍉")); // 가장 처음
console.log(fruits.lastIndexOf("🍉")); // 가장 마지막
