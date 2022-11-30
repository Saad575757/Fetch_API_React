import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const FetchApi=()=>{
  
  const [users, setUsers]=useState([]); //initial value will be an empty array.

  const getUsers=async()=>{
    const response= await  fetch("https://api.github.com/users");//this will be written promise.
    // const data=await response.json();
    // console.log(data);
    setUsers(await response.json());


  }

  useEffect(()=>{
    getUsers()
  },[]);
  return(
    <>
    <div>
      <h3>List of Github users</h3>
      <div className="card">
        {
          users.map((currelement)=>{
            return(
              <div>
                 <h5 className="name"> {currelement.login}</h5>
        <h6 className="passion">Web developer</h6>
        <div className="inner-card">
          <span> {currelement.followers_url}</span><p>500</p>
          <span>Articles</span><p>15</p>
          <span>Rating</span><p>8.9</p>
        </div>

              </div>
            )

          })
        }
       
      </div>
    </div>
    </>

  );
}

export default FetchApi;
