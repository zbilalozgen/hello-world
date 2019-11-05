import React, { Component } from "react";
import "./SocialCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Header from "./Header";
import Body from "./Body";
import Icons from "./Icons";

export default class SocialCard extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />
          <Card>
            <Header />
            <Body />
            <Icons />
          </Card>
        </Container>
      </div>
    );
  }
}
