import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {Link} from "react-router-dom";

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
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {vertraege} = this.state;
        var newArray = vertraege.filter(function (el) {
            return el.status === "aktiv";
        });
        var Vertragsart = vertraege.filter(function (el) {
            return el.vertragsart === "Lizenzvertrag";
        });

        return (

            <div className="App">
                <h1>Willkommen bei Contract Villain</h1>
                <div>
                    <label>Ihre zuverlässige Vertragsverwaltung!</label>
                </div>
                <div>
                    <label>Viel Spaß!</label>
                </div>


                <MDBTable responsive className='table-light' hover>
                    <MDBTableHead>
                        <tr>
                            <th>Gesamt Einträge in der Datenbank vorhanden</th>
                            <th>Aktive Verträge</th>
                            <th>Inaktive Verträge</th>
                            <th>Lizenzverträge</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>{this.state.vertraege.length}</td>
                            <td>{newArray.length}</td>
                            <td>{this.state.vertraege.length - newArray.length}</td>
                            <td>{Vertragsart.length}</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                <Link to="/vertrag">
                    <button className="btn btn-light">
                        Verträge anzeigen
                    </button>
                </Link>
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
