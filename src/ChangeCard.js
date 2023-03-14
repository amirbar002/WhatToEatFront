import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

function ChangeCard() {
  const { register, handleSubmit } = useForm();
  const [cards, setCards] = useState([]);
  const [newcard, setnewcard] = useState([]);
  const [bol, setbol] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { idChange, setidChange } = useContext(UserContext);
  const {vacations, setvacations} = useContext(UserContext);
  const {changecard, setchangecard} = useContext(UserContext);

  const onSubmit = (data) => {
    console.log("submit");
    console.log(data,'dataaaaaaa');
    setnewcard(data);
    setbol(true)
  };

    useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(newcard,'newcard');
        const res = await axios.patch(
          `http://localhost:8888/products/${idChange}`, newcard);
        console.log(res, ' iii');
        setvacations(true)
        setchangecard(false)

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [bol]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8888/products/${idChange}`
        );
        console.log(res.data, "asasas");
        setCards([res.data]);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(cards, "hhhhhh");
      setIsVisible(true);
    }, 3000);
  }, []);



  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {isVisible && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {cards.map((card) => (
                <div key={card.id}>
                  <Card.Img  variant="top" src={card.img}  />
                  <Card.Body>
                  <label>
                 image link
                <input type="text" placeholder='image link' defaultValue={card.img} {...register('img')} />
                </label>
                <br/> 
                <Form.Label>שם המקום</Form.Label>
                <Form.Control id='' type="text"   defaultValue={card.Card_Title} {...register('Card_Title')}/>
                <br/>
                <Form.Label>מיקום</Form.Label>
                <Form.Control id='' type="text"  defaultValue={card.location}  {...register('location')}/>
                <br/>
                <Form.Label>תיאור המקום</Form.Label>
                <Form.Control id='' as="textarea" rows={3} defaultValue={card.text}  {...register('text')} />
                <br/>
                <select   defaultValue={card.category}  {...register("category")} >
                    <option selected value="1">אוכל מהיר</option>
                    <option value="2">מסעדת שף</option>
                    <option value="3">בית קפה</option>
                    <option value="4">בר</option>
                    <option value="5">מסעדת פועלים</option>
                    <option  value="6">אוכל רחוב</option>
                </select>
                <select defaultValue={card.district} {...register("district")} >
                    <option selected value="1">מחוז צפון</option>
                    <option value="2">מחוז חיפה</option>
                    <option value="3">מחוז תל אביב</option>
                    <option value="4">מחוז מרכז</option>
                    <option value="5">מחוז ירושלים</option>
                    <option  value="6">מחוז דרום</option>
                    <option  value="7">מחוז יהודה ושומרון</option>
                </select>
                <br/>
                <input type="submit" />
                  </Card.Body>
                </div>
              ))}
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}

export default ChangeCard;
