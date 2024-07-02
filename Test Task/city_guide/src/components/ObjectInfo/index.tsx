import React, { useState, useEffect } from 'react';
import {
    SCard, SA, SButtonFav, SButtonRoute
} from "./styles";
import { useLocation } from "../../hooks/useLocation";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRoute } from '../../store/reducers/geoObjects';
import { IoMdBookmark } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import RouteInfo from '../RouteInfo';
import { FavCollectionRef } from '../../firebase';
import { addDoc } from "@firebase/firestore"


const ObjectInfo = ({object}) => {

  const {isAuth, email} = useAuth();
    const {userLocation, error} = useLocation();
    const dispatch = useAppDispatch();
    const [showCard, setShowCard] = useState(true);
    const user = useAppSelector(state => state.userReducer);

    useEffect(() => {
      if (object.selectedPlace)
      setShowCard(true);
    }, [object.selectedPlace]);

    const onRouteBtnClick = async () => {
        try {
            const response = await fetch(`https://router.project-osrm.org/route/v1/walking/${userLocation[1]},${userLocation[0]};${object.selectedPlace.geometry.coordinates[0]},${object.selectedPlace.geometry.coordinates[1]}?overview=full&geometries=geojson`)    
            const data = await response.json();
            const length = parseFloat((data.routes[0].legs[0].distance / 1000).toFixed(1));
            const duration = Math.ceil(data.routes[0].legs[0].duration / 60);
            const coordinates = data.routes[0].geometry.coordinates;
            const coord = coordinates.map(innerArray => [innerArray[1], innerArray[0]]);
            dispatch(setRoute({ length, duration, arrival: [object.selectedPlace.geometry.coordinates[1], object.selectedPlace.geometry.coordinates[0]], coord}));
            console.log(data)
            console.log(length)
            console.log(duration)
            console.log(userLocation[1] + " " + userLocation[0])
            console.log(object.selectedPlace.geometry.coordinates[0] + " " + object.selectedPlace.geometry.coordinates[1])
            console.log(user.id)
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }

    const clickOnFavorite = async () => {
      createFavorite();
  }

  const createFavorite = async () => {
      await addDoc(FavCollectionRef, {
      usrId: user.id, 
      placeId: object.selectedPlace.properties.CompanyMetaData.id,
      name: object.selectedPlace.properties.CompanyMetaData.name ? object.selectedPlace.properties.CompanyMetaData.name : null,
      address: object.selectedPlace.properties.CompanyMetaData.address ? object.selectedPlace.properties.CompanyMetaData.address : null, 
      hours: object.selectedPlace.properties.CompanyMetaData.Hours ? object.selectedPlace.properties.CompanyMetaData.Hours.text : null, 
      phone: object.selectedPlace.properties.CompanyMetaData.Phones ? object.selectedPlace.properties.CompanyMetaData.Phones[0].formatted : null, 
      url: object.selectedPlace.properties.CompanyMetaData.url ? object.selectedPlace.properties.CompanyMetaData.url : null});
  }

  return (
      <>
        <SCard> 
            <text><b>{object.selectedPlace.properties.CompanyMetaData.name}</b></text>
            {!object.isClicked && (
              <>
              {object.selectedPlace.properties.CompanyMetaData.Categories && (
              <p>{object.selectedPlace.properties.CompanyMetaData.Categories[0].name}</p>)}

              {object.selectedPlace.properties.CompanyMetaData.address &&
              (<p><b>Адрес:</b> {object.selectedPlace.properties.CompanyMetaData.address}</p>)}

              {object.selectedPlace.properties.CompanyMetaData.Hours && (
              <p><b>Время работы:</b> {object.selectedPlace.properties.CompanyMetaData.Hours.text}</p>)}

              {object.selectedPlace.properties.CompanyMetaData.Phones && (
              <p><b>Телефон:</b> {object.selectedPlace.properties.CompanyMetaData.Phones[0].formatted}</p>)}

              {object.selectedPlace.properties.CompanyMetaData.url && (
              <><b>Перейти на сайт:</b> <SA href={object.selectedPlace.properties.CompanyMetaData.url} target="_blank" rel="noopener noreferrer">
                  {object.selectedPlace.properties.CompanyMetaData.url}      
              </SA></>)}     
              {isAuth && ( 
                      <SButtonFav onClick={clickOnFavorite}>
                          <IoMdBookmark /> Добавить в избранное
                      </SButtonFav>
                  )}  
                  <SButtonRoute onClick={onRouteBtnClick}>
                      <FaLocationArrow /> Маршрут
                  </SButtonRoute>  
              </>
            )}
        </SCard>
        <RouteInfo />
      </>
    )
}

export default ObjectInfo;