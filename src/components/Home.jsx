import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function About() {
  return (
    <div className='homeDiv'>
      <h1 className='mainH1'>מ.ד.א.י - שירותי מיזוג אוויר בע״מ</h1>
      <p>
        חברתנו בעלת נסיון של 20 שנה בתחום מיזוג אוויר לרכב. החברה נותנת שירות
        באחריות לחברת ''אלכס אוריגינל בע''מ'' ו- ''אוטו קור תעשיות
        בע''מ'״,קלימטק ועוד. בנוסף אנו מבצעים זיווד ברכבים פרטיים ומסחריים כגון
        מחיצה, פתחתי חלונות , הוספת מושבים, הוספת מידוף ותאי אחסון ואיטום ובידוד
        עבור רכבי הובלה בקירור.
      </p>
      <Carousel className='carouselBg'>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50 '
            src='/img/car9.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p>דיגום רכב מסחרי</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50'
            src='/img/car6.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p>זיווד רכב מסחרי</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50'
            src='/img/car2.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p>מידוף</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className='secondH1'>מוסך מורשה</h1>

      <img className='coWorkersImg' src='/img/alexoriginal.png' alt='' />
      <img className='coWorkersImg' src='/img/autocool.jpeg' alt='' />

      <Jumbotron fluid>
        <Container className='container'>
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
    </div>
  );
}