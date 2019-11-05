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
                  <img
                    id="pp"
                    src="https://media.licdn.com/dms/image/C5603AQEU5QEMsZcT3g/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=City4XWIIVpPzLL7FPtcbtwQnLkfZZRkA9_3vsseBrA"
                  ></img>
                </Col>
                <Col xs="8">
                  <Row className="align-items-start">
                    <h6 id="name">{this.props.name} </h6>
                    <light id="userName">
                      @zbilalozgen <thin id="date">· 4 Nov</thin>
                    </light>
                  </Row>

                  <Row className="content">
                    <p className="d-block">
                      Learning React? Start Small!
                      <br /> "author:{" "}
                      <a id="author" href="https://twitter.com/zbilalozgen">
                        @someguy
                      </a>
                      "
                    </p>
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
