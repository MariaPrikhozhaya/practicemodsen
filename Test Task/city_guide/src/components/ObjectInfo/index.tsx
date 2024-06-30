import React from 'react';
import {
    SCard, SA, SButtonFav, SButtonRoute
} from "./styles";
import { useLocation } from "../../hooks/useLocation";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from '../../hooks/redux';
import { setRoute } from '../../store/reducers/geoObjects';
import { IoMdBookmark } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import RouteInfo from '../RouteInfo';


const ObjectInfo = ({object}) => {

  const {isAuth, email} = useAuth();
    const {userLocation, error} = useLocation();
    const dispatch = useAppDispatch();

    const onRouteBtnClick = async () => {
        try {
            const response = await fetch(`https://router.project-osrm.org/route/v1/walking/${userLocation[1]},${userLocation[0]};${object.geometry.coordinates[0]},${object.geometry.coordinates[1]}?overview=full&geometries=geojson`)    
            const data = await response.json();
            const length = parseFloat((data.routes[0].legs[0].distance / 1000).toFixed(1));
            const duration = Math.ceil(data.routes[0].legs[0].duration / 60);
            const coordinates = data.routes[0].geometry.coordinates;
            const coord = coordinates.map(innerArray => [innerArray[1], innerArray[0]]);
            dispatch(setRoute({ length, duration, arrival: [object.geometry.coordinates[1], object.geometry.coordinates[0]], coord}));
            console.log(data)
            console.log(length)
            console.log(duration)
            console.log(userLocation[1] + " " + userLocation[0])
            console.log(object.geometry.coordinates[0] + " " + object.geometry.coordinates[1])
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }

  return (
    <>
    <SCard> 
        <h2>{object.properties.CompanyMetaData.name}</h2>

        {object.properties.CompanyMetaData.Categories && (
        <p>{object.properties.CompanyMetaData.Categories[0].name}</p>)}

        {object.properties.CompanyMetaData.address &&
        (<p><b>Адрес:</b> {object.properties.CompanyMetaData.address}</p>)}

        {object.properties.CompanyMetaData.Hours && (
        <p><b>Время работы:</b> {object.properties.CompanyMetaData.Hours.text}</p>)}

        {object.properties.CompanyMetaData.Phones && (
        <p><b>Телефон:</b> {object.properties.CompanyMetaData.Phones[0].formatted}</p>)}

        {object.properties.CompanyMetaData.url && (
        <><b>Перейти на сайт:</b> <SA href={object.properties.CompanyMetaData.url} target="_blank" rel="noopener noreferrer">
            {object.properties.CompanyMetaData.url}      
        </SA></>)}     
        {isAuth && ( 
                <SButtonFav>
                    <IoMdBookmark /> Добавить в избранное
                </SButtonFav>
            )}  
            <SButtonRoute onClick={onRouteBtnClick}>
                <FaLocationArrow /> Маршрут
            </SButtonRoute>  
    </SCard>
    <RouteInfo />
    </>
  );
}

export default ObjectInfo;