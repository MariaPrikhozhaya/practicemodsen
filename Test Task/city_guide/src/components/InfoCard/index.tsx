import React from 'react';
import {
    SCard, SCardMedia, SCardHeader, SCardContent, SText, 
    SCardActions, SButtonFav, SButtonGeo
} from "./styles";
import { IoMdBookmark } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const InfoCard = () => {

  return (
    <SCard>
        <SCardContent>
            <SCardMedia
                component="img"
                image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5e/4f/4d/caption.jpg?w=1200&h=1200&s=1"
            />
            <SCardHeader>Парк Челюскинцев</SCardHeader>
            <SText>Великолепное место для разных видов отдыха и очень хорош для всех возрастов. 
                Удобно добраться, если нет собственной машины. Транспортная доступность у парка на пять баллов. 
                Его центральный вход находится в 20-ти метрах от одноименной станции метро.</SText>
        </SCardContent>
        <SCardActions>
        <SButtonFav>
          <IoMdBookmark /> Сохранено
        </SButtonFav>
        <SButtonGeo>
          <FaLocationDot /> Маршрут
        </SButtonGeo>
      </SCardActions>
    </SCard>
  );
}

export default InfoCard;