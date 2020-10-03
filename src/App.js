import React from 'react';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "honggildong",
    birth: "990727",
    sex: "male",
    job: "student"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "sungbin",
    birth: "960914",
    sex: "male",
    job: "developer"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "NEMNE",
    birth: "000927",
    sex: "female",
    job: "hacker"
  }
]

function App() {
  return (
    <div className="App">
      {customers.map((customer) => {
        return (
        <Customer
          key={customer.id}
          id={customer.id}
          image={customer.image}
          name={customer.name}
          birth={customer.birth}
          sex={customer.sex}
          job={customer.job}
        />
        )
        })
      }
    </div>
  );
}

export default App;
