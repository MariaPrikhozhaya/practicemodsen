import React, { useState, useRef } from 'react';


const Message = ({number}) => {

    return (
      <div className="myBlock">
        {number !== '' ? (
            number > 0 ? (
            <p>Число больше нуля</p>
            ) : number < 0 ? (
            <p>Число меньше нуля</p>
            ) : (
            <p>Число равно нулю</p>
            )
        ) : (
            <p>Число не задано</p>
        )}
      </div>
    );
  };
  

export default Message;