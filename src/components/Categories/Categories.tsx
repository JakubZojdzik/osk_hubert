import { Container, Row, Col } from 'react-bootstrap';
import './Categories.scss'


export const Categories = () => {
    return (
        <Container id="kategorie">
            <Row className="align-items-center py-5">
                <Col lg={1} className="text-primary text-center categ">B</Col>
                <Col lg={true}>
                    <ul>
                        <li>pojazd samochodowy o dopuszczalnej masie całkowitej do 3,5 t (na przykład samoch&oacute;d osobowy), z wyjątkiem autobusu i motocykla</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższy pojazd połączony z lekką przyczepą (o dopuszczalnej masie całkowitej do 750 kg)</li>
                        <li>pojazd z kategorii AM</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; złożony z pojazdu samochodowego o dopuszczalnej masie całkowitej do 3,5 t (z wyjątkiem autobusu i motocykla) oraz przyczepy. Jednak łączna dopuszczalna masa całkowita całego zespołu nie może przekroczyć 3500 kg,</li>
                        <li>ciągnik rolniczy</li>
                        <li>pojazd wolnobieżny (na przykład walec)</li>
                        <li>jeśli masz prawo jazdy kategorii B od co najmniej 3 lat - motocykl o pojemności skokowej silnika do 125 cm3, mocy do 11 kW i stosunku mocy do masy własnej do 0,1 kW/kg</li>
                        <li>Wymagany wiek: <b>18 lat</b></li>
                    </ul>
                </Col>
                <Col lg={2} className="align-middle text-center price">Cena kursu:<br />2400 zł</Col>
            </Row>
            <hr />
            <Row className="align-items-center py-5">
                <Col lg={1} className="text-primary text-center align-middle categ">A</Col>
                <Col lg={true}>
                    <ul>
                        <li>każdy motocykl</li>
                        <li>pojazd z kategorii AM</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą</li>
                        <li>Wymagany wiek: <b>24 lata lub 20 lat</b> jeśli&nbsp; masz &nbsp;już od co najmniej 2 lat prawo jazdy kategorii A2</li>
                    </ul>
                </Col>
                <Col lg={2} className="align-middle text-center price">Cena kursu:<br />2200 zł lub 1100 zł w przypadku posiadania prawa jazdy kategorii A2</Col>
            </Row>
            <hr />
            <Row className="align-items-center py-5">
                <Col lg={1} className="text-primary text-center align-middle categ">A2</Col>
                <Col lg={true}>
                    <ul>
                        <li>motocykl, kt&oacute;ry spełnia wszystkie poniższe warunki:
                            <ul>
                                <li>moc do 35 kW</li>
                                <li>stosunek mocy do masy własnej do 0,2 kW/kg</li>
                                <li>nie może on powstać w wyniku wprowadzenia zmian w pojeździe, kt&oacute;rego moc przekracza dwukrotność mocy tego motocykla</li>
                            </ul>
                        </li>
                        <li>motocykl Row&oacute;jkołowy o mocy do 15 kW</li>
                        <li>pojazdy z kategorii AM</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą</li>
                        <li>Wymagany wiek: <b>18 lat</b></li>
                    </ul>
                </Col>
                <Col lg={2} className="align-middle text-center price">Cena kursu:<br />2200 zł lub 1100 zł w przypadku posiadania prawa jazdy kategorii A1</Col>
            </Row>
            <hr />
            <Row className="align-items-center py-5">
                <Col lg={1} className="text-primary text-center align-middle categ">A1</Col>
                <Col lg={true}>
                    <ul>
                        <li>motocykl o pojemności skokowej silnika do 125 cm3, mocy do 11 kW i stosunku mocy do masy własnej do 0,1 kW/kg</li>
                        <li>motocykl Row&oacute;jkołowy o mocy do 15 kW</li>
                        <li>pojazdy z kategorii AM</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą</li>
                        <li>Wymagany wiek: <b>16 lat</b></li>
                    </ul>
                </Col>
                <Col lg={2} className="align-middle text-center price">Cena kursu:<br />2000 zł</Col>
            </Row>
            <hr />
            <Row className="align-items-center py-5">
                <Col lg={1} className="text-primary center-block text-center align-middle categ">AM</Col>
                <Col lg={true}>
                    <ul>
                        <li>motorower</li>
                        <li>czterokołowiec lekki (na przykład mały quad)</li>
                        <li>zesp&oacute;ł pojazd&oacute;w &ndash; powyższe pojazdy połączone z przyczepą</li>
                        <li>Wymagany wiek: <b>14 lat</b></li>
                    </ul>
                </Col>
                <Col lg={2} className="align-middle text-center price">Cena kursu:<br />1100 zł</Col>
            </Row>
        </Container>
    );
}
