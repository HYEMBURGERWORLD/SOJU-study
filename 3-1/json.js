// JSON은 무엇인지
// 자바스크립트에서 어떻게 활용할 수 있는지

// HTTP : 브라우저 위에서 동작하고 있는 웹사이트, 웹 어플래케이션 같은 Client 들이 아땋게 Server 와 통신할 수있는지를 정의한 것
// 어떻게 이 Hyper Text 를 서로 주고받을 수 있는지를 규약한 프로토콜의 한 종류!
// HTTP는 클라이언트가 서버에게 데이터를 요청(request)할 수 있고 Server는 클라이언트가 요청한 것에 따라 그에 맞는 응답(response)을 보내줌.
// Hyper Text 는 링크 뿐만아니라 웹사이트에서 쓰여지고 있는 문서, 이미지파일들을 모두 아우르는 의미로 쓰임.

// AJAX : Asynchronous JavaScript And XML
// 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 의미. (대표적인 예 : XHP-XMLHttpRequest object > 간단하게 서버에게 데이터를 요청하고 받아올 수 있음.)
// 최근 브라우저 API에 추가된 fetch() API 를 사용하면 간편하게 데이터를 주고 받을 수 있음.

// XML : HTML 과 같은 마크업 언어 중 하나. 태그들을 이용해서 데이터를 나타냄.
// XMLHttpRequest 이름을 보면 ... XML 파일만 가능할까? NO!!! 서버와 데이터를 주고받을 때에는 다양한 파일 포맷을 전달받을 수 있지만 JSON이 많이 쓰이는 추세.
// XML -> 불필요한 태그가 많아 가독성이 좋지 않음. -> 그래서 이 자리를 JSON을 대신해 많이 사용되는 추세!

// JSON : JavaScript Object Notation
// 자바스크립트 오브젝트와 관련된 파일이라는 걸 알 수 있다~! (JS object와 마찬가지로 key: value의 형태를 사용한다)
// 브라우저 뿐만 아니라 모바일에서 서버와 데이터를 주고 받을 때, 서버와 통신을 하지 않아도 오브젝트를 파일 시스템에 저장할 때도 많이 이용한다.
// - simplest data interchange format (데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷)
// - lightweight text-based structure (텍스트를 기반으로 해 가볍다)
// - easy to read (읽기 편하다)
// - key-value pairs (키와 밸류 쌍으로 이루어짐)
// - used for serialization and transmission of data between the network the network connection (데이터를 보통 서버와 주고 받을 때 직렬화를 할 때, 데이터를 전송할 때 쓴다.)
// ? 직렬화란 다른 환경으로 전달하기 위해 어떠한 정해진 포맷으로 변환하는 과정을 말한다.
// - independent programming language and platform (프로그래밍 언어나 플랫폼에 상관없이 사용할 수 있다!!)

// 오브젝트를 서버로 전송할 때에는 키-밸류를 스트링 타입으로 변환해서 서버에 전송.
// 서버에서 받아올 때도 마찬가지로 스트링 타입으로 받아와서 -> 오브젝트로 변환

// * 1. 오브젝트를 어떻게 직렬화하여 JSON으로 변환할 것인가
// * 2. 직렬화된 JSON을 어떻게 오브젝트로 되돌릴 것인지

// -------------------------------------------------------

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true
// ? 팁! 오버로딩이란? 함수의 이름은 동일하지만 어떤 파라미터를 전달하는지에 따라 각각 다른 방식으로 호출할 수 있는 것

json = JSON.stringify(["apple", "banana"]); // ["apple","banana"]
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2023-04-24T10:14:56.465Z"}
// ! 주의 : object에 있는 데이터가 아닌 것(예:함수), js만 있는 특별한 데이터(예:심볼)는 JSON에 포함되지 않는다.

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); // {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key} value:${value}`);
  return key === "name" ? "burger" : value; // 만약 key가 name인 경우 burger로 변경 아니면 그대로 value 출력
});
console.log(json);

console.clear();
// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
// console.log(json); // 오브젝트가 스트링화 되어서 전달되어져있다. (예: Date)
const obj = JSON.parse(json, (key, value) => {
  // console.log(`key:${key} value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// ! obj.jump(); // Error. 함수는 직렬화 당시 포함되어 있지 않았으므로

console.log(rabbit.birthDate.getDate());
// ! console.log(obj.birthDate.getDate()); // Error. 오브젝트 -> 스트링화 -> 오브젝트(스트링형태로 전달)
// 콜백함수 수정 후
console.log(obj.birthDate.getDate()); // 나온다!
