import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-info">
      <h3>{restaurant.name}</h3>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Average Cost:</strong> {restaurant.averageCost}</p>
      <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
      <p><strong>Phone Number:</strong> {restaurant.phoneNumber}</p>
      <p><strong>Open Timing:</strong> {restaurant.openTiming}</p>
      <div className="restaurant-image">
        <img src={restaurant.image} alt={restaurant.name} />
      </div>
      <Link to={`/restaurant/${restaurant.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
}

export default RestaurantCard;