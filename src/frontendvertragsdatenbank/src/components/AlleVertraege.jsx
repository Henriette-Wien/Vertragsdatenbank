import React, {Component} from 'react';
import VertragService from "../services/vertrag.service";

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
            /* currentVertrag: null,
             currentIndex: -1,

             */
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
        const { vertraege } = this.state;
        return <div className='container'>
            <h1>Alle Verträge</h1>
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Id"
                            value={this.searchVertragById()}
                            onChange={this.onChangeSearch}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchVertragById}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {vertraege.map(vertrag =>
                    <div>
                        <h1>{vertrag.name}</h1>
                        <p>{vertrag.bedingung}</p>
                        <p>{vertrag.kosten}</p>
                    </div>
                )}
            </div>
        </div>
    }
}

