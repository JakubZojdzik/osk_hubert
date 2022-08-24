import { Col, Container, Row } from "react-bootstrap"
import './Contact.scss';

export const Contact = () => {
    return (
        <Container id="kontakt" className="mt-5">
            <Row>
                <Col lg={3} xs={12}>
                    <h3 className="text-primary">
                        Skontaktuj się
                    </h3>
                    <hr className="bold-hr text-primary" />
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
                <Col xs={12} lg={9} className="col-8">
                    <div className="embed-responsive">
                        <iframe className="yt" src="https://www.youtube.com/embed/3Y1_9CNEiks" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}