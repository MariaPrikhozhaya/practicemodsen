import React from 'react';
import {
  SCard,
  SCardMedia,
  SText,
  SDiv,
  SCardHeader,
  SIconButtonFav,
  SIconButtonArrow,
  SCardActions,
  SCardContent,
} from './styles';
import { IoMdArrowDropright, IoMdBookmark } from 'react-icons/io';
import { setShow, setFullObjectInfo } from '../../store/reducers/geoObjects';
import { useAppDispatch } from '../../hooks/redux';
import { FavCollectionRef } from '../../firebase';
import { query, where, deleteDoc, getDocs } from '@firebase/firestore';

const Card = ({ itemData }) => {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    dispatch(setShow(true));
    dispatch(setFullObjectInfo(itemData));
  };

  const deleteFavorite = async () => {
    const q = query(
      FavCollectionRef,
      where('placeId', '==', itemData.objectId)
    );
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  return (
    <SCard>
      <SCardContent>
        <SDiv>
          <SCardMedia
            component="img"
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5e/4f/4d/caption.jpg?w=1200&h=1200&s=1"
          />
          <SCardHeader>{itemData.name && itemData.name}</SCardHeader>
        </SDiv>
        {itemData.category && <SText>{itemData.category}</SText>}
        {itemData.address && <SText>Адрес: {itemData.address}</SText>}
        {itemData.hours && <SText>Время работы: {itemData.hours}</SText>}
      </SCardContent>
      <SCardActions>
        <SIconButtonFav onClick={deleteFavorite}>
          <IoMdBookmark />
        </SIconButtonFav>
        <SIconButtonArrow onClick={handleBtnClick}>
          <IoMdArrowDropright />
        </SIconButtonArrow>
      </SCardActions>
    </SCard>
  );
};

export default Card;
