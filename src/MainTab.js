/*
  Import the React Bootstrap components that you want to use.

  In a real environment (Webpack / Browserify, ES6) this would be:
    import { Tab, Tabs } from 'react-bootstrap';
*/
import React from 'react';
import {Tab, Tabs, ListGroup, ListGroupItem} from 'react-bootstrap';
import InitPersons from './InitPersons';

class MainTab extends React.Component {
    constructor(props) {
        super();
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1
        };

        // Bind the handleSelect function already here (not in the render function)
        this.handleSelect = this.handleSelect.bind(this);
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Missing">
                    People who were recently active but did not badge out.
                    <ListGroup>

                        <ListGroupItem>Price, Tom</ListGroupItem>
                        <ListGroupItem>Khan, Asad</ListGroupItem>
                    </ListGroup>
                </Tab>
                <Tab eventKey={2} title="Evacuated">
                    People who badged out properly after the alert (recently).
                    <ListGroup>
                        <ListGroupItem>Price, Tom</ListGroupItem>
                        <ListGroupItem>Khan, Asad</ListGroupItem>
                    </ListGroup>
                </Tab>
                <Tab eventKey={3} title="Verified">
                    As people are found, they are moved to this list
                    <ListGroup>
                        <ListGroupItem>Price, Tom</ListGroupItem>
                        <ListGroupItem>Khan, Asad</ListGroupItem>
                    </ListGroup>
                </Tab>
                <Tab eventKey={4} title="Actions" disabled>Actions</Tab>
                <Tab eventKey={5} title="Settings">Settings</Tab>
            </Tabs>
        );
    }

    handleSelect(selectedTab) {
        // The active tab must be set into the state so that
        // the Tabs component knows about the change and re-renders.
        this.setState({
            activeTab: selectedTab
        });
    }
}
 export default MainTab;