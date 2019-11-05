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
        <Card.Img variant="bottom" src={this.props.image} />
        <Card.Body className="justify-content-start">
          <h6>{this.props.cardHead}</h6>
          <p>{this.props.cardBody}</p>
        </Card.Body>
      </div>
    );
  }
}
