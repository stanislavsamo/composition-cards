import { useMemo } from 'react'
import { Children } from "react";
import './App.css'
import List from './components/List'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const children = [
    {
      id: 1,
      title: "React",
      img: "https://loremflickr.com/320/240",
      type: "primary",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 2,
      title: "View",
      img: "",
      type: "primary",
      text: "Lorem ipsum dolor sit amet, consect",
    },
  ];

  return (
    <List props={children.map((item) => item.img)}>
      {children.map((children, index) => (
      <Card key={children.id} style={{ width: "18rem", margin: "20px" }}>
        <Card.Img variant="top" src={children.img} />
        <Card.Body>
          <Card.Title>{children.title}</Card.Title>
          <Card.Text>{children.text}</Card.Text>
          <Button variant={children.type}>Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
    </List>
  );
}

export default App
