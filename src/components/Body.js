import React, { Component } from "react";
import "./SocialCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Card.Img
          variant="bottom"
          src="http://res.cloudinary.com/practicaldev/image/upload/c_fit,co_rgb:fcfcfc,h_270,l_text:Montserrat_74:Learning%2520React%3F%2520Start%2520Small.,w_810/c_fit,co_rgb:00c673,g_north_east,h_499,l_text:Roboto%20Mono_44:Dave%20Ceddia,w_716,y_421,x_185/v1489507069/devsocial_base_code1_itwdxx.png?default&t=1498139950"
        />
        <Card.Body className="justify-content-start">
          <h6>Learning React? Start Small!</h6>
          <p>
            Can't pry yourself away from the tutorials? The cure is to make tiny
            little experiment apps.
          </p>
        </Card.Body>
      </div>
    );
  }
}
