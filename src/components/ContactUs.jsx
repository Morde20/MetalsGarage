import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Jumbotron fluid>
      <Container className='cardText'>
        <h1>צרו איתנו קשר</h1>
        <p className='aboutUsP'>טלפון</p>
        <p>
          <a href='tel:048215183'>04-8215183</a>
        </p>
        <p>
          <a href='tel:0547717908'>054-7717908</a>
        </p>
        <p className='aboutUsP'>מייל</p>
        <p>
          <a href='mailto:madi6@bezequint.net'>madi6@bezequint.net</a>
        </p>
        <p className='aboutUsP'>כתובת</p>
        <p>התעשייה 22 , נשר</p>
      </Container>
    </Jumbotron>
  );
}
