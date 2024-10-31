// src/App.tsx
import React from 'react';
import "./App.scss";
import OrderList from './components/OrderList';

const App = () => {
  return (
      <div className='app'>
          < OrderList />
      </div>
    
  );
};

export default App;
