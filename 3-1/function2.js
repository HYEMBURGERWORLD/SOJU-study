// * 함수 선언
// * 1. 기능을 수행하고 끝.
function doSomething(add) {
  console.log(add);
  const result = add(43, 3); // 호출
  console.log(result);
}

// * 2. 계산 -> 특정 값을 전달.
function add(a, b) {
  const sum = a + b;
  return sum;
}

// * 함수 호출
// doSomething(add); // 전달! 먼저 호출하지 말자. 호출된 후 리턴값이 전달되므로 함수를 전달한다고 할 수 없다.
// 함수의 이름자체는 함수를 가리키는 함수 자체가 된다.
const result = add(2, 3);
console.log(result);

const addFun = add;
console.log(add); // 함수 자체
addFun(1, 2);
