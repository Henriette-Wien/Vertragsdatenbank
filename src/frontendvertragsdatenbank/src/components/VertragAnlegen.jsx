import React, {useState, Component} from 'react';
import axios from "axios";
import {Dropdown} from 'react-bootstrap';

import VertragService from "../services/vertrag.service";

export default class VertragAnlegen extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeKosten = this.onChangeKosten.bind(this);
        this.onChangeBedingung = this.onChangeBedingung.bind(this);
        this.onChangeAnsprechperson = this.onChangeAnsprechperson.bind(this);
        this.saveVertrag = this.saveVertrag.bind(this);
        this.newVertrag = this.newVertrag.bind(this);

        this.state = {
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
    }

    onChangeBedingung(e) {
        this.setState({
            bedingung: e.target.value
        });
    }

    onChangeKosten(e) {
        this.setState({
            kosten: e.target.value
        });
    }

    onChangeAnsprechperson(e) {
        this.setState({
            ansprechperson: e.target.value
        });
    }

    saveVertrag() {
        var data = {
            name: this.state.name,
            bedingung: this.state.bedingung,
            kosten: this.state.kosten,
            ansprechperson: this.state.ansprechperson
        };

        VertragService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    bedingung: response.data.bedingung,
                    kosten: response.data.kosten,
                    ansprechperson: response.data.ansprechperson,
                    published: response.data.published,

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

    render() {
        return (

            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newVertrag}>
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
