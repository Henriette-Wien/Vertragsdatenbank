import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {Link} from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup'


export default class AlleVertraege extends Component {
    table_element;

    constructor(props) {
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.retrieveVertraege = this.retrieveVertraege.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.searchVertragById = this.searchVertragById.bind(this);
        this.state = {
            vertraege: [],
        };
    }

    componentDidMount() {
        this.retrieveVertraege();
    }

    onChangeSearch(e) {
        const searchVertragbyId = e.target.value;

        this.setState({
            searchVertragById: searchVertragbyId
        });
    }

    retrieveVertraege() {
        VertragService.getAllVertraege()
            .then(response => {
                this.setState({
                    vertraege: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    getParameter = (key) => {

        // Address of the current window
        let address = window.location.search

        // Returns a URLSearchParams object instance
        let parameterList = new URLSearchParams(address)

        // Returning the respected value associated
        // with the provided key
        return parameterList.get(key)
    }


    deleteVertrag() {
        VertragService.delete(this.table_element)
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }
    editVertrag(){
        window.location.assign("/add?id=" + this.table_element)
    }

    refreshList() {
        this.retrieveVertraege();
    }
    searchVertragById() {
        VertragService.getVertragById(this.state.searchVertragById)
            .then(response => {
                this.setState({
                    vertrag: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const columns = [
            {
            dataField: 'id',
            text: 'ID',
            sort: true
        }, {
            dataField: 'name',
            text: 'Name',
            sort: true,
            editable: true,

        }, {
            dataField: 'bedingung',
            text: 'Bedingung',
            sort: true
        }, {
            dataField: 'abschlussdatum',
            text: 'Abschlussdatum',
            sort: true,
            formatter: cell => cell != null ?  new Date(cell).toLocaleDateString() : "Kein Datum"
        }, {
            dataField: 'status',
            text: 'Status',
            sort: true,
        }, {
            dataField: 'kosten',
            text: 'Kosten',
            sort: true
        }, {
            dataField: 'laufzeit',
            text: 'Laufzeit',
            sort: true
        }, {
            dataField: 'ansprechperson',
            text: 'Ansprechperson',
            sort: true
        }, {
            dataField: 'vertragspartner.name',
            text: 'Vertragspartner Name',
            sort: true
        }, {
            dataField: 'vertragspartner.anschrift.strasse',
            text: 'Vertragspartner Straße',
            sort: true
        }, {
            dataField: 'vertragspartner.anschrift.nr',
            text: 'Vertragspartner Hausnummer',
            sort: true
        }, {
            dataField: 'vertragspartner.anschrift.plz',
            text: 'Vertragspartner Postleitzahl',
            sort: true
        }, {
            dataField: 'vertragspartner.anschrift.stadt',
            text: 'Vertragspartner Stadt',
            sort: true
        }, {
            dataField: 'vertragspartner.ansprechpartner.name',
                text: 'Ansprechpartner Name',
                sort: true
            }, {
                dataField: 'vertragspartner.ansprechpartner.mail',
                text: 'Ansprechpartner Mail',
                sort: true
            }, {
                dataField: 'vertragspartner.ansprechpartner.tel',
                text: 'Ansprechpartner Telefon',
                sort: true
            }, {
                dataField: 'vertragsart',
                text: 'Vertragsart',
                sort: true
            }];

        const {vertraege} = this.state;
        const {SearchBar} = Search;
        const selectRow = {
            mode: 'radio',
            style: { background: 'grey' },
            clickToSelect: true,
            onSelect: (row, isSelect, rowIndex, e) => {
                this.table_element = row.id;
                console.log(row.id);
                console.log(isSelect);
                console.log(rowIndex);
                console.log(e);
            },
            onSelectAll: (isSelect, rows, e) => {
                console.log(isSelect);
                console.log(rows);
                console.log(e);
            }
        };
        const cellEdit = cellEditFactory({
            mode: 'click',
        });

        let temp_id = this.getParameter("id");

        return <div className='container'>
            <h1>Alle Verträge</h1>
            {temp_id}
            <ToolkitProvider
                keyField="id"
                data={vertraege}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <hr/>
                            <label><span className="badge">{this.state.vertraege.length}</span>Einträge in der Datenbank
                                vorhanden
                            </label>
                            <BootstrapTable
                                {
                                    ...props.baseProps}
                                bootstrap4
                                wrapperClasses="table-responsive"
                                rowClasses="text-nowrap"
                                hover
                                striped
                                selectRow={selectRow}
                                cellEdit={cellEdit}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
            <ButtonGroup>
                <button id="deleteButton" className={"btn btn-primary"} onClick={() => (this.deleteVertrag())}>Löschen
                </button>
                <button id="editButton" className={"btn btn-success"} onClick={() => this.editVertrag()}>Bearbeiten
                </button>
                <Link to="/add">
                    <button id="NewVertrag" className="btn btn-light">
                        Neuen Vertrag anlegen
                    </button>
                </Link>
            </ButtonGroup>
        </div>
    }
}

