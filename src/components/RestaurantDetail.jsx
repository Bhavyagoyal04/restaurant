import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRestaurants } from '../context/RestaurantContext';

function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findRestaurantById } = useRestaurants();
  
  const restaurant = findRestaurantById(id);

  useEffect(() => {
    if (!restaurant) {
      navigate('/');
    }
  }, [restaurant, navigate]);

  if (!restaurant) {
    return null;
  }

  return (
    <div className="container">
      <div className="restaurant-detail">
        <button className="back-btn" onClick={() => navigate('/')}>
          Back to List
        </button>
        
        <h2>{restaurant.name}</h2>
        
        <div className="restaurant-image-large">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
        
        <div className="restaurant-info-detail">
          <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
          <p><strong>Address:</strong> {restaurant.address}</p>
          <p><strong>Average Cost:</strong> {restaurant.averageCost}</p>
          <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
          <p><strong>Phone Number:</strong> {restaurant.phoneNumber}</p>
          <p><strong>Open Timing:</strong> {restaurant.openTiming}</p>
        </div>

      </div>
    </div>
  );
}

export default RestaurantDetail;