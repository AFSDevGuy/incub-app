import React from 'react';
import {Button,Row,Col} from 'react-bootstrap';

class PersonEntry extends React.Component {
    constructor(props) {
        super();
        this.state = {
            person: props.person,
            group: props.group,
            personStore: props.store
        }
    }
    render() {
        return (
            <Row>
                <Col xs={6}>
                    <button type="button" className="btn btn-lg btn-block" data-toggle="collapse" data-target={"#detail"+this.state.number}>
                        {this.state.person.lastname}, {this.state.person.firstname}
                    </button>
                    <div id={"#detail"+this.state.number} className="collapse">
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

        )
    }
}

export default PersonEntry;