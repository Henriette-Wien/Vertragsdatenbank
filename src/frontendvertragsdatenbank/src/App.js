import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AlleVertraege from "./components/AlleVertraege";
import VertragUebersicht from "./components/VertragUebersicht";
import VertragAnlegen from "./components/VertragAnlegen";
import Archiv from "./components/Archiv";


class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand navbar-dark bg-dark nav-tabs ">
                    <a href="/" className="navbar-brand">
                        <h1>Contract Villain</h1>
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/vertrag"} className="nav-link">
                                Alle Verträge
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Vertrag Anlegen
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/archiv"} className="nav-link">
                            Archiv
                        </Link>
                    </li>
                </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={"/"} component={VertragUebersicht}/>
                        <Route exact path="/add" component={VertragAnlegen}/>
                        <Route path="/vertrag/" component={AlleVertraege}/>
                        <Route path="/archiv" component={Archiv}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
