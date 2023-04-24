"use strict";

// * Promise : 비동기를 간편하게 처리할 수 있도록 도와주는 JS 오브젝트!
// Promise is a javaScript object for Asynchronous operation.

// * State : pending -> fulfilled(완벽히 완료) or rejected(파일을 찾을 수 없거나 오류)
// * Producer vs Consumer

// * 1. Producer
// ! when new Promise is created, the executor runs automatically!!
// promise가 만들어지는 그 순간!! 네트워크 통신 시작. (사용자가 원할 떄 네트워크 통신을 해야하는 상황일 시 주의)
// Promise is class
const promise = new Promise((resolve, reject) => {
  // callback1 resolve : 최종 데이터 전달 (기능수행OK!)
  // callback2 reject : 기능수행 오류났을 때

  // * doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("burger");
    reject(new Error("no network T_T"));
  }, 2000);
});

// * 2. Consumers: then, catch, finally (이것들을 이용해 값을 받아올 수 있다)
promise
  .then((value) => {
    // 정상적으로 수행되었다면 resolve를 통해 전달한 값을 받아온다
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 무조건 호출됨.
    console.log("finally");
  });

// * 3. Promise chaining 연결하기! (다른 비동기적인 것들을 묶어서 처리할 수 있다.)
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// * 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() // 받아온 value를 바로 함수에 전달해준다 (한가지만 받아서 전달하는 경우)
  .then(getEgg) // 여기서 발생하는 오류를 처리하고 싶을 때는 바로 다음에 catch를 사용하여 핸들링.
  .catch((error) => {
    return "🥖"; // 대체재
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
