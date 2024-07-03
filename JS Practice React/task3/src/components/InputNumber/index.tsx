import React, { useState, useRef } from 'react';
import Message from '../Message';

const InputNumber = () => {
  const [number, setNumber] = useState('');

  const handleInput = (event) => {
    setNumber(event.target.value);
  };

  return (
      <div className="myBlock">
        <label className="myText" htmlFor="myInput">Введите число:</label>
        <input
          type="number"
          id="myInput"
          className="myInput"
          value={number}
          onChange={handleInput}
        />
        <Message number={number}/>
      </div>
  );
}

export default InputNumber;