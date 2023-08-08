
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Roll Number</th>
                      <th >Institute</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>K Lakshmi Nirmala</td>
                      <td>2021101126</td>
                      <td>IIIT Hyderabad</td>
                      <td>UG2</td>
                    </tr>
                    <tr>
                      <td>Abhinay maurya</td>
                      <td>2021101132</td>
                      <td>IIIT Hyderabad</td>
                      <td>UG2</td>
                    </tr>
                    <tr>
                      <td>V Siva Koti Reddy</td>
                      <td>2021101135</td>
                      <td>IIIT Hyderabad</td>
                      <td>UG2</td>
                    </tr>
                    
                    <tr>
                      <td>Abid khursheed</td>
                      <td>2021101136</td>
                      <td>IIIT Hyderabad</td>
                      <td>UG2</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
