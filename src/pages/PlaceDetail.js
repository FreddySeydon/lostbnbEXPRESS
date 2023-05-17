import React, { useCallback } from 'react'
import PlaceFeatures from '../components/PlaceFeatures';
import BookingCalender from '../components/BookingCalender';
import PlaceGallery from '../components/PlaceGallery';
import ReviewSection from '../components/ReviewSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

import '../styles/BookingCalender.css'
import '../styles/PlaceFeatures.css'
import '../styles/ReviewSection.css'
import { fetchPlaceById } from '../utils/contentfulApi';


export default function PlaceDetail() {
  const {placeID} = useParams();
  const [place, setPlace] = useState(null)

useEffect(() => {

    const fetchPlace = async() =>{
          const fetchedPlace = await fetchPlaceById(placeID);
         

        const placeLocation = {
            city:fetchedPlace.city,
            street:fetchedPlace.street
        }

        const assets = [
          fetchedPlace.picture_path, 
          fetchedPlace.gallerypic_1, 
          fetchedPlace.gallerypic_2,
          fetchedPlace.gallerypic_3, 
          fetchedPlace.gallerypic_4
        ]

        const reviews =[{
            text:fetchedPlace.review
        }] 


          setPlace({
            id: fetchedPlace.id,
            name: fetchedPlace.name,
            pictures: assets,
            description: fetchedPlace.description,
            rating: fetchedPlace.rating,
            price: fetchedPlace.price,
            location: placeLocation,
            reviews: reviews
          }
      );
    };   fetchPlace(); 
  },
     [placeID])

  return (
    <>
    <Header />
    <PlaceGallery place={place} />
    <PlaceFeatures place={place} />
    <BookingCalender />
    <ReviewSection place={place} />
    <Footer />
    </>
  )
}
