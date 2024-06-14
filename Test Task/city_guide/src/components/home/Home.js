 import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import SidebarF from "../common/SidebarF.js";

const containerStyle = {
  width: '100vw',
  height: '100vw',
};

const Home = () => {
  const [userLocation, setUserLocation] = useState(null);

  function geoFindMe() {

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setUserLocation({ lat: latitude, lng: longitude });
      console.log(latitude)
      console.log(longitude)
    }

    function error() {
      alert("Невозможно получить ваше местоположение");
    }
  

    if (!navigator.geolocation) {
      console.log("Geolocation не поддерживается вашим браузером");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  geoFindMe()
  
  
  return (
    <section>
      <SidebarF />
      <YMaps>
        <Map
          defaultState={{ center: userLocation, zoom: 12 }}
          width="100%"
          height="100%"
          style={containerStyle}
        >
          {userLocation && (
            <Placemark geometry={userLocation} />
          )}
        </Map>
      </YMaps>


    </section>
  );
};

export default Home;





// import React, { useState, useEffect } from 'react';
// import { YMaps, Map, Placemark, InfoWindow } from '@pbe/react-yandex-maps';

// const containerStyle = {
//     width: '100vw',
//     height: '100vw',
// };

// const Home = () => {
//   const [center, setCenter] = useState(null);
//   const [selectedPlace, setSelectedPlace] = useState(null);
//   const [places, setPlaces] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);


//   const getUserLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
//       });
//     }
//   };

//   useEffect(() => {
//     getUserLocation();
//   }, []);

//   const onMapClick = (event) => {
//     setCenter({ lat: event.latLng.lat(), lng: event.latLng.lng() });
//   };

//   const searchPlaces = (radius) => {
//     // Use Google Places API to search for places within the radius
//     // and update the places state
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleAddToFavorites = (placeId) => {
//     // Add the place with id placeId to favorites
//   };

//   const handleDirections = (place) => {
//     // Use Google Maps Directions API to calculate route
//     // and display it on the map
//   };

//   return (
//     <section>
//     <YMaps>
//         <Map
//                     // defaultState={{ center: location, zoom: 12 }}
//                     center={center}
//                     width="100%"
//                     height="100%"
//                     onClick={onMapClick}
//                     style={containerStyle}
//                 >
                
                
//       {places.map((place) => (
//         <Placemark
//           key={place.id}
//           position={{ lat: place.lat, lng: place.lng }}
//           onClick={() => setSelectedPlace(place)}
//         />
//       ))}
      

//   {selectedPlace && (
//     <Placemark
//       geometry={{
//         type: 'Point',
//         coordinates: [selectedPlace.lat, selectedPlace.lng],
//       }}
//       properties={{
//         hintContent: selectedPlace.name,
//         balloonContent: <>
//         <h2>{selectedPlace.name}</h2>
//         <p>{selectedPlace.address}</p>
//           <button onСlick={() => handleAddToFavorites(selectedPlace.id)}>Add to favorites</button>
//           <button onСlick={() => handleDirections(selectedPlace)}>Get directions</button>
//       </>
//       }}
//       options={{
//         preset: 'islands#violetDotIcon',
//       }}
//     />
//   )}


      
//     </Map>
// </YMaps>
// </section>
//   ) 
// };

// export default Home;