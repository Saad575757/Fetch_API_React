import React, { useState } from 'react';
import { useEffect } from 'react';

import "./App.css";



const App = () => {

  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data= await response.json();//repone
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
          user.map((currentelement) => {
            const {name, id , username , email, phone}=currentelement;
            <div className='card-style'>
              <p className='name'> {name}</p>
              <p className='id'>ID: {id}</p>
              <p className='username'>Username: {username}</p>
              <p className='email'>Email: {email}</p>
              <p className='phone'>Phone: {phone}</p>
            </div>
})
        }
      </div>
    </>
  )
}
export default App;