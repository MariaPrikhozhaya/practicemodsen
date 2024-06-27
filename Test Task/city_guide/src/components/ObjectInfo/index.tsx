import React from 'react';
import {
    SCard, SA
} from "./styles";


const ObjectInfo = ({object}) => {

  return (
    <SCard> 
        <h2>{object.properties.CompanyMetaData.name}</h2>

        {object.properties.CompanyMetaData.Categories && (
        <p>{object.properties.CompanyMetaData.Categories[0].name}</p>)}

        {object.properties.CompanyMetaData.address &&
        (<p><b>Адрес:</b> {object.properties.CompanyMetaData.address}</p>)}

        {object.properties.CompanyMetaData.Hours.text && (
        <p><b>Время работы:</b> {object.properties.CompanyMetaData.Hours.text}</p>)}

        {object.properties.CompanyMetaData.Phones && (
        <p><b>Телефон:</b> {object.properties.CompanyMetaData.Phones[0].formatted}</p>)}

        {object.properties.CompanyMetaData.url && (
        <><b>Перейти на сайт:</b> <SA href={object.properties.CompanyMetaData.url} target="_blank" rel="noopener noreferrer">
            {object.properties.CompanyMetaData.url}      
        </SA></>)}       
    </SCard>
  );
}

export default ObjectInfo;