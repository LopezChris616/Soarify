import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap';

const CreateAPlan = (props) => {
  const { image, alt, title, body } = props;
  return (
    <Col xs="12" md="4">
      <Card style={{ border: 'none' }}>
        <CardImg top src={image} alt={alt} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{body}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreateAPlan;
