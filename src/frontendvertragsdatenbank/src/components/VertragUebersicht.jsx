import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {Link} from "react-router-dom";
import Chart from "react-google-charts";


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
        const aktiveVertraege = vertraege.filter(function (vertragfilter) {
            return vertragfilter.status === "aktiv";
        });
        const Lizenzvertraege = vertraege.filter(function (vertragfilter) {
            return vertragfilter.vertragsart === "Lizenzvertrag";
        });
        let anzahlLizenz = Lizenzvertraege.length;
        const Kaufvertraege = vertraege.filter(function (vertragfilter) {
            return vertragfilter.vertragsart === "Kaufvertrag";
        });
        let anzahlKauf = Kaufvertraege.length;
        const Arbeitsvertraege = vertraege.filter(function (vertragfilter) {
            return vertragfilter.vertragsart === "Arbeitsvertrag";
        });
        let anzahlArbeit = Arbeitsvertraege.length;
        const Sonstiges = vertraege.filter(function (vertragfilter) {
            return vertragfilter.vertragsart === "Sonstiges";
        });
        let anzahlSonstiges = Sonstiges.length;
        return (

            <div className="App">
                <h1>Willkommen bei Contract Villain</h1>
                <div>
                    <label>Ihre zuverl??ssige Vertragsverwaltung!</label>
                    <label>Viel Spa??!</label>
                </div>
                <p>
                    <MDBTable responsive className='table-light' hover>
                        <MDBTableHead>
                            <tr>
                                <th>Gesamt Eintr??ge in der Datenbank vorhanden</th>
                                <th>Aktive Vertr??ge</th>
                                <th>Inaktive Vertr??ge</th>
                                <th>Lizenzvertr??ge</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>{this.state.vertraege.length}</td>
                                <td>{aktiveVertraege.length}</td>
                                <td>{this.state.vertraege.length - aktiveVertraege.length}</td>
                                <td>{anzahlLizenz}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <Chart
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Vertr??ge', 'Anzahl'],
                            ['Lizenzvertr??ge', anzahlLizenz],
                            ['Kaufvertr??ge', anzahlKauf],
                            ['Arbeitsvertr??ge', anzahlArbeit],
                            ['Sonstiges', anzahlSonstiges],
                        ]}
                        options={{
                            title: 'Vertragsarten ??bersicht',
                            is3D: true,
                            responsive: true
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
                </p>
                <Link to="/vertrag">
                    <button id="anzeige" className="btn btn-light">
                        Vertr??ge anzeigen
                    </button>
                </Link>
                <Link to="/add">
                    <button id="newVertrag" className="btn btn-success">
                        Neuen Vertrag anlegen
                    </button>
                </Link>
                <p>
                    <footer>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        Software Engineering Projekt von Anna-Maria Vater, Henriette Wien, Lukas Hatzenb??hler und
                        Raffael Maier
                    </footer>
                </p>
            </div>

        )
    }
}
