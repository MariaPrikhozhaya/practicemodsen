import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

const text = "Это текст, состоящий из нескольких предложений. " +
"Первое предложение будет видно сразу. Остальные предложения" + 
"можно увидеть, нажав на кнопку. После этого текст можно закрыть "+ 
"и снова будет отображаться только первое предложение.";

function App() {
  return (
    <MyComponent text={text} />
  );
}

export default App;
