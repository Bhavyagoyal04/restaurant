import React, { useState } from 'react';
import { useRestaurants } from '../context/RestaurantContext';

function RestaurantSearch() {
  const { searchTerm, setSearchTerm, filters, setFilters } = useRestaurants();
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="form-section">
      <h2>Search Restaurant</h2>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Enter restaurant name or cuisine" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="filter-toggle-button"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {showFilters && (
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="cuisine">Cuisine:</label>
            <select 
              id="cuisine"
              value={filters?.cuisine || ''}
              onChange={(e) => handleFilterChange('cuisine', e.target.value)}
            >
              <option value="">All Cuisines</option>
              <option value="Multi-cuisine">Multi-cuisine</option>
              <option value="Continental">Continental</option>
              <option value="Bar Food">Bar Food</option>
              <option value="Fine Dining">Fine Dining</option>
              <option value="Italian">Italian</option>
              <option value="Cafe">Cafe</option>
              <option value="North Indian">North Indian</option>
              <option value="European">European</option>
              <option value="Modern Indian">Modern Indian</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="priceRange">Price Range:</label>
            <select 
              id="priceRange"
              value={filters?.priceRange || ''}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="₹">Budget (Under ₹1,000)</option>
              <option value="₹₹">Moderate (₹1,000-1,500)</option>
              <option value="₹₹₹">High-End (₹1,500-2,000)</option>
              <option value="₹₹₹₹">Premium (Above ₹2,000)</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="rating">Minimum Rating:</label>
            <select 
              id="rating"
              value={filters?.rating || ''}
              onChange={(e) => handleFilterChange('rating', e.target.value ? Number(e.target.value) : '')}
            >
              <option value="">Any Rating</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>

          <button 
            onClick={() => setFilters({})} 
            className="clear-filters-button"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default RestaurantSearch;