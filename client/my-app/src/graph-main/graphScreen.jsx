import React from 'react';
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import GraphPlot from '../graph-stuff/graphPlot';
import "./css/bowling.scss";

const GraphScreen = ({}) => {
  return (
    <div>
      <div className="loan-request-form">
        <Container className="input-form">
          <div className="bowlingHeading">
            <p>Plotly App</p>
          </div>
          <Row>
            <Col className="inputVariation">
               <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Metric
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">BytesOut</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="inputVariation">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  GroupBy Values
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edge Location</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col className="inputVariation">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Chart Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Pie</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Time Series</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Bar Chart</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
          <GraphPlot></GraphPlot>
          </Row>
          <Row>
            <Col className="buttonVariation">
              <Button>
                Draw Graph
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default GraphScreen;
