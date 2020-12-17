import React from "react";
import PropTypes from "prop-types";
import { Jumbotron as Jambo } from "react-bootstrap";
import img1 from "../../images/pexels-photo-3548379.jpeg";
import img2 from "../../images/pexels-photo-3873607.jpeg";
import img3 from "../../images/pexels-photo-4802876.jpeg";
import img4 from "../../images/pexels-photo-5596458.jpeg";
import slyled from "styled-components";

const Styles = slyled.div`
.jumbo{
  background: url(${img2}) no-repeat fixed bottom;
  background-size:cover;
  color:#efefef;
  height: 600px;
  position: reletive;
  z-index: -2
}
.oberlay{
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  background-color: #000;
  opacity: 0.6;
}
`;

const JamboTron = (props) => (
  <>
    <Styles>
      <Jambo className="jumbo">
        <div className="overlay"></div>
      </Jambo>
    </Styles>
  </>
);

export default JamboTron;
