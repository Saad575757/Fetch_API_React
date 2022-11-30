import React, { useState} from 'react';
import { useEffect } from 'react';

import "./App.css";

// const FetchApi=()=>{
  
//   const [users, setUsers]=useState([]); //initial value will be an empty array.

//   const getUsers=async()=>{
//     const response= await  fetch("https://api.github.com/users");//this will be written promise.
//     // const data=await response.json();
//     // console.log(data);
//     setUsers(await response.json());


//   }

//   useEffect(()=>{
//     getUsers();
//   },[]);
//   return(
//     <>
//     <div>
//       <h3>List of Github users</h3>
//       <div className="card">
//         {
//           users.map((currelement)=>{
//             return(
//               <div>
//                  <h5 className="name"> {currelement.login}</h5>
//         <h6 className="passion">{currelement.id}</h6>
//         <div className="inner-card">
//           <p> {currelement.url}</p><p>500</p>
//           <p>Articles</p><p>15</p>
//           <p>Rating</p><p>8.9</p>
//         </div>

//               </div>
//             )

//           })
//         }
       
//       </div>
//     </div>
//     </>

//   );
// }

// export default FetchApi;

const App=()=>{

  const [user, setUser]=useState([]);
  const getUsers=async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    // const data= await response.json();
    // console.log(data);
    setUser(await response.json());
  }

  useEffect(()=>{
    getUsers()
  },[]);
  return(
    <>
    <h2 className='heading'>List of Users</h2>
    <div className='card'>
      
      {
        user.map((currentelement)=>(
          <div className='card-style'>
        <p className='name'>Name: {currentelement.name}</p>
        <p className='id'>ID :{currentelement.id}</p>
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