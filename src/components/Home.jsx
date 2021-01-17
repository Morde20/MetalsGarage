import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export default function About() {
  return (
    <div className='homeDiv'>
      <h1 className='mainH1'>מ.ד.א.י - שירותי מיזוג אוויר בע״מ</h1>
      <p>
        חברתנו בעלת נסיון של 20 שנה בתחום מיזוג אוויר לרכב. החברה נותנת שירות
        באחריות לחברת ''אלכס אוריגינל בע''מ'' ו- ''אוטו קור תעשיות בע''מ'״ ועוד.
        בנוסף אנו מבצעים זיווד ברכבים מסחריים כגון מחיצה, פתיחת חלונות , הוספת
        מושבים, הוספת מידוף, תאי אחסון, איטום ובידוד עבור רכבי הובלה בקירור
        ושינוי מבנה שיעמוד בתקן משרד הרישוי.
      </p>
      <Carousel className='carouselBg'>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50 '
            src='/img/car9.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p style={{ color: "white" }}>דיגום רכב מסחרי</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50'
            src='/img/car6.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p style={{ color: "white" }}>זיווד רכב מסחרי</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50'
            src='/img/car2.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p style={{ color: "white" }}>מידוף</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='d-block slidePic w-50'
            src='/img/car12.jpg'
            alt='Fourth slide'
          />

          <Carousel.Caption>
            <p style={{ color: "white" }}>הובלה בקירור</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className='secondH1'>מוסך מורשה - רשיון מס׳ 5227</h1>

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
          <p>
            <a href='https://ul.waze.com/ul?ll=32.77420000%2C35.04389156&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'>
              התעשייה 22 , נשר
            </a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
