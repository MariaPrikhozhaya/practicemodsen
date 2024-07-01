import React from 'react';
import {
    SCard, SCardMedia, SText, SDiv, SCardHeader, 
    SIconButtonFav, SIconButtonArrow, SCardActions, SCardContent
} from "./styles";
import { IoMdArrowDropright, IoMdBookmark } from "react-icons/io";

const Card = ({itemData}) => {

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
                <SCardHeader>{itemData.name && (itemData.name)}</SCardHeader>
            </SDiv>
            {itemData.address && (
              <SText>Адрес: {itemData.address}</SText>
            )}
            {itemData.hours && (
              <SText>Время работы: {itemData.hours}</SText>
            )}
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