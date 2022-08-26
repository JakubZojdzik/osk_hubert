import { Col, Container, Row } from "react-bootstrap"
import './Contact.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Contact = () => {
    return (
        <Container id="kontakt" className="mt-5">
            <Row>
                <Col lg={4} xs={12}>
                    <h3 className="text-primary">
                        Skontaktuj się
                    </h3>
                    <hr className="bold-hr text-primary" />
                    <address>
                        <div id="address" className="d-flex align-items-center mb-2">
                            <i className="bi bi-pin-map-fill p-2"></i>
                            <p className="align-middle m-0"><a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/HUBERT+O%C5%9Brodek+Szkolenia+Kierowc%C3%B3w/@51.1108687,15.6165572,15.38z/data=!4m8!1m2!3m1!2sHUBERT+O%C5%9Brodek+Szkolenia+Kierowc%C3%B3w!3m4!1s0x470f2f90084b6509:0xd7cb44a5ad7f647b!8m2!3d51.1135402!4d15.608705"> 59-600 Lwówek Śląski<br />ul. Słoneczna 18</a></p>
                        </div>

                        <div id="phone" className="d-flex align-items-center mb-2">
                            <i className="bi bi-telephone p-2"></i>
                            <p className="align-middle m-0"><a rel="noreferrer" target="_blank" href="tel:504177700">504-177-700</a></p>
                        </div>

                        <div id="mail" className="d-flex align-items-center mb-2">
                            <i className="bi bi-envelope p-2"></i>
                            <p className="align-middle m-0"><a rel="noreferrer" target="_blank" href="mailto:biuro@oskhubert.pl">biuro@oskhubert.pl</a></p>
                        </div>

                        <div id="mail" className="d-flex align-items-center mb-2">
                            <i className="bi bi-bank p-2"></i>
                            <p className="align-middle m-0">82 1020 2124 0000 8302 0089 0624</p>
                        </div>
                        
                    </address>
                </Col>
                <Col xs={12} lg={8} className="col-8">
                    <div className="embed-responsive">
                        <iframe className="yt" src="https://www.youtube.com/embed/3Y1_9CNEiks" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}