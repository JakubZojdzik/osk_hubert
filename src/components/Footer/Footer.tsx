export const Footer = () => {
    return (
        <>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ WebkitTransition: "0.3s", transition: "0.3s" }}
            version="1.1"
            viewBox="0 0 1440 100"
            >
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="rgba(173, 38, 40, 1)"></stop>
                <stop offset="100%" stopColor="rgba(173, 38, 40, 1)"></stop>
                </linearGradient>
            </defs>
            <path
                fill="url(#sw-gradient-0)"
                d="M0 20l240 11.7C480 43 960 67 1440 75s960 2 1440-10 960-28 1440-26.7C4800 40 5280 60 5760 65s960-5 1440-3.3c480 1.3 960 15.3 1440 10 480-4.7 960-28.7 1440-40 480-11.7 960-11.7 1440-6.7 480 5 960 15 1440 21.7 480 6.3 960 10.3 1440 1.6 480-8.3 960-28.3 1440-26.6 480 1.3 960 25.3 1440 33.3 480 8 960 2 1440-1.7 480-3.3 960-3.3 1440-11.6 480-8.7 960-24.7 1440-18.4 480 6.7 960 36.7 1440 48.4 480 11.3 960 5.3 1440 0 480-4.7 960-8.7 1440-11.7s960-7 1440-6.7c480-.3 960 3.7 1440-5 480-8.3 960-28.3 1440-28.3s960 20 1440 25 960-5 1440-5 960 10 1200 15l240 5v40H0z"
            ></path>
            </svg>
            <footer className="text-center bg-primary">
                <div className="p-3 text-white">
                    Prawa autorskie © {new Date().getFullYear()} Ośrodek Szkolenia Kierowców HUBERT
                </div>
            </footer>
        </>
    );
}