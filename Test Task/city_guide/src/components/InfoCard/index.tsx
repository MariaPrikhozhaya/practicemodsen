import React from 'react';
import {
  SCard,
  SCardMedia,
  SCardHeader,
  SCardContent,
  SText,
  SName,
  SAddress,
  SCardActions,
  SButtonFav,
  SButtonGeo,
  SBlock,
  SIconButtonArrow,
  SHead,
} from './styles';
import { IoMdBookmark, IoMdArrowDropleft } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setShow } from '../../store/reducers/geoObjects';

const InfoCard = () => {
  const dispatch = useAppDispatch();
  const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

  const handleBtnClick = () => {
    dispatch(setShow(false));
    console.log(geoObjects.fullObjectInfo);
  };

  return (
    <>
      <SBlock>
        <SIconButtonArrow aria-label="show more info" onClick={handleBtnClick}>
          <IoMdArrowDropleft />
        </SIconButtonArrow>
        <SHead>Избранное</SHead>
      </SBlock>
      <SCard>
        <SCardContent>
          <SCardMedia
            component="img"
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5e/4f/4d/caption.jpg?w=1200&h=1200&s=1"
          />
          {geoObjects.fullObjectInfo.name && (
            <SCardHeader>{geoObjects.fullObjectInfo.name}</SCardHeader>
          )}
          {geoObjects.fullObjectInfo.phone && (
            <SText>{geoObjects.fullObjectInfo.category}</SText>
          )}
          {geoObjects.fullObjectInfo.address && (
            <SText>
              <SName>Адрес: </SName>
              {geoObjects.fullObjectInfo.address}
            </SText>
          )}
          {geoObjects.fullObjectInfo.hours && (
            <SText>
              <SName>Время работы: </SName>
              {geoObjects.fullObjectInfo.hours}
            </SText>
          )}
          {geoObjects.fullObjectInfo.phone && (
            <SText>
              <SName>Телефон: </SName>
              {geoObjects.fullObjectInfo.phone}
            </SText>
          )}
          {geoObjects.fullObjectInfo.url && (
            <>
              <SName>Сайт: </SName>
              <SAddress
                href={geoObjects.fullObjectInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {geoObjects.fullObjectInfo.url}
              </SAddress>
            </>
          )}
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
    </>
  );
};

export default InfoCard;
