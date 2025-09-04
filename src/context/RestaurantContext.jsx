import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialRestaurants } from '../data/restaurantData';

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const findRestaurantById = (id) => {
    return restaurants.find(restaurant => restaurant.id === id || restaurant.id === parseInt(id));
  };

  useEffect(() => {
    let results = [...restaurants];
    
    if (searchTerm) {
      results = results.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filters.cuisine) {
      results = results.filter(restaurant => 
        restaurant.cuisine.toLowerCase() === filters.cuisine.toLowerCase()
      );
    }
    
    if (filters.priceRange) {
      results = results.filter(restaurant => 
        restaurant.price === filters.priceRange
      );
    }
    
    if (filters.rating) {
      results = results.filter(restaurant => 
        restaurant.rating >= filters.rating
      );
    }
    
    if (filters.openNow) {
      results = results.filter(restaurant => 
        restaurant.isOpen
      );
    }
    
    setFilteredRestaurants(results);
  }, [searchTerm, filters, restaurants]);

  const value = {
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    restaurants,
    setRestaurants,
    filteredRestaurants,
    findRestaurantById
  };

  return (
    <RestaurantContext.Provider value={value}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurants() {
  return useContext(RestaurantContext);
}