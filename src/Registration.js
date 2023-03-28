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
          "https://what-to-eat.herokuapp.com/person/register",
          alldata
        );
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
          <Form.Label>איימל </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            {...register("email")}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>סיסמא כוללת אות קטנה אות גדולה ומספר</Form.Label>
          <Form.Control
            type="password"
            placeholder="סיסמא כוללת אות קטנה אות גדולה ומספר"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          הרשמה
        </Button>
      </Form>
    </div>
    
  )
}

export default Registration;
