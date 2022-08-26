import './Break.scss';

import { Container } from "react-bootstrap"

export const Break = () => {
    return (
        <div className="red_bg mt-5">
            <Container className="px-5">
                <h1>Najbliższy termin spotkania organizacyjnego:</h1>
                <h1><b>16 września 2022r.</b></h1><br />
                <p>Zadzwoń do mnie: 504-177-700</p>
            </Container>
        </div>
    );
}