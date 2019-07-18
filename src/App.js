import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Categories from './components/quotes/Categories';
import Quotes from './components/quotes/Quotes';
 function App() {

  
    
 
  return (
    <div className="App">
      <Navbar/>
      <div className="mt-2">
        <p> Seem's like you'd like some chuck norris quotes. Here's a bunch!</p>
      </div>
      <Categories />
      
        
    </div>
  );
}

export default App;
