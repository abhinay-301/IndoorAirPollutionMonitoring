
import React, { useEffect, useState } from "react";
import logo from 'co2.png';
import logo2 from 'dust.png';
import logo3 from 'mask.png';
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col
} from "reactstrap";
import axios from "axios";
import SingleContent from "./SingleContent";

function Dashboard() {

  const [temp, setTemp] = useState([]);
  const [hum, setHum] = useState([]);
  const [voc, setVOC] = useState([]);
  const [co2, setCO2] = useState([]);
  const [dust2, setDust2] = useState([]);
  const [dust10, setDust10] = useState([]);

  const fetchTemp = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/1.json?results=1`);
    setTemp(data.feeds);
  }

  const fetchHum = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/2.json?results=1`);
    setHum(data.feeds);
  }

  const fetchVOC = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/4.json?results=1`);
    setVOC(data.feeds);
  }

  const fetchCO2 = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/5.json?results=1`);
    setCO2(data.feeds);
  }

  const fetchDust2 = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/6.json?results=1`);
    setDust2(data.feeds);
  }

  const fetchDust10 = async () => {
    const { data } = await axios.get(`https://api.thingspeak.com/channels/1921573/fields/7.json?results=1`);
    setDust10(data.feeds);
  }
  
  useEffect(() => {
    fetchTemp();
    fetchHum();
    fetchVOC();
    fetchCO2();
    fetchDust2();
    fetchDust10();
  }, []);

  return (

    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="fas fa-cloud text-warning" /> */}
                      <img src={logo} alt="CO2" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">CO2</p>
                      {
                        co2 && co2.map((c) => (
                          <SingleContent
                            key={c.field5}
                            value={c.field5}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  PPM
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-thermometer-three-quarters text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Temperature</p>
                      {
                        temp && temp.map((c) => (
                          <SingleContent
                            key={c.field1}
                            value={c.field1}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  Celsius
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-tint text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Humidity</p>
                      {
                        hum && hum.map((c) => (
                          <SingleContent
                            key={c.field2}
                            value={c.field2}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  in %
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="fas fa-industry text-primary" /> */}
                      <img src={logo2} alt="Dust" style={{ width: '350px', height: '50px' }} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">PM 2.5 (Dust)</p>
                      {
                        dust2 && dust2.map((c) => (
                          <SingleContent
                            key={c.field6}
                            value={c.field6}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  PPM
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="fas fa-industry text-primary" /> */}
                      <img src={logo3} alt="Dust" style={{ width: '300px', height: '60px' }} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">PM 10 (Dust)</p>
                      {
                        dust10 && dust10.map((c) => (
                          <SingleContent
                            key={c.field7}
                            value={c.field7}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  PPM
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-city text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">VOC</p>
                      {
                        voc && voc.map((c) => (
                          <SingleContent
                            key={c.field4}
                            value={c.field4}
                          />
                        ))
                      }
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  VOC index
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
