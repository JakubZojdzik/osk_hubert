import './Break.scss';

import { Container } from "react-bootstrap"

export const Break = () => {
    return (
        <div className="red_bg mt-5">
            <Container>
                <h1>Najbliższy termin spotkania organizacyjnego:</h1>
                <p>Niestety, żadne spotkanie organizacyjne nie zostało zaplanowane.<br />Zadzwoń do mnie: 504-177-700</p>
            </Container>
        </div>
    );
}