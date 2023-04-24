"use strict";

// *콜백이 무엇인지
// *어떤 경우에 어떻게 사용하면 안되는지!

// 비동기 프로그래밍이 무엇인지
// 어떻게 사용하는 게 좋은지.
// 현업에서는 어떻게 사용하는 게 더 맞는 방법인지

// * JavaScript is synchronous! (자바스크립트는 동기적이다.)
// ? 동기적*synchronous이란, 호이스팅이 실행된 후 작성한 코드에 맞춰서 정해진 순서대로 한줄씩 실행된다는 의미. (Excute the code block in order after hoisting)
// hoisting: var, function declaration 자동적으로 제일 위로 올려지는 현상
// 반대로, 비동기란 언제 코드가 실행될지 예측할 수 없는 것을 뜻한다. (예: setTimeout() API - 정해진 시간 후에 콜백함수 호출)

console.log("1");
setTimeout(() => console.log("2!! 1초 지났다!"), 1000);
// 1초가 지난 후에 이 함수를 다시 callback 해줘 !
console.log("3");

// ? 그렇다면 콜백함수는 언제나 비동기적인 상황일 때만 쓰일까? NO!!!!
// * Synchronous callback : 동기적 상황의 콜백함수
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hi"));

// * Asynchronous callback : 비동기적 상황의 콜백함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("비동기 콜백"), 2000);

// * 1. 모든 함수의 선언은 가장 위로 hoisting
// * 2. 선언 후 한줄씩 실행 (동기적 상황일 경우 바로 출력, 비동기적 상황일 경우 요청만 해둠)
// * 3. 원하는 조건이 충족되었을 때 콜백함수를 실행

//-----------------------------------------------------------

// * Callback Hell example (콜백지옥을 경험해보고 수정해보자!)
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === "burger" && password === "happy") || (id === "coder" && password === "power")) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "burger") {
        onSuccess({ name: "burger", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello!! ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
