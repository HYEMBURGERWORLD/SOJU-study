"use strict";
// class = 틀 이라고 생각하자.
// 설명하기 윙해 필요한 데이터가 들어가면 object가 된다.

// Object-iruendted programming
// class: template
// object: instance of a class (class를 이용하여 데이터를 넣어 만드는 게 object)
// JavaScript classes
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance (기존에 존재하던 프로토타입을 베이스로 만들어진~)

// * 1. Class declarations (클래스선언)
class Person {
  // constructor 생성자
  constructor(name, age) {
    // fields
    // 전달된 데이터 바로 할당
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!!`);
  }
}

const burger = new Person("burger", 72);
console.log(burger.name);
console.log(burger.age);
burger.speak();

// * 2. Getter and setters (강의 다시 이해)
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // 말도 안되는 상황을 위해 !
  // get 을 사용해 return
  get age() {
    return this._age;
  }

  // set 값 설정
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // -1살? 말이 안된다!

// * 3. Fields (public, private)
class Experiment {
  publicField = 2; // 외부 접근 가능
  #privateField = 0; // class 내부에서만 접근, 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// * 4. Static properties and methods (다시이해...)
// 새로운 오브젝트를 만들때마다 복제 -> 값만 변경
// 데이터에 상관없이 클래스가 가진 고유한 값, 동일하게 사용되는 메소드 -> 클래스에 붙어있게 하는 static !!
// 공통적으로 class에서 쓸 수 있는 경우 사용 한다.
class Article {
  static publisher = "HYEMMBURGER";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //undefined
Article.printPublisher(); // static 은 class 에 붙어있기 때문에

// * 5. Inheritance 상속 & 다양성
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!!`);
  }

  getArea() {
    return width * this.height;
  }
}

// 자동적으로 Shape이 Rectangle에 포함됨
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 draw가 출력
    console.log("🔺");
  }

  getArea() {
    return (width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// * 6. Class checking: instanceOf
// 왼쪽이 오른쪽의 클래스로 만들어졌는지 아닌지 확인(boolean)
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true (모든 object, class들은 Object를 상속)
// 공통적으로 존재하는 메서드를 사용할 수 있다. ex. Object.toString()을 쓸 수 있따 ... 등등
