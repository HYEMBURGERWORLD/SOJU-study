// * async & await
// clear style of using promise :D~~
// 무조건적으로 이걸로 해야한다는 게 XXXX

// * 1. async
async function fetchUser() {
  //return new Promise((resolve, reject) => {
  // do network request in 10 secs ...
  // 오래걸리는 함수 등을 비동기적으로 처리하지 않으면 로딩에 너무 오랜 시간이 걸리게 된다!!
  // resolve("burger");
  //});

  return "burger"; // async 덕분에 바로 promise로 만들어진다 !
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// * 2. await
// 함수 안에서만 사용 가능
// 딜레이가 끝날 때까지 기다려준다 !
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(3000);
  return "🍌";
}

// 체이닝의 경우 :
// function getBanana() {
//   return delay(3000)
//   .then(()=>"🍌");
// }

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana(); // promise 만들어서 동기화 -> promise가 만들어지자마자 바로 실행되므로 -> 하나씩 실행되는게 아니라 병렬적 실행
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// * 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) // ? all : 병렬적으로 promise 다 모일때까지 기다림
    .then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
  // ? race : 제일 먼저 전달되는 데이터를 출력
}
pickOnlyOne().then(console.log);
