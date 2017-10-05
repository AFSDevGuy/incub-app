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
        this.movePersonToMissing = this.movePersonToMissing.bind(this)
        this.movePersonToBadgedout = this.movePersonToBadgedout.bind(this)
        this.movePersonToVerified = this.movePersonToVerified.bind(this)
    }

    movePersonToMissing() {
        this.state.personStore.moveItem(this.state.person.number,this.state.group,'missing')
    }
    movePersonToBadgedout() {
        this.state.personStore.moveItem(this.state.person.number,this.state.group,'badgedout')
    }
    movePersonToVerified() {
        this.state.personStore.moveItem(this.state.person.number,this.state.group,'verified')
    }

    render() {
        var firstButtonBlock = <div>&nbsp;</div>;
        if (this.state.group !== 'verified') {
            firstButtonBlock =
                <Button bsStyle="success" bsSize="large" block onClick={this.movePersonToVerified}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </Button> ;
        }
        var secondButtonBlock =
            <Button bsStyle="danger" bsSize="large" block onClick={this.movePersonToMissing}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
        if (this.state.group === 'missing') {
            secondButtonBlock =
                <Button bsStyle="warning" bsSize="large" block>
                    <span className="glyphicon glyphicon-bullhorn" aria-hidden="true"></span>
                </Button>
        }
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
                    {firstButtonBlock}
                </Col>
                <Col xs={3}>
                    {secondButtonBlock}
                </Col>
            </Row>

        )
    }
}

export default PersonEntry;