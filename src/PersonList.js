import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

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
                    return <ListGroupItem>{listValue.lastname}, {listValue.firstname}</ListGroupItem>;
                })}
            </ListGroup>
        )
    }
}

export default PersonList;