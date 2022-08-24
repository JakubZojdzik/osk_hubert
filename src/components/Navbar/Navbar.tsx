import { Container } from "react-bootstrap";

export const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg border-bottom bg-white">
            <Container>
                <a className="navbar-brand ms-3 text-primary" href="/#">
                    <b>osk HUBERT</b>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#">
                            Start
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#kategorie">
                            Oferta
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#start">
                            Jak zacząć?
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#kontakt">
                            Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};
