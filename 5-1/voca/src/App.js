import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  // const name = 'burger';
  // const naver = {
  //   name: 'naver',
  //   url: 'https://naver.com',
  // };
  return (
    <div className='App'>
      {/* <h1
        style={{
          color: 'red',
          backgroundColor: 'green',
        }}
      >
        Hello, {name}!!
      </h1>
      <a href={naver.url}>{naver.name}</a> */}
      <Hello />
      <Hello />
      <Hello />
      {/** 중간에 내용이 없으면 셀프클로징 추천 */}
      {/* <Welcome /> */}
      {/* <div className={styles.box}>App</div> */}
    </div>
  );
}

export default App;
