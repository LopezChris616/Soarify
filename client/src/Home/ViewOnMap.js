import React from "react";
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from "react-fontawesome";

const ViewOnMap = () => {
    return(
        <div style={{padding: "80px 10px"}}>
            <h2 style={{textDecoration: "underline", textAlign: "center", paddingBottom: "20px"}}>View On Google Maps</h2>
            <Container>
                <Row xs="12" lg="4">
                    <Col>
                        <p style={{paddingTop: "50px"}}>Not sure where to go next? Maybe you'd like a visual representation of where you are planning on going? We've got the perfect solution!</p>
                    </Col>
                    <Col>
                        <FontAwesome name="globe-americas" size="10x" style={{color: "#007BFF", fontSize: "300px"}} />
                    </Col>
                    <Col>
                        <p style={{paddingTop: "50px"}}>We have integrated Google Maps to help you ensure that you have made the right decision on your choice for your next vacation and to help you figure out where you'd like to go to next.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewOnMap;