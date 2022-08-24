import { Container } from 'react-bootstrap';
import './Banner.scss';


export const Banner = () => {
    return (
        <div className="container-fluid img-bg d-flex align-items-center text-center">
            <Container>
                <h1 className="logo">Ośrodek Szkolenia Kierowców "HUBERT"</h1>
                <p className="desc align-middle">
                    w Lwówku Śląskim to firma z wieloletnim doświadczaniem.<br />
                    Podczas naszej pracy zdobyliśmy renomę i zadowolenie kilku pokoleń kursantów,<br />
                    którzy ceniąc sobie nasz profesjonalizm polecają nasze usługi.
                </p>
            </Container>
        </div>
    )
}