
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg border-bottom mb-5">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="/#">osk HUBERT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#">Oferta</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#">Kategorie</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/#">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};