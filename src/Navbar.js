import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "./UserContext";
import Button from "react-bootstrap/Button";

function Navbarwed() {
  const [bol, setbol] = useState(false);
  const { registerPage, setregisterPage } = useContext(UserContext);
  const { vacations, setvacations } = useContext(UserContext);
  const { abuts, setabuts } = useContext(UserContext);
  const { rundomPlace, setrundomPlace } = useContext(UserContext);
  const { value, setValue } = useContext(UserContext);
  const { adminnavbar, setadminnavbar } = useContext(UserContext);
  const { moreInfo, setmoreInfo } = useContext(UserContext);
  const { username, setusername } = useContext(UserContext);
  useEffect(() => {

    const getEmailName = () => {
      if (!username) {
        console.log("no email provided");
        return null;
      }
      if (username.includes("@")) {
        const [name] = username.split("@");
        console.log(name);
        return setusername(name);
      }
      return console.log(username,'name');;
      
    };
    getEmailName()
  },[username]);
  

  const Home = () => {
    console.log("home");
    setabuts(false);
    setrundomPlace(false);
    setadminnavbar(false);
    setmoreInfo(false);
    setvacations(true);
  };
  const Abuts = () => {
    console.log("abuts");
    setvacations(false);
    setrundomPlace(false);
    setadminnavbar(false);
    setmoreInfo(false);
    setabuts(true);
  };
  const Place = () => {
    console.log("rundomPlace");
    setabuts(false);
    setvacations(false);
    setadminnavbar(false);
    setmoreInfo(false);
    setrundomPlace(true);
  };

  const addcard = () => {
    setabuts(false);
    setvacations(false);
    setrundomPlace(false);
    setmoreInfo(false);
    setadminnavbar(true);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">מה אוכלים</Navbar.Brand>
          <Nav className="me-auto">
            <Button variant="dark" onClick={Home}>
              דף הבית
            </Button>
            <Button variant="dark" onClick={Place}>
              rundom place
            </Button>
            <Button variant="dark" onClick={Abuts}>
              קצת עלי
            </Button>
            <Button variant="dark" onClick={addcard}>
              הוסף מסעדה
            </Button>
            <Navbar.Brand id="navbarname" href="#home"> {username} שלום </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarwed;
