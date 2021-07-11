import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';


export default class AlleVertraege extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.retrieveVertraege = this.retrieveVertraege.bind(this);
        this.refreshList = this.refreshList.bind(this);
        //this.setActiveTutorial = this.setActiveTutorial.bind(this);
        //this.removeAllTutorials = this.removeAllTutorials.bind(this);
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

    refreshList() {
        this.retrieveVertraege();
        /* this.setState({
            currentVertrag: null,
            currentIndex: -1
        });

         */
    }
/*
    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index
        });
    }

 */
/*
    removeAllTutorials() {
        TutorialDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

 */
//            <BootstrapTable striped hover keyField='id' data={ vertraege } columns={ columns } />

    searchVertragById() {
        VertragService.getVertragById(this.state.searchVertragById)
            .then(response => {
                this.setState({
                    tutorials: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const columns = [{
            dataField: 'name',
            text: 'Name',
            sort: true
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
            sort: true
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
        }];

      const { vertraege } = this.state;
      const { SearchBar } = Search;
      return <div className='container'>
            <h1>Alle Verträge</h1>


          <ToolkitProvider
              keyField="id"
              data={ vertraege }
              columns={ columns }
              search
          >
              {
                  props => (
                      <div>
                          <SearchBar { ...props.searchProps } />
                          <hr />
                          <BootstrapTable
                              {
                                  ...props.baseProps }
                              bootstrap4
                              wrapperClasses="table-responsive"
                              rowClasses="text-nowrap"
                              hover
                              striped
                          />
                      </div>
                  )
              }
          </ToolkitProvider>
        </div>
    }
}

