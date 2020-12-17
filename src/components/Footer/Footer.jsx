import React from "react";
import { Container } from "react-bootstrap";

const Footer = (props) => (
  <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
    <Container style={{ display: "flex", justifyContent: "center", padding: "0 40" }}>
      <p>&copy; CopyRight 2020</p>
    </Container>
  </Container>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
