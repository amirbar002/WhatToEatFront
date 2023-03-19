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
      <h1>ברוכים הבאים</h1>
      <p>האתר מה אוכלים זה פרוייקט סיים הלימודים שלי </p>
      <p>באתר זה ניתן למצוא מסעדות ותגובות על מסעדות וגם להוסיף</p>
      <Button variant="primary" size="lg" onClick={Register} >
        הרשמה
      </Button>{" "}
      <Button variant="primary" size="lg" onClick={SingIn}>
        כניסה
      </Button>
    </div>
  );
}

export default Welcome;
