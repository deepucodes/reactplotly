import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/bowling.scss";

const BowlingScreen = ({
  onChangeScore,
  calculateScore,
  displayScore,
  displayFrame,
  calcButton,
  resetScore,
  disableScore2,
  message,
  isFrame10
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "./../bowl.jpeg"})`,
        height: "2000px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="loan-request-form">
        <Container className="input-form">
          <div className="bowlingHeading">
            <p>Plotly App</p>
          </div>

          <Row>
            <Col>
              <div className="currentScoreHeading">
                <p>Current Score</p>
              </div>
              <div className="currentScore">
                <p>{displayScore}</p>
              </div>
            </Col>
            <Col>
              <div className="frameHeader">
                <p>Frame</p>
              </div>
              <div className="frame">
                <p>{displayFrame}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div><p className="message">Message Bar:  {message}</p></div>
            </Col>
          </Row>
          <Row>
            <Col className="inputVariation">
              <label class="labelDisplay">Round 1 Score</label>
              
              <input
                className="inputBox"
                required="required"
                placeholder="Round 1 Score"
                name="inputScore1"
                id="inputScore1"
                onChange={(e) => onChangeScore(e)}
              ></input>
            </Col>

            <Col className="inputVariation">
              <label class="labelDisplay">Round 2 Score</label>
              <input
                className="inputBox"
                required="required"
                disabled={disableScore2}
                placeholder="Round 2 Score"
                name="inputScore2"
                id="inputScore2"
                onChange={(e) => onChangeScore(e)}
              ></input>
            </Col>

            <Col className="inputVariation">
              <label class="labelDisplay">Bonus Round Score</label>
              <input
                className="inputBox"
                required="required"
                placeholder="Bounus Round Score"
                name="bonusScore"
                id="bonusScore"
                disabled = {isFrame10}
                onChange={(e) => onChangeScore(e)}

                
              ></input>
            </Col>
          </Row>

          <Row>
            <Col className="buttonVariation">
              <Button
                type="button"
                disabled={calcButton}
                onClick={(e) => calculateScore()}
              >
                Calculate Score
              </Button>
            </Col>
            <Col className="buttonVariation">
              <Button
                type="button"
                disabled={!calcButton}
                onClick={(e) => resetScore()}
              >
                Reset Score
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BowlingScreen;
