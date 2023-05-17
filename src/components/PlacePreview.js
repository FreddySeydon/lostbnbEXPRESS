import React from 'react'
import { useState, useEffect } from 'react';
import { fetchEntry, fetchAsset } from '../utils/contentfulApi';
import { Link } from 'react-router-dom';
import '../styles/PlacePreview.css';

export default function PlacePreview({place}) {
  const mainPicture = place.picture_path;
  const street = place.street;
  const city =  place.city;  

  const placeHeadline = place.name;
  const rating = place.rating;
  const price = place.price;
    
  return (
    <>
    
      <div className="previewWrapper">
      <Link to={`/places/${place.id}`}>
        <div className="previewPicture">
          <img src={mainPicture} alt="Main Picture" width="300" height="auto"/>
        </div>
        <div className="placeInfo">
          <h3>{placeHeadline}</h3>
          <p>{city}</p>
          <p>* {rating}</p>
        </div>
        <div className="price">
          <h3 className="priceTag">{price}</h3>
          <p>per night</p>
          <br />
        </div>
        </ Link>
      </div>
      
    </>
  )
}
