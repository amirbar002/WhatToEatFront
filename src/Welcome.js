import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { UserContext } from "./UserContext";

function Welcome() {
  const {singInPage, setsingInPage} = useContext(UserContext)
  const {welcomePage , setwelcomePage} = useContext(UserContext)
  const {registerPage , setregisterPage} = useContext(UserContext)

    const SingIn = (e) => {
      e.stopPropagation()
        setwelcomePage(false)
        setsingInPage(true)
        console.log('snigin');
    }
    const Register = (e) => {
      e.stopPropagation()
        setwelcomePage(false)
        setregisterPage(true)
        console.log('register');
    }
  return (
    <div className="divwelcome" >
      <h1>Welcome</h1>
      <p>Here you can find the hottest destinations at the cheapest price</p>
      <p>To start click on registration with you have a user click on singin</p>
      <Button variant="primary" size="lg" onClick={Register} >
        Register
      </Button>{" "}
      <Button variant="primary" size="lg" onClick={SingIn}>
        SingIn
      </Button>
    </div>
  );
}

export default Welcome;
