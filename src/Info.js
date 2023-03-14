import React, {useContext} from 'react'
import whatapp from './whatapp.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { UserContext } from "./UserContext";


function Info() {

const {moreInfo, setmoreInfo} = useContext(UserContext)
const {adminnavbar , setadminnavbar} = useContext(UserContext);
  
const back = (e) =>{
  console.log('back');
  setmoreInfo(false)
  setadminnavbar(true)
}
  return (
    <div>
        <div className='divimg'>
        <Card id='imgcard' style={{ width: '18rem' }}>
      <Card.Img id='img' variant="top" src={whatapp} />
      <Card.Body>
        <Card.Text>
          <p>על מנת להוסיף תמונה לאתר יש לחפש אותה בגוגל כאשר מצאת את התמונה לחץ עלייה ותפעל לפי הבלים הבאים: </p>
          <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">לחץ על השלוש נקודת בצד שמאל למעלה של התמונה</ListGroup.Item>
      <ListGroup.Item as="li">יש ללחוץ על שיתוף</ListGroup.Item>
      <ListGroup.Item as="li">אז יפתח חלון בחלק התחתון של המסך שבו תלחצו על העתק ותדביק איפה שרשום קישור לתמונה</ListGroup.Item>
    </ListGroup>
        </Card.Text>
        <Button variant="primary" onClick={back}>חזרה</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Info