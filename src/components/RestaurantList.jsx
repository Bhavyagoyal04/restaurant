import React from 'react';
import RestaurantSearch from './RestaurantSearch';
import RestaurantCard from './RestaurantCard';
import { useRestaurants } from '../context/RestaurantContext';

function RestaurantList() {
  const { filteredRestaurants } = useRestaurants();

  return (
    <div className="container">
      <RestaurantSearch />
      
      <div className="menu-section" id="availableRestaurants">
        <h2>Restaurants to Explore</h2>
        {filteredRestaurants.length > 0 ? (
          <div className="restaurant-grid">
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
              />
            ))}
          </div>
        ) : (
          <p className="no-results">No restaurants found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default RestaurantList;