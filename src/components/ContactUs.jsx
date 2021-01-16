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
        <p>
          <a href='https://ul.waze.com/ul?ll=32.77420000%2C35.04389156&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
            התעשייה 22 , נשר
          </a>
        </p>
      </Container>
    </Jumbotron>
  );
}
