import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function RundomPlace() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false); //dont work
  const [products, setproducts] = useState([]);
  const [productCategory, setproductCategory] = useState([]); //work
  const [theId, settheId] = useState(0);

  const onSubmitt = (data) => {
   ("sbmit");
   (data, "data");
   (products, "products");
    products.map((product) => {
      product.district.toString();
     (product.district,'hhhh');
     (product.district, "district");
      if ((product.district = data.district)) {
        setproductCategory(product);
       (product, "product category");
        setLoading(true);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://what-to-eat.herokuapp.com/products/`
        );
        setproducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

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
      {loading && <div>{productCategory}</div>}
    </div>
  );
}

export default RundomPlace;
