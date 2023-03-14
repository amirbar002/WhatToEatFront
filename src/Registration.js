import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "./UserContext";

function Registration() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [alldata, setdata] = useState("");
  const [id, setTheId] = useState(0);
  const { value, setValue } = useContext(UserContext);
  const { registerPage, setregisterPage } = useContext(UserContext);
  const { singInPage, setsingInPage } = useContext(UserContext);

  const onSubmitt = (data) => {
    if (loading === true) {
      return console.log("hahahaah");
    }
    console.log("sbmit");
    setdata(data);
    setLoading(true);
  };

  useEffect(() => {
    if (!alldata) return;
    const postData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8888/person/register",
          alldata
        );
        console.log(res, "res");
        console.log(res.data.newCustomer.id, "res.locals");
        setValue(res.data.newCustomer.id)
        localStorage.removeItem("accessToken");
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data.accessToken)
        );
        setregisterPage(false)
        setregisterPage(false)
        setsingInPage(true)
        return setLoading(false);
      } catch (err) {
        console.error(err);
        return setLoading(false);
      }
    };
    postData();
  }, [loading]);

  return (
   
    <div className="divRegistration" >
      
      <Form onSubmit={handleSubmit(onSubmitt)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>your email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
    
  )
}

export default Registration;
