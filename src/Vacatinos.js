import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, ListGroup, Form } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "./UserContext";
import Button from "react-bootstrap/Button";
import { Rating } from "react-simple-star-rating";

function Vacatinos() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [inputValue, setInputValue] = useState("");
  const [cards, setCards] = useState([]);
  const [reviesCard, setreviesCard] = useState([]);
  const [addcard, setaddcard] = useState(true);
  const [cardId, setCardId] = useState("");
  const [loading, setLoading] = useState(false);
  const { value, setValue } = useContext(UserContext);
  const [isVisible, setVisibility] = useState(true);
  const [removeItem, setRemoveItem] = useState(false);
  const { isAdmin, setisAdmin } = useContext(UserContext);
  const { changecard, setchangecard } = useContext(UserContext);
  const { idChange, setidChange } = useContext(UserContext);
  const { vacations, setvacations } = useContext(UserContext);
  const { username, setusername } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [divhideandshow, setdivhideandshow] = useState({ id: "", bol: false });
  const [buttondivhideandshow, setbuttondivhideandshow] = useState("לתגובות");
  const [idToDelete, setidToDelete] = useState("");
  const [nameRevies, setnameRevies] = useState([]);

  const remove = (e) => {
    e.stopPropagation();
    if (removeItem === true) {
      return("lalal");
    }
    const id = e.target.id;
   ("remove", id);
    setidToDelete(id);
    setRemoveItem(true);
  };

  const change = (e) => {
    setvacations(false);
    setchangecard(true);
    setidChange(e.target.id);
   ("change", e.target.id);
  };

  const handleRatingChange = (e) => {
   (e, "handleRatingChange");
    setRating(e);
  };

  const revies = async () => {
    try {
      setreviesCard([]);
     (cardId, "running");
      const res = await axios.get(`https://what-to-eat.herokuapp.com/review/${cardId}`);
     (res);
      setreviesCard(res.data);
     (res.data, "revies");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const id = idToDelete;
   ("id", id);
    const fetchData = async () => {
      try {
        const res = await axios.delete(`https://what-to-eat.herokuapp.com/products/${id}`);
       (res);
        return setRemoveItem(false);
      } catch (error) {
        console.error(error);
        return setRemoveItem(false);
      }
    };
    fetchData();
  }, [removeItem]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://what-to-eat.herokuapp.com/products/");
        setCards(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) return;
   ("add folowes");
    const obj = { personId: value, productId: cardId, products: cardId };
    const fetchData = async () => {
      try {
        const res = await axios.post("https://what-to-eat.herokuapp.com/followes/", obj);
        // setCards(res.data);
       (res.data);
        return setLoading(false);
      } catch (error) {
        console.error(error);
        return setLoading(false);
      }
    };
    fetchData();
  }, [loading]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const post = async (e) => {
    if(!inputValue){
      return alert('לא כתוב כלום')
    }
    setCardId(e.target.id);
   (e.target.id);
   (inputValue);
    const id = parseInt(e.target.id);
    const obj = {
      text: inputValue,
      name: username,
      personId: value,
      productId: id,
      rating: rating,
      products: [id],
    };
    try {
     (obj, "obj");
      const res = await axios.post("https://what-to-eat.herokuapp.com/Review/", obj);
     (res, "okk");
    } catch (error) {
     (error);
    }
    revies(e);
  };

  const hide = (e) => {
    setCardId(e.target.id);
    if (divhideandshow.bol === true) {
      setdivhideandshow({ id: e.target.id, bol: false });
      return setbuttondivhideandshow("לתגובות");
    }
   ("noooooooooooooooo");
    setdivhideandshow({ id: e.target.id, bol: true });
    setbuttondivhideandshow("חזרה");
    revies(e);
  };

  return (
    <div className="vacatinosdiv">
      {cards.map((card) => {
        let districtName;
        switch (card.district) {
          case 1:
            districtName = "מחוז צפון";
            break;
          case 2:
            districtName = "מחוז חיפה";
            break;
          case 3:
            districtName = "מחוז תל אביב";
            break;
          case 4:
            districtName = "מחוז מרכז";
            break;
          case 5:
            districtName = "מחוז ירושלים";
            break;
          case 6:
            districtName = "מחוז הדרום";
            break;
          case 7:
            districtName = "מחוז יהודה ושומרון";
            break;
          default:
            districtName = "לא הוכנס מחוז";
        }
        let categoryName;
        switch (card.category) {
          case 1:
            categoryName = "אוכל מהיר";
            break;
          case 2:
            categoryName = "מסעדת שף";
            break;
          case 3:
            categoryName = "בית קפה";
            break;
          case 4:
            categoryName = "בר";
            break;
          case 5:
            categoryName = "מסעדת פועלים";
            break;
          case 4:
            categoryName = "אוכל רחוב";
            break;
          default:
            categoryName = "לא הוכנס קטגוריה";
        }

        return (
          <div className="g-4">
            <Col>
              <Card style={{ width: "30rem", marginRight: "30px" }}>
                <Card.Img className="restimg" variant="top" src={card.img} />
                <Card.Body>
                  <Card.Title>{card.Card_Title}</Card.Title>
                  <Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>{card.text}</ListGroup.Item>
                      <ListGroup.Item>{card.location}</ListGroup.Item>
                      <ListGroup.Item>{districtName}</ListGroup.Item>
                      <ListGroup.Item>{categoryName}</ListGroup.Item>
                      <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>

                <Button
                  className="buttonhideandshow"
                  variant="info"
                  type="submit"
                  onClick={hide}
                  id={card.id}
                >
                  {buttondivhideandshow}
                </Button>

                {divhideandshow.bol && divhideandshow.id == card.id && (
                  <div className="divhideandshow">
                    <div className="divcardBodyrest">
                      <Form.Control
                        type="text"
                        className="reviesInput"
                        placeholder="תגובה"
                        onChange={handleInputChange}
                      />
                      <div>
                        <Rating
                          className="Ratingstars"
                          ratingValue={rating}
                          size={24}
                          transition
                          fillColor="orange"
                          emptyColor="gray"
                          onClick={handleRatingChange}
                        />
                      </div>
                      <Button
                        variant="info"
                        type="submit"
                        id={card.id}
                        onClick={post}
                      >
                        שלח
                      </Button>
                    </div>

                    {reviesCard.map(
                      (rcard) =>
                        rcard.productId === card.id && (
                          <ListGroup key={rcard.id}>
                            <ListGroup.Item>{rcard.name}: {rcard.text} </ListGroup.Item>
                          </ListGroup>
                        )
                    )}
                  </div>
                )}

                {isAdmin && (
                  <Button className="Tochange" onClick={change} id={card.id}>
                    To change
                  </Button>
                )}
                {isAdmin && (
                  <Button
                    className="delete"
                    variant="primary"
                    type="submit"
                    onClick={remove}
                    id={card.id}
                  >
                    delete
                  </Button>
                )}
              </Card>
            </Col>
          </div>
        );
      })}
      <br></br>
    </div>
  );
}

export default Vacatinos;
