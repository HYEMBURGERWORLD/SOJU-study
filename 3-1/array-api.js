"use strict";

// Q1. make a string out of an array (array 를 string)
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an orray out of a string (string 을 array)
{
  const fruits = "🍎, 🍉, 🍇,🥭";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);

  console.log(array); // 원본 자체를 변경시킨다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // array.splice(0, 2); // 삭제한 값들이 return 된다.
  // console.log(array);

  const result = array.slice(2, 5); // 배열 자체 변경되지 않음. 원하는 부분만 가져오고 싶을 때 사용
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // students.forEach((student) => {
  //   student.score === 90 ? console.log(student) : 0;
  // });

  const result = students.find((student) => student.score === 90); // 요소요소마다 돌기 시작 > score 90일 때 true 상태 > 해당 값이 return되고 멈춤
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((item) => item.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students score
// result should be: [45, 80, 90, 66, 88]
{
  // student.score로 값을 대체해서 나옴
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if ther is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // return boolean. 하나라도 조건에 만족하는 값이 있다면 true
  console.log(result);

  const result2 = students.every((student) => student.score >= 50); // +) 조건이 모~두 충족되어야 true 리턴.
}

// Q9. compute students average score
{
  // 누적된 값을 전달
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
    // curr.score 는 다음에 호출될 때 prev 값이 된다.
    // curr 은 순차적 배열 아이템

    // students.reduce((prev, curr) => prev + curr.score);
  }, 0); // 0은 내가 원하는 시작점
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be '45,80,90,66,88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus!! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
