import React, {Component, useEffect, useState} from 'react';
import VertragService from "../services/vertrag.service";

export default class AlleVertraege extends Component {
    constructor(props) {
        super(props);
        //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveVertraege = this.retrieveVertraege.bind(this);
        this.refreshList = this.refreshList.bind(this);
        //this.setActiveTutorial = this.setActiveTutorial.bind(this);
        //this.removeAllTutorials = this.removeAllTutorials.bind(this);
        //this.searchTitle = this.searchTitle.bind(this);

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
 /*
    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }
  */

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
/*
    searchTitle() {
        TutorialDataService.findByTitle(this.state.searchTitle)
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

 */

    render() {
        const { vertraege } = this.state;
        return <div className='container'>
            <h1>Alle Verträge</h1>

            {vertraege.map(vertrag =>
                <div>
                    <h1>{vertrag.name}</h1>
                    <p>{vertrag.bedingung}</p>
                    <p>{vertrag.kosten}</p>
                </div>
            )}

        </div>
    }


}



/*
function AlleVertraege() {
    const [vertraege, setVertrag] = useState([{
        name: '',
        bedingung: '',
        kosten: ''
    }])

    useEffect(() => {
        fetch("/vertrag").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setVertrag(jsonRes));
    })



        return <div className='container'>
            <h1>Alle Verträge</h1>

            {vertraege.map(vertrag =>
                <div>
                    <h1>{vertrag.name}</h1>
                    <p>{vertrag.bedingung}</p>
                    <p>{vertrag.kosten}</p>
                </div>
            )}

        </div>

}
*/
/*

export default AlleVertraege;

 */