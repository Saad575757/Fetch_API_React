import React, { useState } from 'react';
import { useEffect } from 'react';

import "./App.css";



const App = () => {

  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data= await response.json();
    // console.log(data);
    setUser(await response.json());
  }

  useEffect(() => {
    getUsers()
  }, []);
  return (
    <>
      <h2 className='heading'>List of Users</h2>
      <div className='card'>

        {
          user.map((currentelement) => (
            <div className='card-style'>
              <p className='name'> {currentelement.name}</p>
              <p className='id'>ID: {currentelement.id}</p>
              <p className='username'>Username: {currentelement.username}</p>
              <p className='email'>Email: {currentelement.email}</p>
              <p className='phone'>Phone: {currentelement.phone}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default App;