// const Hello = () => {
//    return <p>Hello</p>;
// };

import World from './World';
import styles from './Hello.module.css';

import { useState } from 'react';

export default function Hello() {
  function showName() {
    console.log('burger');
  }

  function showAge(age) {
    console.log(age);
  }

  // function showText(e) {
  //   console.log(e.target.value);
  // }

  // let name = 'burger';
  const [name, setName] = useState('burger');

  function changeName() {
    // const newName = name === 'burger' ? 'unknown' : 'burger';
    // setName(newName);
    setName(name === 'burger' ? 'unknown' : 'burger');
  }

  return (
    <div>
      <h1
      // style={{
      //   color: '#f00',
      //   borderRight: '2px solid #000',
      //   marginBottom: '50px',
      //   opacity: 1,
      // }}
      >
        State는 컴포넌트의 속성값
      </h1>
      <h2 id='name'>{name}</h2>
      <button onClick={changeName}>Change</button>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          showAge(777);
        }}
      >
        Show age
      </button>
      <input
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      {/* <div className={styles.box}>Hello</div> */}
    </div>
  );
  {
    /** 만약 div 태그가 없다면 에러 발생.
    왜? JSX는 하나의 태그만 만들 수 있기 때문에.
    빈태그로 감싸줘도 되고(<> </>) div로 해도 된다~!
  */
  }
}
