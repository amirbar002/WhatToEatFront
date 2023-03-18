import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function RundomPlace() {
  const { value, setValue } = useContext(UserContext);
  const [loading, setLoading] = useState(false);//dont work
  const [products, setProducts] = useState([]);
  const [render, setrender] = useState(true);//work
  const [theId , settheId] = useState(0);  

const remove = async (e)=>{
    e.stopPropagation();
    if(loading === true){
        return console.log('hahahaah');
      }
    const id = e.target.id;
    console.log(id);
    settheId(id)
   setLoading(true)
}

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://what-to-eat.herokuapp.com/followes/${value}?withRelations=true`
        );
        setProducts(res.data);
        setrender(false)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [render]);


  return (
    <div>
        <div>
            <h1>Rundom place</h1>
        </div>
    <div>
     
    </div>
    </div>
  );
}

export default RundomPlace;
