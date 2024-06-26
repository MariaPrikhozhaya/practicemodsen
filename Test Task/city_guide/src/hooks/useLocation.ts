import { useEffect, useState, useContext } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

const API_KEY = 'd40d7ec9-f5ab-4c2d-8515-179c8f0fadd5';


export const useLocation = () => {


    const [userLocation, setUserLocation] = useState([]);
    const [error, setError] = useState("");
    const geoObjects = useAppSelector(state => state.geoObjectsReducer);
    const dispatch = useAppDispatch();

    
    useEffect(() => {
        if (geoObjects.searchAddress) {
          getCoordinatesFromAddress();
        } else {
          getUserLocation();         
        }
    }, [geoObjects.searchAddress]);



    const getUserLocation = () => {
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setUserLocation([latitude, longitude]);
        } 
        const error = (error) => {
            setError(error.message);
        }
        if (!navigator.geolocation) {
            setError('Geolocation не поддерживается вашим браузером');
            return;
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };


    const getCoordinatesFromAddress = async () => {
        try {
        if (geoObjects.searchAddress) {
            const response = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${geoObjects.searchAddress}`
            );
            const data = await response.json();
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setUserLocation([parseFloat(coordinates[1]), parseFloat(coordinates[0])]);
        }
        } catch (error) {
        console.error('Error getting coordinates:', error);
        }
    };

  return { userLocation, error };
};


