import React, { useState, useRef } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Вы ввели:', inputRef.current.value);
  };

  return (
    <form className="myForm" onSubmit={handleSubmit}>
      <div className="myBlock">
        <label className="myText" htmlFor="myInput">Введите текст:</label>
        <input
          type="text"
          id="myInput"
          className="myInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        />
        <button className="myButton" type="submit">Отправить</button>
      </div>
    </form>
  );
}

export default Form;