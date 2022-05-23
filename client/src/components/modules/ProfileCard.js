import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import bgImg from "../../public/img/bg.jpg"
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
<Card style={{ width: '17rem' }}>
  <Card.Img variant="top" src={bgImg}/>
  <Card.Body>
    <Card.Title>Miical's blog</Card.Title>
    <Card.Text>
      Welcome to my blog! <br/>
      Here I will document my experience of studying computer science and technology.<br/>
      Progress Together!
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>University: China University of Geosciences (Beijing)</ListGroupItem>
    <ListGroupItem>Email: jason.ljcer@gmail.com</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://github.com/Miical">Github</Card.Link>
  </Card.Body>
</Card>
  );
};

export default ProfileCard;
