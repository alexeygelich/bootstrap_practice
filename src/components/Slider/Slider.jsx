import React from "react";
import PropTypes from "prop-types";
import img1 from "../../images/pexels-photo-3548379.jpeg";
import img2 from "../../images/pexels-photo-3873607.jpeg";
import img3 from "../../images/pexels-photo-4802876.jpeg";
import img4 from "../../images/pexels-photo-5596458.jpeg";
import { Carousel } from "react-bootstrap";

const Slider = (props) => (
  <Carousel>
    <Carousel.Item style={{ height: 400 }}>
      <img src={img1} alt="img1" className="d-block w-50" />
      <Carousel.Caption>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus voluptates itaque consequatur
          voluptatibus quaerat alias cumque. Recusandae at a ipsam autem eius rerum enim magnam, laboriosam ad
          voluptatibus cum!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: 400 }}>
      <img src={img2} alt="img2" className="d-block w-50" />
      <Carousel.Caption>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus voluptates itaque consequatur
          voluptatibus quaerat alias cumque. Recusandae at a ipsam autem eius rerum enim magnam, laboriosam ad
          voluptatibus cum!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: 400 }}>
      <img src={img3} alt="img3" className="d-block w-50" />
      <Carousel.Caption>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus voluptates itaque consequatur
          voluptatibus quaerat alias cumque. Recusandae at a ipsam autem eius rerum enim magnam, laboriosam ad
          voluptatibus cum!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{ height: 400 }}>
      <img src={img4} alt="img4" className="d-block w-50" />
      <Carousel.Caption>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ducimus voluptates itaque consequatur
          voluptatibus quaerat alias cumque. Recusandae at a ipsam autem eius rerum enim magnam, laboriosam ad
          voluptatibus cum!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

Slider.propTypes = {
  // bla: PropTypes.string,
};

Slider.defaultProps = {
  // bla: 'test',
};

export default Slider;
