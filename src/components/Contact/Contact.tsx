import { Col, Container, Row } from "react-bootstrap"
import './Contact.scss';

export const Contact = () => {
    return (
        <Container id="kontakt" className="mt-5">
            <Row>
                <Col lg={true}>
                    <h3>
                        Skontaktuj się
                    </h3>
                    <hr className="bold-hr" />
                    <div className="info">
                        <p className="address">
                            59-600 Lwówek Śląski<br />ul. Słoneczna 18
                        </p>
                        <p className="phone">
                            504-177-700
                        </p>
                        <p className="mail">
                            biuro@oskhubert.pl
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}