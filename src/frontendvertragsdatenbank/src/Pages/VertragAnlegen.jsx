import React, {useState} from 'react';
import axios from "axios";
import {Dropdown} from 'react-bootstrap';


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

export default VertragAnlegen;