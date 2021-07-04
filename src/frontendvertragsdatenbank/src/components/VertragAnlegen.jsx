import React, {useState, Component} from 'react';

import VertragService from "../services/vertrag.service";

export default class VertragAnlegen extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeKosten = this.onChangeKosten.bind(this);
        this.onChangeLaufzeit = this.onChangeLaufzeit.bind(this);
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
            status: '',
            abschlussdatum: '',
            ansprechperson: "",


            submitted: false

            /*id: null,
            title: "",
            description: "",
            published: false,

            submitted: false
             */
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
        var data = {
            name: this.state.name,
            bedingung: this.state.bedingung,
            laufzeit: this.state.laufzeit,
            status: this.state.status,
            abschlussdatum: this.state.abschlussdatum,
            kosten: this.state.kosten,
            ansprechperson: this.state.ansprechperson,
        };

        VertragService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    bedingung: response.data.bedingung,
                    laufzeit: response.data.laufzeit,
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
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newAnschrift}>
                            Neuen Vertrag
                        </button>
                    </div>
                ) : (
                    <div>
                        <h1>Vertrag anlegen</h1>
                        <div className="form-group">
                            <label htmlFor="title">Name</label>
                            <input
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
                            <label htmlFor="bedingung">Bedingung</label>
                            <input
                                type="textarea"
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
                            <label htmlFor="abschlussdatum">Abschlussdatum</label>
                            <input
                                type="date"
                                className="form-control"
                                id="abschlussdatum"
                                required
                                value={this.state.abschlussdatum}
                                onChange={this.onChangeAbschlussdatum}
                                name="abschlussdatum"
                                placeholder="Abschlussdatum"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status</label>
                            <div>
                            <select>
                            <option value={this.state.status} onChange={this.onChangeStatus}>Aktiv</option>
                                <option value="inaktiv">Inaktiv</option>
                                type="textarea"
                                className="form-control"
                                id="status"
                                required
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                                name="status"
                                placeholder="Status"
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="kosten">Kosten</label>
                            <input
                                type="textarea"
                                className="form-control"
                                id="kosten"
                                required
                                value={this.state.kosten}
                                onChange={this.onChangeKosten}
                                name="kosten"
                                placeholder="Kosten"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="laufzeit">Laufzeit</label>
                            <input
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
                            <label htmlFor="ansprechperson">Ansprechperson intern</label>
                            <input
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
                            <label htmlFor="vertragspartnerName">Name des Vertragspartners</label>
                            <input
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
                            <label htmlFor="vertragspartnerStrasse">Straße des Vertragspartners</label>
                            <input
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
                            <label htmlFor="vertragspartnerHausnummer">Hausnummer des Vertragspartners</label>
                            <input
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
                            <label htmlFor="vertragspartnerPostleitzahl">Postleitzahl des Vertragspartners</label>
                            <input
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
                            <label htmlFor="vertragspartnerStadt">Stadt des Vertragspartners</label>
                            <input
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
                            <label htmlFor="ansprechpartner">Ansprechpartner des Vertragspartners</label>
                            <input
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
                            <label htmlFor="mail">Email des Ansprechpartners</label>
                            <input
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
                            <label htmlFor="telefon">Telefon des Ansprechpartners</label>
                            <input
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

                        <button onClick={this.saveVertrag} className="btn btn-success">
                            Vertrag speichern
                        </button>
                    </div>
                )}
            </div>
        );
    }
}


/*
function VertragAnlegen() {
    const [input, setInput] = useState({
        name: '',
        bedingung: '',
        kosten: '',
        ansprechpersonI: "",
        vertragspartenerName: "",
        vertragspartenerStrasse: "",
        vertragspartenerHausnummer: "",
        vertragspartenerPostleitzahl: "",
        vertragspartenerStadt: "",
        ansprechpersonE: "",
        email: "",
        telefon: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const neuerVertrag = {
            name: input.name,
            bedingung: input.bedingung,
            kosten: input.kosten,
        }
        axios.post('http://localhost:3001/create', neuerVertrag)
    }


    return (
        <div className="App">
            <h1>Vertrag Anlegen</h1>
            <form>
                <h3>Vertragsdaten</h3>
                <div className='form-group'>
                    <input onChange={handleChange} value={input.name} name="name" autoComplete="off"
                           className='from-control' placeholder="Name"></input>
                </div>

                <div className='form-group'>
                    <textarea onChange={handleChange} name="bedingung" value={input.bedingung} autoComplete="off"
                              className='from-control' placeholder="Bedingung"></textarea>
                </div>
                <div><label>Abschlussdatum:</label></div>
                <div>
                    <input type="date" placeholder="Abschlussdatum" className='from-control'></input>
                </div>
                <div><label>Vertragslaufzeit:</label></div>
                <div>
                    <input type="date" placeholder="Laufzeit" className='from-control'></input>
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">Status</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Aktiv</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Inaktiv</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div>
                    <input onChange={handleChange} value={input.kosten} name="kosten" type="number"
                           placeholder="Kosten in €" className='from-control'></input>
                </div>

                <div>
                    <input placeholder="Ansprechperson intern" className='from-control'></input>
                </div>
                <h3>Vertragspartner</h3>
                <div>
                    <input placeholder="Name"></input>
                </div>

                <div>
                    <input placeholder="Straße"></input>
                </div>
                <div>
                    <input placeholder="Hausnummer"></input>
                </div>
                <div>
                    <input placeholder="Postleitzahl"></input>
                </div>
                <div>
                    <input placeholder="Stadt"></input>
                </div>
                <div>
                    <input placeholder="Ansprechperson"></input>
                </div>
                <div>
                    <input placeholder="E-Mail"></input>
                </div>
                <div>
                    <input placeholder="Telefon"></input>
                </div>
                <button onClick={handleClick} className="btn btn-lg btn-info">Vertrag anlegen</button>
            </form>
        </div>
    )
}
*/
