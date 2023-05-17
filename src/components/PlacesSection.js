import React from 'react';
import { useEffect, useState } from 'react';
import PlacePreview from './PlacePreview';
import { fetchAllPlaces } from '../utils/contentfulApi';
import '../styles/PlacesSection.css'

export default function PlacesSection() {
  const [places, setPlaces] = useState(null);
  
  useEffect(() => {
    fetchAllPlaces()
    .then((response) => {
      setPlaces(response);
    })
  }, [])
  

  return (
    <>
      <div className="PlacesHeader">
        <div className="placesHead">
          <h3>Tour Packages</h3>
          <h1>Our amazing lost places in Germany</h1>
        </div>
        <div className="placeSlider">
        {/* <div className="sliderButtons">
          <button className='sliderBtn prvBtn'>&#60;</button>
          <button className='sliderBtn nxtBtn'>&#62;</button>
        </div> */}
        <div className="placePreviews">
          {places ?
            places.map((place) => {
              return( 
              <div className="singlePlace">
              <PlacePreview place={place}/>
              </div>
              )
            }) : <div>Loading</div>
          }
        </div>
        </div>
      </div>
    </>
  )
}