import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
    mentor1,
    mentor2,
    mentor3,
    mentor4,
    mentor5,
    mentor6,
  } from "../../assets/index";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

function MentorInLocation() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
    
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    return ( <>
     <div className="top-mentors">
            <Container>
              <h2>Mentors in your location</h2>
              <Row>
                <Slider {...settings} className="slider">
                <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor1} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        4.5
                        <span>(340 reviews)</span>
                      </p>
                    </div>                   
                  </div>
                  <div className='mentor-details'>
                        <h4>Ralph Edwards</h4>
                       <p>Fullstack Developer</p>
                    </div>
                  </div>
                  <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor2} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        4.3
                        <span>(340 reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className='mentor-details'>
                        <h4>Kathryn Murphy</h4>
                       <p>Backend Developer</p>
                    </div>
                  </div>
                  <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor3} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        3.8
                        <span>(340 reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className='mentor-details'>
                        <h4>Beesie cooper</h4>
                       <p>Bcakend Developer</p>
                    </div>
                  </div>
                  <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor4} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        4.2
                        <span>(340 reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className='mentor-details'>
                        <h4>Karim Mohamed</h4>
                       <p>Backend Developer</p>
                    </div>
                  </div>
                  <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor5} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        4.5
                        <span>(340 reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className='mentor-details'>
                        <h4>Jhon Holmes</h4>
                       <p>Frontend Engineer</p>
                    </div>
                  </div>
                  <div className='mentorlocation'>
                  <div className="top-ment-info">
                    <Image src={mentor6} />
                    <div className="rate">
                      <p>
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "#f9d03b" }}
                        />
                        4.8
                        <span>(340 reviews)</span>
                      </p>
                    </div>
                  </div>
                  <div className='mentor-details'>
                        <h4>Jane Doe</h4>
                       <p>Fullstack Developer</p>
                    </div>
                  </div>
                </Slider>
              </Row>
            </Container>
          </div></> );
}

export default MentorInLocation;