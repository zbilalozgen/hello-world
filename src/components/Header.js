import React, { Component } from "react";
import "./SocialCard.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body id="card-body">
            <Card.Text>
              <Row>
                <Col xs="4" md="2" className="d-flex align-items-center img">
                  <img id="pp" src={this.props.pp}></img>
                </Col>
                <Col xs="8">
                  <Row className="align-items-start">
                    <h6 id="name">{this.props.name} </h6>
                    <light id="userName">
                      <a href={`https://twitter.com/${this.props.userName}`}>
                        {this.props.userName}
                      </a>{" "}
                      <thin id="date">· {this.props.date}</thin>
                    </light>
                  </Row>

                  <Row className="content">
                    <p className="d-block">{this.props.tweet}</p>
                  </Row>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Header;
