import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/Provider";

export const useLocation = () => {


    const [userLocation, setUserLocation] = useState([]);
    const [error, setError] = useState("");
    // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
    const { searchAddress } = useContext(AppContext);

    
    useEffect(() => {
        if (searchAddress) {
          getCoordinatesFromAddress();
        } else {
          getUserLocation();         
        }
    }, [searchAddress]);



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
        if (searchAddress) {
            const response = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=d40d7ec9-f5ab-4c2d-8515-179c8f0fadd5&format=json&geocode=${searchAddress}`
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


