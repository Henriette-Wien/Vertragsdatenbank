import React from 'react';


function VertragUebersicht() {
    return (
        <div className="App">
            <h1>Willkommen bei Contract Villain</h1>
            <div>
                <label>Ihre zuverlässige Vertragsverwaltung!</label>
            </div>
            <div>
                <label>Viel Spaß!</label>
            </div>

            <footer
                style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Software Engineering Projekt von Anna-Maria Vater, Henriette Wien, Lukas Hatzenbühler und Raffael Maier
            </footer>
        </div>
    )
}

export default VertragUebersicht;