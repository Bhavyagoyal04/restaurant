import React from 'react';
import { useRestaurants } from '../context/RestaurantContext';
import RestaurantSearch from './RestaurantSearch';
import RestaurantList from './RestaurantList';

function Home() {
  const { filteredRestaurants } = useRestaurants();

  return (
    <div className="home-container">
      <h1>Find Your Perfect Restaurant</h1>
      <p className="welcome-text">
        Discover the best dining experiences in Dehradun
      </p>
      <RestaurantList restaurants={filteredRestaurants} />
      
      {filteredRestaurants.length === 0 && (
        <div className="no-results">
          <p>No restaurants found matching your criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}

export default Home;