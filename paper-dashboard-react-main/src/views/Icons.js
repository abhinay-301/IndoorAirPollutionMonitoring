
import React from "react";
import Image1 from '../SensorImages/1A.jpg';
import Image2 from '../SensorImages/1B.jpg';
import Image3 from '../SensorImages/1C.jpg';
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">Sensors List</CardTitle>
              </CardHeader>
              <CardBody className="all-icons" >
                <div id="icons-wrapper" >
                  <section>
                    <ul style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>

                      <li style={{display:'flex', flexDirection:'column', width:'300px', padding:'5px', margin:'5px 0', borderRadius:'15px', position:'relative', border:'1px solid gray'}}>
                        <img src={Image1} alt="Prana Air Sensor" style={{height:'200px'}} /><br/>
                        <b>Prana Air Sensor</b>
                        <div>Real-time air quality index icon
                          Monitors the Key Parameters in Real-time
                          Prana Air – Air Quality Monitors keep a tab on multiple air quality pollutants like PM1, PM2.5, PM10, CO2, CO, Total Volatile Organic Compounds (TVOCs), formaldehyde (HCHO), temperature, and humidity, We identify the key air quality parameters that are in sync with those set by LEED, WELL, and ASHRAE. The monitors are also well equipped for measuring toxic gases like NO2, SO2, O3, and H2S. Users can obtain the air quality data in real-time!</div>
                      </li>
                      <li style={{display:'flex', flexDirection:'column', width:'300px', padding:'5px', margin:'5px 0', borderRadius:'15px', position:'relative', border:'1px solid gray'}}>
                        <img src={Image2} alt="Prana Air Sensor" style={{height:'200px'}} /><br/>
                        <b>SHT4x Smart Gadget</b>
                        <div>The SHT4x Smart Gadget is a simple reference design circuit board which demonstrates the outstanding performance and ease of use of Sensirion's SHT4x humidity and temperature sensors. It is equipped with a LCD display showing humidity and temperature information.</div>
                      </li>
                      <li style={{display:'flex', flexDirection:'column', width:'300px', padding:'5px', margin:'5px 0', borderRadius:'15px', position:'relative', border:'1px solid gray'}}>
                        <img src={Image3} alt="Prana Air Sensor" style={{height:'200px'}} /><br/>
                        <b>Carbon Dioxide (CO2) Sensors</b>
                        <div>Our carbon dioxide (CO2) sensors utilise Non-Dispersive Infrared radiation (NDIR) technology. This method is frequently employed to find carbon-based gases in the environment, such CO2. As the CO2 gas reaches the sensor, the CO2 molecules are illuminated by an infrared (IF) source. Some of the 4.26 m wavelength light is absorbed by these molecules. The concentration of carbon dioxide is determined by this absorption, which is directly proportional to the molecules of carbon dioxide. The sensor determines the concentration based on the gas molecules’ ability to absorb light.</div>
                      </li>

                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
