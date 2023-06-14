import './App.css';
import React, { useState } from 'react';
import Modal from './Modal';
import ade from './images/ade.jpeg';
import coffee from './images/coffee.jpeg';
import liquor from './images/liquor.jpeg';
import tapioca from './images/tapioca.jpeg';
import tea from './images/tea.jpeg';
import default_Img from './images/default.jpeg';

const App = () => {
  const data = [
    {
      name: '🍹 에이드',
      content: '상큼한 과일 맛과 탄산 과일 에이드',
      url: ade,
    },
    {
      name: '☕️ 커피',
      content: '머리를 깨워주는 카페인 가득 커피',
      url: coffee,
    },
    {
      name: '🍸 알코올',
      content: '역시 작업은 알코올과 함께!',
      url: liquor,
    },
    {
      name: '🧋 버블티',
      content: '달달한 밀크티와 쫀득한 타피오카',
      url: tapioca,
    },
    {
      name: '🍵 차',
      content: '차분한 작업을 위해 차 한 잔',
      url: tea,
    },
  ];

  const [dataList, setDataList] = useState(data);
  const [modalOpen, setModalOpen] = useState(true);

  const addItem = (item) => {
    setDataList([...dataList, item]);
  };

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const onErrorImg = (event) => {
    event.target.src = default_Img;
    event.target.alt = '오류로 인해 기본 이미지가 출력되었습니다.';
  };

  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>🧃 오늘은 어떤 걸 마시면서 일해볼까? 🤔</h1>
      </header>
      <main className='flex-row main'>
        <aside className='flex-col types'>
          <button className='add-btn' onClick={modalHandler}>
            Add
          </button>
          {dataList.map((item) => (
            <span className='type' key={item.name}>
              {item.name}
            </span>
          ))}
        </aside>
        <section className='flex-row drinks'>
          {dataList.map((item) => (
            <figure className='drink' key={item.name}>
              <img src={item.url} alt={item.name} className='img-drink' onError={onErrorImg} />
              <figcaption>{item.content}</figcaption>
            </figure>
          ))}
        </section>
      </main>

      <Modal modalOpen={modalOpen} addItem={addItem} modalHandler={modalHandler} />
    </div>
  );
};

export default App;
