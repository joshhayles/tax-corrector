import * as React from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import CompsContainer from "./CompsContainer";
//import myComps from './myComps

function Dashboard({ user, setUser }) {
  const [comps, setComps] = useState([]);
  const [userHome, setUserHome] = useState();

  function handleUserSubmit(e) {
    e.preventDefault();
    console.log("Wuzzup")
    // const userHome = {
    //     year_built: year_built,
    //     square_feet: square_feet,
    //     proposed_value: proposed_value
    // }
    console.log(userHome);
  }

  function handleShowComps() {

    fetch("/comps")
      .then((r) => r.json())
      .then(setComps);

    console.log(comps);
  }

  return (
    <>
      <h2>Welcome, {user.username}!</h2>

      <NavBar user={user} setUser={setUser} />

      <h3>
        Update Your Home below to generate the best COMPS for protesting your
        property taxes!
      </h3>

      <UserForm 
      user={user} 
      comps={comps} 
      handleUserSubmit={handleUserSubmit} 
      handleShowComps={handleShowComps} />
      
      <CompsContainer comps={comps} user={user} />
      {/* <MyCompsContainer /> */}
    </>
  );
}

export default Dashboard;
