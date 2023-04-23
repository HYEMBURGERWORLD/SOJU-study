"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and / or functinality.
// Nearly all objects in javaScript are instances of Object
// Object = { key: value };
// key : 우리가 접근할 수 있는 변수 (property)
// value : property가 가지고 있는 값

// * 1. Literals and properties
const obj1 = {}; // object literal syntax
const obj2 = new Object(); // object constructor syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const burger = { name: "burger", age: 5 };
print(burger);

// With JavaScript magic 🧙‍♀️ dynamically typed language
// can add properties later!
// 뒤늦게 추가 / 삭제 도 가능하다 -> 유지보수 어려워짐, 에러 발생 가능성 업
burger.hasJob = true;
console.log(burger.hasJob);

delete burger.hasJob;
console.log(burger.hasJob); // undefined

// * 2. Computed properties (계산된 properties)
// key should be always string
console.log(burger.name); // 접근 방식1 보통 이쪽이 맞다.
console.log(burger["name"]); // 접근 방식2 정확하게 어떤 key가 필요할 지 모를 때 사용.
burger["hasJob"] = true;
console.log(burger.hasJob); // true

// 예
function printValue(obj, key) {
  // 코딩을 하고 있는 이 시점에서는 어떤 key가 올 지 모르는 상태. (사용자에게 받아야하므로)
  console.log(obj[key]);
}
// key는 무조건 string으로 전달.
printValue(burger, "name"); // object.key -> undefined || object[key] -> burger 출력

// * 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("burger", 48);
console.log(person4);

// * 4. Constructor Function
// 순수하게 object를 생성하는 함수들은 대문자로 시작하게 만든다
function Person(name, age) {
  // return {
  //   key와 value의 이름이 동일하다면 생략 가능
  //   name,
  //   age,
  // };

  // class에서처럼 this를 사용해서 호출
  this.name = name;
  this.age = age;
  // return this;
}

// * 5. in operator: property existence check (key in obj) obj 안에 key 가 있는지 없는지 확인
console.log("name" in burger); // true
console.log("random" in burger); // false
console.log(burger.random); // undefined

// * 6. for .. in VS for .. of
// for (key in obj)
console.clear();
for (let key in burger) {
  console.log(key); // 모든 key 출력
}

// for (value of iterable) -> iterable한 객체에 사용
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// * 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ... ])
const user = { name: "burger", age: "71" };
const user2 = user;
user2.name = "coder";
console.log(user); // 같은 reference 를 가리키고 있으므로 변경된다.

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
const user5 = Object.assign({}, user);
console.log(user4); // 복사된 user 출력

// ? another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 값은 덮어쓰기
console.log(mixed.color); // blue
console.log(mixed.size); // big
