import React from 'react';
import {
    SCard, SCardMedia, SText, SDiv, SCardHeader, 
    SIconButtonFav, SIconButtonArrow, SCardActions, SCardContent
} from "./styles";
import { IoMdArrowDropright, IoMdBookmark } from "react-icons/io";

const Card = () => {

  const handleBtnClick = () => {
    
  };

  return (
    <SCard>
      <SCardContent>
            <SDiv>
                <SCardMedia
                    component="img"
                    image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5e/4f/4d/caption.jpg?w=1200&h=1200&s=1"
                />
                <SCardHeader>Парк Челюскинцев</SCardHeader>
            </SDiv>
            <SText>Великолепное место для разных видов отдыха и очень хорош для всех возрастов. 
              Удобно добраться, если нет собственной машины. Транспортная доступность у парка на пять баллов. 
              Его центральный вход находится в 20-ти метрах от одноименной станции метро.</SText>
      </SCardContent>
      <SCardActions>
        <SIconButtonFav>
          <IoMdBookmark />
        </SIconButtonFav>
        <SIconButtonArrow onClick={handleBtnClick}>
          <IoMdArrowDropright />
        </SIconButtonArrow>
      </SCardActions>
    </SCard>
  );
}

export default Card;