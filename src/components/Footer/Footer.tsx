export const Footer = () => {
    return (
        <>
            <svg style={{"marginTop": "-12rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#AD2628" d="M0,288L120,288C240,288,480,288,720,282.7C960,277,1200,267,1320,261.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <footer className="text-center bg-primary">
                <div className="p-3 text-white">
                    Prawa autorskie © {new Date().getFullYear()} Ośrodek Szkolenia Kierowców HUBERT
                </div>
            </footer>
        </>
    );
}