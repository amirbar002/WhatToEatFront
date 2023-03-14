import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Registration from "./Registration";
import Navbarwed from "./Navbar";
import "./App.css";
import SingIn from "./SingIn";
import Vacatinos from "./Vacatinos";
import Welcome from "./Welcome";
import Abuts from "./Abuts";
import RundomPlace from "./RundomPlace";
import Addcard from "./Addcard";
import ChangeCard from "./ChangeCard";
import Info from "./Info";

function App() {
  const [value, setValue] = useState(0);
  const [welcomePage, setwelcomePage] = useState(true); //show;
  const [registerPage, setregisterPage] = useState(false); //hide
  const [singInPage, setsingInPage] = useState(false); //hide;
  const [vacations, setvacations] = useState(false); //hide;
  const [navbar, setnavbar] = useState(false); //hide;
  const [abuts, setabuts] = useState(false); //hide;
  const [rundomPlace, setrundomPlace] = useState(false); //hide;
  const [isAdmin, setisAdmin] = useState(false); //hide;
  const [adminnavbar, setadminnavbar] = useState(false); //hide;
  const [changecard, setchangecard] = useState(false); //hide;
  const [idChange, setidChange] = useState(0); //hide;
  const [moreInfo, setmoreInfo] = useState(false); //hide;
  const [username , setusername] = useState(''); //hide;
  
  

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          value,
          setValue,
          registerPage,
          setregisterPage,
          singInPage,
          setsingInPage,
          vacations,
          setvacations,
          welcomePage,
          setwelcomePage,
          navbar,
          setnavbar,
          abuts,
          setabuts,
          rundomPlace,
          setrundomPlace,
          isAdmin,
          setisAdmin,
          adminnavbar,
          setadminnavbar,
          changecard,
          setchangecard,
          idChange,
          setidChange,
          moreInfo,
          setmoreInfo,
          username,
          setusername
        }}
      >
        {navbar && <Navbarwed />}
        {changecard && <ChangeCard />}
        {welcomePage && <Welcome />}
        {adminnavbar && <Addcard />}
        {registerPage && <Registration />}
        {singInPage && <SingIn />}
        {vacations && <Vacatinos />}
        {rundomPlace && <RundomPlace />}
        {abuts && <Abuts />}
        {moreInfo && <Info />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
