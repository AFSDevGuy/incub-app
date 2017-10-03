import React from 'react';
import {Button,Row,Col,ListGroup, ListGroupItem} from 'react-bootstrap';

import InitPersons from './InitPersons';

class PersonList extends React.Component {

    personGroup = null
    constructor(props) {
        super();
        this.personGroup = props.group
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1,
            persons: InitPersons.getPersons()[this.personGroup]
        };
    }

    render() {
        return (
            <ListGroup style={{height:'100%'}} >
                {this.state.persons.map(function(listValue){
                    return (
                        <ListGroupItem key={listValue.number}>
                            <Row>
                                <Col xs={6}>
                                    <button type="button" className="btn btn-lg btn-block" data-toggle="collapse" data-target={"#detail"+listValue.number}>
                                        {listValue.lastname}, {listValue.firstname}
                                    </button>
                                    <div id={"#detail"+listValue.number} className="collapse">
                                        {/* TODO: replace with modal dialog */}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Col>
                                {/* TODO: show only the buttons that are appropriate for this particular group */}
                                <Col xs={3}>
                                    <Button bsStyle="success" bsSize="large" block>
                                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                    </Button>
                                </Col>
                                <Col xs={3}>
                                    <Button bsStyle="danger" bsSize="large" block>
                                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        )
    }
}

export default PersonList;