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
        var aktiveVertraege = vertraege.filter(function (el) {
            return el.status === "aktiv";
        });
        var Lizenzvertraege = vertraege.filter(function (el) {
            return el.vertragsart === "Lizenzvertrag";
        });
        let anzahlLizenz = Lizenzvertraege.length;
        var Kaufvertraege = vertraege.filter(function (el) {
            return el.vertragsart === "Kaufvertrag";
        });
        let anzahlKauf = Kaufvertraege.length;
        var Arbeitsvertraege = vertraege.filter(function (el) {
            return el.vertragsart === "Arbeitsvertrag";
        });
        let anzahlArbeit = Arbeitsvertraege.length;
        var Sonstiges = vertraege.filter(function (el) {
            return el.vertragsart === "Sonstiges";
        });
        let anzahlSonstiges = Sonstiges.length;
        return (

            <div className="App">
                <h1>Willkommen bei Contract Villain</h1>
                <div>
                    <label>Ihre zuverlässige Vertragsverwaltung!</label>
                </div>
                <div>
                    <label>Viel Spaß!</label>
                </div>
                <p>
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
                            ['Verträge', 'Anzahl'],
                            ['Lizenzverträge', anzahlLizenz],
                            ['Kaufverträge', anzahlKauf],
                            ['Arbeitsverträge', anzahlArbeit],
                            ['Sonstiges', anzahlSonstiges],
                        ]}
                        options={{
                            title: 'Vertragsarten Übersicht',
                            is3D: true,
                            responsive: true
                        }}
                        rootProps={{'data-testid': '2'}}
                    />
                </p>
                <Link to="/vertrag">
                    <button className="btn btn-light">
                        Verträge anzeigen
                    </button>
                </Link>
                <p>
                    <footer
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        Software Engineering Projekt von Anna-Maria Vater, Henriette Wien, Lukas Hatzenbühler und
                        Raffael
                        Maier
                    </footer>
                </p>
            </div>

        )
    }
}
