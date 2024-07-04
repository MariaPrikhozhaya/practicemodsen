import React from 'react';
import { SCard, SDiv, SDistance, STime, STextValue, STextName } from './styles';
import { useAppSelector } from '../../hooks/redux';

const RouteInfo = () => {
  const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

  return (
    <SCard>
      <SDiv>
        <SDistance>
          <STextValue>{geoObjects.route.length} km</STextValue>
          <STextName>дистанция</STextName>
        </SDistance>
        <STime>
          <STextValue>{geoObjects.route.duration} мин</STextValue>
          <STextName>примерное время</STextName>
        </STime>
      </SDiv>
    </SCard>
  );
};

export default RouteInfo;
