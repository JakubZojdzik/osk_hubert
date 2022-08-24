import { Card, Container } from "react-bootstrap";
import './Instruction.scss';
import doctor from '../../img/doctor.jpg';
import documents from '../../img/documents.jpg';
import pkk from '../../img/pkk.jpg';
import course from '../../img/course.jpg';
import arrow_r from '../../img/arrow.png';
import arrow_l from '../../img/arrow2.png';

export const Instructions = () => {
    return (
        <Container id="start" className="instructions_cont">
            <h2 className="text-center text-primary mb-5 pt-5">
                Jak uzyskać prawo jazdy?
            </h2>
            <div className="set-l">
                <Card className="step l-side">
                    <Card.Img className="cardimg" variant="top" src={doctor} alt="lekarz" />
                    <Card.Body>
                        <Card.Title>
                            Krok 1.
                        </Card.Title>
                        <Card.Text>
                            Idź do lekarza, który wykonuje badania kierowców w celu otrzymania orzeczenia lekarskiego.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <img className="arrow" src={arrow_r} alt="arrow" />
            </div>
            <div className="set-r">
                <img className="arrow" src={arrow_l} alt="arrow" />
                <Card className="step r-side">
                    <Card.Img className="cardimg" variant="top" src={documents} alt="dokumenty" />
                    <Card.Body>
                        <Card.Title>
                            Krok 2.
                        </Card.Title>
                        <Card.Text>
                            Złóż dokumenty w urzędzie starostwa powiatowego w swoim miejscu zamieszkania.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="set-l">
                <Card className="step l-side">
                    <Card.Img className="cardimg" variant="top" src={pkk} alt="numer PKK" />
                    <Card.Body>
                        <Card.Title>
                            Krok 3.
                        </Card.Title>
                        <Card.Text>
                            Odbierz numer Profilu Kandydata na Kierowcę - PKK
                        </Card.Text>
                    </Card.Body>
                </Card>
                <img className="arrow" src={arrow_r} alt="arrow" />
            </div>
            <div className="set-r">
                <Card className="step r-side">
                    <Card.Img className="cardimg" variant="top" src={course} alt="Nauki jazdy" />
                    <Card.Body>
                        <Card.Title>
                            Krok 4.
                        </Card.Title>
                        <Card.Text>
                            Zapisz się na kurs
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
}