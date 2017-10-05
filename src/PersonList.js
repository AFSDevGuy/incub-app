import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PersonEntry from './PersonEntry'

class PersonList extends React.Component {

    constructor(props) {
        super();
        this.personGroup = props.group
        this.personStore = props.store
        this.state = {
            // Takes active tab from props if it is defined there
            activeTab: props.activeTab || 1,
            persons: this.personStore.getItems(this.personGroup)
        };
        this.personStore.addListener(this.personGroup,this)
    }

    render() {
        return (
            <ListGroup style={{height:'100%'}} >
                {Object.keys(this.state.persons).map(function(key){
                    var listValue = this.state.persons[key]
                    return (
                        <ListGroupItem key={listValue.number}>
                            <PersonEntry person={listValue} group={this.personGroup} store={this.personStore}/>
                        </ListGroupItem>
                    )
                },this)}
            </ListGroup>
        )
    }
}

export default PersonList;