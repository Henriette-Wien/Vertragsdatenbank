import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';


function Navigation() {

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand>ContractVillain</Navbar.Brand>

            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}

                >
                    <Nav.Link href="/uebersicht">Übersicht</Nav.Link>
                    <Nav.Link href="/alleVertraege">Alle Verträge</Nav.Link>
                    <Nav.Link href="/archiv">Archiv</Nav.Link>
                    <Nav.Link href="/vertragAnlegen">Vertrag Anlegen</Nav.Link>


                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Suche"
                        className="mr-2"

                    />
                    <Button variant="outline-success">Suche</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default Navigation;
