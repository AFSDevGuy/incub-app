/*
  Import the React Bootstrap components that you want to use.

  In a real environment (Webpack / Browserify, ES6) this would be:
    import { Tab, Tabs } from 'react-bootstrap';
*/
import React from 'react';
import {Row, Col, Nav, NavItem, Tab,
    MenuItem, NavDropdown, Panel} from 'react-bootstrap';
import PersonList from './PersonList';

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
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="missing">
                <Row className=".clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs" >
                            <NavItem eventKey="missing">
                                Missing
                            </NavItem>
                            <NavItem eventKey="evacuated">
                                Evacuated
                            </NavItem>
                            <NavItem eventKey="verified">
                                Verified
                            </NavItem>
                            <NavDropdown eventKey="actions" title="Actions">
                                <MenuItem eventKey="actions.1">Action</MenuItem>
                                <MenuItem eventKey="actions.2">Another action</MenuItem>
                                <MenuItem eventKey="actions.3">Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="actions.4">Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="missing">
                                <Panel header="People who were recently active but did not badge out">
                                    <PersonList group='missing'/>
                                </Panel>
                            </Tab.Pane>
                            <Tab.Pane eventKey="evacuated">
                                <Panel header="People who badged out properly after the alert (recently)">
                                    <PersonList group='badgedout'/>
                                </Panel>
                            </Tab.Pane>
                            <Tab.Pane eventKey="verified">
                                <Panel header="As people are found, they are moved to this list">
                                    <PersonList group='verified'/>
                                </Panel>
                            </Tab.Pane>
                            <Tab.Pane eventKey="actions.1">
                                Action Content
                            </Tab.Pane>
                            <Tab.Pane eventKey="actions.2">
                                Another Action Content
                            </Tab.Pane>
                            <Tab.Pane eventKey="actions.3">
                                Something else here content
                            </Tab.Pane>
                            <Tab.Pane eventKey="actions.4">
                                Separated link content
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
               </Row>
            </Tab.Container>
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