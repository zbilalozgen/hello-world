import React, { Component } from "react";
import "./SocialCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FaRetweet, FaRegComment, FaEnvelope } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export default class Icons extends Component {
  constructor() {
    super();
    this.state = {
      colorFav: "black",
      colorRt: "black"
    };
  }
  render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <footer className="icons">
            <div className="d-inline icon">
              <FaRegComment /> <span> 9</span>
            </div>
            <div
              style={{ color: this.state.colorRt }}
              onClick={() => {
                const currentColorRt = this.state.colorRt;
                this.setState({
                  colorRt:
                    currentColorRt === "black" ? "rgb(23, 191, 99)" : "black"
                });
              }}
              className="d-inline icon"
            >
              <FaRetweet /> <span> 17</span>
            </div>

            <div
              style={{ color: this.state.colorFav }}
              onClick={() => {
                const currentColorFav = this.state.colorFav;
                this.setState({
                  colorFav:
                    currentColorFav === "black" ? "rgb(224, 36, 94)" : "black"
                });
              }}
              className="d-inline icon"
            >
              <MdFavoriteBorder /> <span> 62</span>
            </div>

            <div className="d-inline icon">
              <FaEnvelope />
            </div>
          </footer>
        </Col>
      </Row>
    );
  }
}
