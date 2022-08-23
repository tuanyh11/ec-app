import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const SecondLayout = ({ children }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>sibar</Col>
          <Col lg={8}>
            <div>{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondLayout;
