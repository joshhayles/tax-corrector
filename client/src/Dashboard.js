import * as React from "react";
import { useState } from "react";
import UserForm from "./UserForm";
import CompsContainer from "./CompsContainer";


function Dashboard({ user, setUser }) {
  const [comps, setComps] = useState([])


  function handleShowComps() {
    fetch("/comps")
      .then((r) => r.json())
      .then(setComps);
  }

  return (
    <>
      <h2>Welcome, {user.username}!</h2>

      <h3>
        Update Your Home below to generate the best COMPS for protesting your
        property taxes!
      </h3>

      <UserForm 
      user={user} 
      comps={comps} 
      handleShowComps={handleShowComps} />
      
      <CompsContainer 
      comps={comps} 
      user={user} 
      handleShowComps={handleShowComps}
     />
   
    </>
  );
}

export default Dashboard;
