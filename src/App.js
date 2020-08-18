import React from 'react';
import Cards from './components/Cards';

const App = () => {
  return (
    <div className="container flex flex-col md:grid md:grid-cols-3 mx-auto">
      <Cards />
    </div>
  );
};

export default App;
