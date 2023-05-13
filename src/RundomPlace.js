import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, ListGroup, Form } from "react-bootstrap";

function RundomPlace() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false); //dont work
  const [products, setproducts] = useState("");
  const [productCategory, setproductCategory] = useState([]); //work
  const [theId, settheId] = useState(0);
  const [num, setnum] = useState(0);
  const [randomIndex, setRandomIndex] = useState(null);

  const onSubmitt = (data) => {
    console.log("sbmit");
    console.log(data, "data"); //data = 1 string
    settheId(parseInt(data.district));
  };

  const handleClick = () => {
    if (products.length == 0 || products == null) {
      return alert("צריך לבחור קודם מחוז")
    }
    const index = Math.floor(Math.random() * num);
    setRandomIndex(index);
  };

  useEffect(() => {
    if (theId === 0) {
      return console.log("the id 0");
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://what-to-eat.herokuapp.com/products/rundom/${theId}`
        );
        console.log(res.data, "asasas");
        if (res.data.length == 0) {
          return alert("עדין לא הוכנסו מסעדות למחוז זה");
        }
        setnum(res.data.length);
        setproducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [theId]);
  return (
    <div className="rundomplace">
      <div>
        <h1>Rundom place</h1>
        <h5>תבחר את המחוז</h5>
        <Form onSubmit={handleSubmit(onSubmitt)}>
          <select {...register("district")}>
            <option selected value="1">
              {" "}
              מחוז צפון{" "}
            </option>
            <option value="2">מחוז חיפה</option>
            <option value="3">מחוז תל אביב</option>
            <option value="4">מחוז מרכז</option>
            <option value="5">מחוז ירושלים</option>
            <option value="6">מחוז דרום</option>
            <option value="7">מחוז יהודה ושומרון</option>
          </select>
          <br />
          <input type="submit" />
        </Form>
      </div>
      <div className="rundomCardPlace">
        <div className="miniDivRundomPlace">
          <button onClick={handleClick}>Generate random symbol</button>
          {randomIndex !== null && (
            <Card style={{ width: "30rem", marginRight: "30px" }}>
              <Card.Img
                className="restimg"
                variant="top"
                src={products[randomIndex].img}
              />
              <Card.Body>
                <Card.Title>{products[randomIndex].Card_Title}</Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      {products[randomIndex].text}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {products[randomIndex].location}
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default RundomPlace;
