import React from 'react';
import Customer from './components/Customer';

const customer = {
  id:1,
  image:"https://placeiimg.com/64/64/any",
  name:"honggildong",
  birth:990727,
  sex:"male",
  job:"student"
}

function App() {
  return (
    <div className="App">
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birth={customer.birth}
        sex={customer.sex}
        job={customer.job}
      />
    </div>
  );
}

export default App;
