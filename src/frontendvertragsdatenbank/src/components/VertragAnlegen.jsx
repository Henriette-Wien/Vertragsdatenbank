import React, {Component} from 'react';

import VertragService from "../services/vertrag.service";

export default class VertragAnlegen extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeKosten = this.onChangeKosten.bind(this);
        this.onChangeLaufzeit = this.onChangeLaufzeit.bind(this);
        this.onChangeVertragsart = this.onChangeVertragsart.bind(this);
        this.onChangeBedingung = this.onChangeBedingung.bind(this);
        this.onChangeAbschlussdatum = this.onChangeAbschlussdatum.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeAnsprechperson = this.onChangeAnsprechperson.bind(this);
        this.onChangeVertragspartnerName = this.onChangeVertragspartnerName.bind(this);
        this.onChangeVertragspartnerStrasse = this.onChangeVertragspartnerStrasse.bind(this);
        this.onChangeVertragspartnerHausnummer = this.onChangeVertragspartnerHausnummer.bind(this);
        this.onChangeVertragspartnerPostleitzahl = this.onChangeVertragspartnerPostleitzahl.bind(this);
        this.onChangeVertragspartnerStadt = this.onChangeVertragspartnerStadt.bind(this);
        this.onChangeAnsprechpartner = this.onChangeAnsprechpartner.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangeTelefon = this.onChangeTelefon.bind(this);
        this.saveVertrag = this.saveVertrag.bind(this);
        this.newVertrag = this.newVertrag.bind(this);
        this.newVertragspartner = this.newVertragspartner.bind(this);
        this.newAnschrift = this.newAnschrift.bind(this);
        this.newAnsprechpartner = this.newAnsprechpartner.bind(this);

        this.state = {
            name: '',
            bedingung: '',
            kosten: '',
            laufzeit: '',
            vertragsart: '',
            status: 'aktiv',
            abschlussdatum: '',
            ansprechperson: "",
            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
        console.log("Name eingetragen");
    }

    onChangeBedingung(e) {
        this.setState({
            bedingung: e.target.value
        });
        console.log("bedingung eingetragen");
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
        console.log("Status eingetragen");
    }
    onChangeAbschlussdatum(e) {
        this.setState({
            abschlussdatum: e.target.value
        });
        console.log("Abschlussdatum eingetragen");
    }

    onChangeLaufzeit(e) {
        this.setState({
            laufzeit: e.target.value
        });
        console.log("Laufzeit eingetragen");
    }

    onChangeVertragsart(e) {
        this.setState({
            vertragsart: e.target.value
        });
        console.log("Vertragsart eingetragen");
    }

    onChangeKosten(e) {
        this.setState({
            kosten: e.target.value
        });
        console.log("Kosten eingetragen");
    }

    onChangeAnsprechperson(e) {
        this.setState({
            ansprechperson: e.target.value
        });
        console.log("Ansprechperson eingetragen");
    }

    onChangeVertragspartnerName(e) {
        this.setState({
            vertragspartnerName: e.target.value
        });
        console.log("Vertragspartner Name eingetragen");
    }

    onChangeVertragspartnerStrasse(e) {
        this.setState({
            vertragspartnerStrasse: e.target.value
        });
        console.log("Vertragspartner Straße eingetragen");
    }

    onChangeVertragspartnerHausnummer(e) {
        this.setState({
            vertragspartnerHausnummer: e.target.value
        });
    }

    onChangeVertragspartnerPostleitzahl(e) {
        this.setState({
            vertragspartnerPostleitzahl: e.target.value
        });
    }

    onChangeVertragspartnerStadt(e) {
        this.setState({
            vertragspartnerStadt: e.target.value
        });
    }

    onChangeAnsprechpartner(e) {
        this.setState({
            ansprechpartner: e.target.value
        });
    }

    onChangeMail(e) {
        this.setState({
            mail: e.target.value
        });
    }

    onChangeTelefon(e) {
        this.setState({
            telefon: e.target.value
        });
    }

    saveVertrag() {
        const ansprechpartner = {
            name: this.state.ansprechpartner,
            mail: this.state.mail,
            tel: this.state.telefon,
        };
        const anschrift = {
            strasse: this.state.vertragspartnerStrasse,
            nr: this.state.vertragspartnerHausnummer,
            plz: this.state.vertragspartnerPostleitzahl,
            stadt: this.state.vertragspartnerStadt,
        };
        const vertragspartner = {
            name: this.state.vertragspartnerName,
            anschrift: anschrift,
            ansprechpartner: ansprechpartner,
        };
        const data = {
            name: this.state.name,
            bedingung: this.state.bedingung,
            laufzeit: this.state.laufzeit,
            status: this.state.status,
            abschlussdatum: this.state.abschlussdatum,
            kosten: this.state.kosten,
            ansprechperson: this.state.ansprechperson,
            vertragsart: this.state.vertragsart,
            vertragspartner: vertragspartner
        };

        VertragService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    bedingung: response.data.bedingung,
                    laufzeit: response.data.laufzeit,
                    vertragsart: response.data.vertragsart,
                    status: response.data.status,
                    abschlussdatum: response.data.abschlussdatum,
                    kosten: response.data.kosten,
                    ansprechperson: response.data.ansprechperson,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newVertrag() {
        this.setState({
            id: null,
            name: '',
            bedingung: '',
            kosten: '',
            ansprechperson: "",
            vertragspartnerName: "",
            vertragspartnerStrasse: "",
            vertragspartnerHausnummer: "",
            vertragspartnerPostleitzahl: "",
            vertragspartnerStadt: "",
            ansprechpartner: "",
            email: "",
            telefon: "",
            vertragsart: "Lizenzvertrag",
            status: "aktiv",
            submitted: false
        });
    }

    newVertragspartner() {
        this.setState({
            name: '',
            submitted: false
        });
    }
    newAnschrift() {
        this.setState({
            strasse: '',
            nr: '',
            plz: '',
            stadt: '',
            submitted: false
        });
    }
    newAnsprechpartner() {
        this.setState({
            name: '',
            mail: '',
            tel: '',
            submitted: false
        });
    }
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Vertrag erfolgreich eingetragen!</h4>
                        <button className="btn btn-success" onClick={this.newAnschrift}>
                            Neuen Vertrag anlegen
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1>Vertrag anlegen</h1>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                                placeholder="Name"
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                style={styleFormular}
                                className="form-control"
                                id="bedingung"
                                required
                                value={this.state.bedingung}
                                onChange={this.onChangeBedingung}
                                name="bedingung"
                                placeholder="Bedingung"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="date"
                                className="form-control"
                                id="abschlussdatum"
                                required
                                value={this.state.abschlussdatum}
                                onChange={this.onChangeAbschlussdatum}
                                name="abschlussdatum"
                                placeholder="Abschlussdatum">
                            </input>
                        </div>
                        <div className="form-group">

                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="kosten"
                                required
                                defaultValue={1000}
                                value={this.state.kosten}
                                onChange={this.onChangeKosten}
                                name="kosten"
                                placeholder="Kosten"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="laufzeit"
                                required
                                value={this.state.laufzeit}
                                onChange={this.onChangeLaufzeit}
                                name="laufzeit"
                                placeholder="Laufzeit"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="ansprechperson"
                                required
                                value={this.state.ansprechperson}
                                onChange={this.onChangeAnsprechperson}
                                name="ansprechperson"
                                placeholder="Ansprechperson eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="vertragspartner.name"
                                required
                                value={this.state.vertragspartnerName}
                                onChange={this.onChangeVertragspartnerName}
                                name="vertragspartnerName"
                                placeholder="Vertragspartner eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="vertragspartnerStrasse"
                                required
                                value={this.state.vertragspartnerStrasse}
                                onChange={this.onChangeVertragspartnerStrasse}
                                name="vertragspartnerStrasse"
                                placeholder="Vertragspartner Straße eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="vertragspartnerHausnummer"
                                required
                                value={this.state.vertragspartnerHausnummer}
                                onChange={this.onChangeVertragspartnerHausnummer}
                                name="vertragspartnerHausnummer"
                                placeholder="Vertragspartner Hausnummer eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="vertragspartnerPostleitzahl"
                                required
                                value={this.state.vertragspartnerPostleitzahl}
                                onChange={this.onChangeVertragspartnerPostleitzahl}
                                name="vertragspartnerPostleitzahl"
                                placeholder="Vertragspartner Postleitzahl eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="vertragspartnerStadt"
                                required
                                value={this.state.vertragspartnerStadt}
                                onChange={this.onChangeVertragspartnerStadt}
                                name="vertragspartnerStadt"
                                placeholder="Vertragspartner Stadt eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="ansprechpartner"
                                required
                                value={this.state.ansprechpartner}
                                onChange={this.onChangeAnsprechpartner}
                                name="ansprechpartner"
                                placeholder="Ansprechpartner des Vertragspartner eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="ansprechpartner"
                                required
                                value={this.state.mail}
                                onChange={this.onChangeMail}
                                name="mail"
                                placeholder="Email der Ansprechpartners eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                style={styleFormular}
                                type="textarea"
                                className="form-control"
                                id="telefon"
                                required
                                value={this.state.telefon}
                                onChange={this.onChangeTelefon}
                                name="telefon"
                                placeholder="Telefon des Ansprechpartners eintragen"
                            />
                        </div>
                        <div className="form-group">
                            <div>
                                <label style={styleStatus}>Status</label>
                                <select onChange={this.onChangeStatus}>
                                    <option value="aktiv">Aktiv</option>
                                    <option value="inaktiv">Inaktiv</option>
                                    type="textarea"
                                    className="form-control"
                                    id="status"
                                    required
                                    onChange={this.onChangeStatus}
                                    name="status"
                                    placeholder="Status"
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={styleStatus}>Vertragsart</label>
                            <select onChange={this.onChangeVertragsart}>
                                <option value="Lizenzvertrag">Lizenzvertrag</option>
                                <option value="Arbeitsvertrag">Arbeitsvertrag</option>
                                <option value="Kaufvertrag">Kaufvertrag</option>
                                <option value="Sonstiges">Sonstiges</option>
                                type="textarea"
                                className="form-control"
                                id="vertragsart"
                                required
                                onChange={this.onChangeVertragsart}
                                name="vertragsart"
                                placeholder="Vertragsart"
                            </select>
                        </div>
                        <button onClick={this.saveVertrag} className="btn btn-success">
                            Vertrag speichern
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
const styleStatus = {
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '20px',
}
const styleFormular = {
        marginTop: '5px',
}

