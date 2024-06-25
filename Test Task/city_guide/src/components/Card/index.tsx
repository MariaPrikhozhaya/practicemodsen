import React, {useState} from "react";
import {
    SCard, SCardHeader, SCardContent, SCardButton
  } from "./styles";


const Card = () => {

    return (
        <SCard>
            <SCardHeader>Заголовок карточки</SCardHeader>
            <SCardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consequat, ante id maximus efficitur, felis sem commodo massa, id
                laoreet odio lectus at turpis.
            </SCardContent>
            <SCardButton>Подробнее</SCardButton>
        </SCard>
    )
  };

  export default Card;