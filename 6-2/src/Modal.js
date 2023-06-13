import React, { useState, useRef } from 'react';

const Modal = ({ modalOpen, addItem, modalHandler }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };

  const submitItem = (event) => {
    event.preventDefault();
    addItem({ name: name, content: content, url: url });
    setName('');
    setContent('');
    setUrl('');
    modalHandler();
  };

  return (
    <section className='modal-section' hidden={modalOpen}>
      <div className='modal flex-col'>
        <form className='input-list flex-col' onSubmit={submitItem}>
          <div className='close-btn-box'>
            <span className='close-btn' onClick={modalHandler}>
              X
            </span>
          </div>
          <label className='modal-label'>음료 이름</label>
          <input
            type='text'
            className='drink-input'
            placeholder='메론소다'
            value={name || ''}
            onChange={nameChangeHandler}
            required
          />
          <label className='modal-label'>이미지 주소</label>
          <input
            type='text'
            className='drink-input'
            placeholder='url을 입력하세요'
            value={url || ''}
            onChange={urlChangeHandler}
            required
          />
          <label className='modal-label'>내용</label>
          <input
            type='text'
            className='drink-input'
            placeholder='메론소다 없어서 못먹지'
            value={content || ''}
            onChange={contentChangeHandler}
            required
          />
          <button type='submit' className='save-btn'>
            저장
          </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;
