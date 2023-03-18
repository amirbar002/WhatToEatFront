import React, { useState, useEffect, useContext} from 'react'
import { UserContext } from "./UserContext";
import { useForm } from "react-hook-form";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';


 function Addcard() {
    const { register, handleSubmit } = useForm();
    const [alldata, setdata] = useState('');
    const {moreInfo,setmoreInfo} = useContext(UserContext)
    const { adminnavbar, setadminnavbar} = useContext(UserContext)



const info = (e) =>{
 console.log('info')
    setadminnavbar(false)
    setmoreInfo(true)

}

    useEffect(()=>{
         console.log(alldata);
      axios.post('https://what-to-eat.herokuapp.com/products/',alldata) 
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
         
    },[alldata])

     const onSubmitt = (data) => {
      console.log('sbmit');
      console.log(data);
      console.log('sbmit');
      setdata(data)
    }


    return (
        <div className='divaddmian'>
        <div className='forms'>
            <h1>add your Vacatino</h1>
            <Card className='addcardd'>
            <Form onSubmit={handleSubmit(onSubmitt)}>
                 <label>
                 קישור לתמונה
                <input type="text" placeholder='image link' {...register('img')} />
                </label>
                <Button variant="link" onClick={info}>לחץ כאן לקבלת מידע</Button>
                <br/> 
                <Form.Label>שם המקום</Form.Label>
                <Form.Control id='plasname' type="text" {...register('Card_Title')}/>
                <br/>
                <Form.Label>מיקום</Form.Label>
                <Form.Control id='plas' type="text" {...register('location')}/>
                <br/>
                <Form.Label>תיאור המקום</Form.Label>
        <Form.Control id='textareae' as="textarea" rows={3}  {...register('text')} />
                <br/>
                <select {...register("category")} >
                    <option selected value="1">אוכל מהיר</option>
                    <option value="2">מסעדת שף</option>
                    <option value="3">בית קפה</option>
                    <option value="4">בר</option>
                    <option value="5">מסעדת פועלים</option>
                    <option  value="6">אוכל רחוב</option>
                </select>
                <select {...register("district")} >
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
            </Form>
            </Card>
        </div>
        </div>
    )
}

export default Addcard