import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
const [pizzas, setPizzas] = useState([]);

useEffect(() => {
  fetch("https://192.168.10.10:8500/Pizza",)
  .then(response => response.json())
  .then((pizzak) => setPizzas(pizzak))
  .catch(console.log)}, []);

return (
    <div className="p-5 m-auto text-center content bg-ivory">
      <h2>Pizzák</h2>
      {pizzas.map((pizza) =>(
        <div key={pizza.id} className="card col-sm-3 d-inline-block m-1 p-2">
          <h6 className="text-muted">Pizza neve: {pizza.name}</h6>
          <h6 className="text-muted">
            Pizza gluténmentes? {pizza.isGlutenFree ? "igen" : "nem"}</h6>
            <div className="card-body">
              <img className="img-fluid" 
              src={pizza.kepURL ? pizza.kepURL : "https://via.placeholder.com/400x800"} 
              alt="pizza-helyettesítő szöveg"/>
            </div>
        </div>
      ))}
    </div>  
  );
}

