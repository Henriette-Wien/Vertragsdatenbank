import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";


export default class VertragUebersicht extends Component {

    constructor(props) {
        super(props);
        this.retrieveVertraege = this.retrieveVertraege.bind(this);
        this.state = {
            vertraege: [],
        }
    }

    componentDidMount() {
        this.retrieveVertraege();
    }

    retrieveVertraege() {
        VertragService.getAllVertraege()
            .then(response => {
                this.setState({
                    vertraege: response.data,
                });
                console.log(response.data.length);
            })
            .then(response => {

            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {vertraege} = this.state;
        const aktiveVertrage = this.state.vertraege.filter(vertraege => vertraege.status = "aktiv").length;
        return (

            <div className="App">
                <h1>Willkommen bei Contract Villain</h1>
                <div>
                    <label>Ihre zuverlässige Vertragsverwaltung!</label>
                </div>
                <div>
                    <label>Viel Spaß!</label>
                </div>

                <div>
                    <label>{this.state.vertraege.length} Einträge in der Datenbank vorhanden
                    </label>

                </div>

                <footer
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    Software Engineering Projekt von Anna-Maria Vater, Henriette Wien, Lukas Hatzenbühler und Raffael
                    Maier
                </footer>
            </div>
        )
    }
}
