// * 1. use strict
// added in ES5
// use this for Vanila Javascript
// 선언하지도 않은 변수에 값을 할당 한다든지 ... 비상식적인 상황을 방지한다.
"use strict";

// * 2. Variable, rw(read/write)
// let (added in ES6)

// 전역변수Global Scope : 어느곳에서나 이 변수에 접근할 수 있다. (블럭의 밖이든 안이든)
// 어플리케이션이 시작되는 순간부터 끝까지 메모리에 탑재되므로 최소화해서 사용하는 걸 지향.
let globalname = "global name";

{
  // Block Scope
  // 코드를 block 안에 작성. block 밖에서는 안의 코드를 볼 수 없다.
  let name = "burger";
  console.log(name);
  name = "hello~";
  console.log(name);
  console.log(globalname); // 전역변수
}
console.log(name); // block scope 안 변수이기 때문에 출력되지 않음.
console.log(globalname);

// * var (don't ever use this)
// var hoisting ? 어디에서 선언했는지 상관없이 제일 위로 선언을 끌어올려주는 것. move declaration from bottom to top
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);
// ** 최신기술을 사용할 때는 호환성 문제를 생각하자 (Can I use ... 사이트 이용)

// * 3. Constant (immutable type data)
// read only
// use const whenever possible
// only use if variable needs to change. 계속 바뀌어야할 이유가 없다면 웬만하서는 const로 작성하는 게 더 좋은 습관!
// 값이 절대로 바뀌지 않는다 !

const daysInWeek = 7;
const maxNumber = 5;

// * Note
// Immutalbe data tupes : primitive types, frozen objects (i.e. object.freeze())
// 예) "hello" -> 통째로 메모리에 올렸다가 다른 string으로 변경이 가능. hello 라는 글자들 중 하나만 변경하기 이런 데이터자체 변경 불가능.
// Mutalbe data types: all objects by default are mutable in JS
// favor immutabledata type always for a few reason :
// - security
// - thread security
// - reduce human mistakes

// * 4. Variable Types
// primitive, single item : number, string, boolean, null, undefined, symbol ... (값 자체가 메모리에 저장)
// object, box container (크기가 커서 한 번에 저장 불가능! object가 담겨있는 메모리를 가리키는 reference가 메모리에 저장됨.)
// ---> 메모리의 값이 primitive냐 object냐에 따라 다른 방식으로 저장된다.

// function, first-class function
// first-class function ? 함수를 변수에 할당 가능,함수의 인자(파라미터)로 함수 전달 가능,함수의 return 타입으로 함수 return 가능

// * Number
const count = 17; // Integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// special numeric values :infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "숫자가아님" / 2;
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN = Not a Number

// bigInt
const bigInt = 1480392850974587203948109384n; //over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// * string
const char = "c";
const brendan = "brandan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBd = `hi ${brendan}!!`; //template literals(string) 백틱기호를 사용한다.
console.log(`value: ${helloBd}, type: ${typeof helloBd}`);

// * boolean
// false : 0, null, undefined, NaN, ""
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// * null : = empty. 명백하게 비어있음, 아무것도 아니다 라는 의미
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// * undefined : 선언은 되었으나 값이 지정되어 있지 않다.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// * Symbol, create unique identifiers for objects
// 동시다발적으로 우선순위를 주고 싶을 때 정말 고유한 식별자가 필요할 때 쓴다.
// 동일한 스트링을 작성했어도 다른 심볼로 설정되므로 고유한 식별자를 위해 사용한다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true

// 주의 : symbole를 출력할 때 꼭 .description 을 사용하여 string으로 변경해주어야 한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// * Object, real-life Object, data structure
const burger = { name: burger, age: 47 };
// -> const 로 선언한 변수이기 때문에 object 자체를 변경할 수는 없다. (다른 object로 변경할 수 없다!)
// -> 하지만 object 안의 변수는 변경 가능하다.

burger.name = "ham";
burger.age = 68;

// * 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // String
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // Number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // String
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // Number
console.log(text.charAt(0)); // Error ! -> 이런 일이 많이 생겼기 때문에 생겨난 TypeScript
