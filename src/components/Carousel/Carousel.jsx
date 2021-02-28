import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Carousel.scss"
import Location from '../Location/Location';

const Carousel  = ({data}) => {

    const VISIBLE_SLIDES_COUNT = 4;

    const elements = data.map( ({title, img, location}, index) => {
      return (
        <Slide key={index}>
          <div className="carousel__inner-slide">
            <div className={"slide__image"}>
              <Image src={img} alt=""/>
            </div>
            <div className={"slide__content"}>
              <Location title={title} location={location} />
            </div>
          </div>
        </Slide>
      )
    });

    const totalSlides = elements.length;

    return (
      <CarouselProvider
        naturalSlideWidth={150}
        naturalSlideHeight={205}
        totalSlides={totalSlides}
        visibleSlides={VISIBLE_SLIDES_COUNT}
      >
        <Slider>
          {
            elements
          }
        </Slider>
        <ButtonBack><span className="carousel-back-icon"></span></ButtonBack>
        <ButtonNext><span className="carousel-next-icon"></span></ButtonNext>
      </CarouselProvider>
  );
  }

  export default Carousel;