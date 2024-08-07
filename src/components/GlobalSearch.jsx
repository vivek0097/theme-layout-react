
import React from 'react'
import { RiSearchLine } from 'react-icons/ri';
import './css/globalSearch.css'


export const GlobalSearch = () => {
  return (
      <div className="search-container">
        <RiSearchLine className="search-icon" />
        <input 
          type="search" 
          name="searchGlobal" 
          placeholder="Search" 
          className="search-inpt" 
      
        />
      </div>
  )
}

