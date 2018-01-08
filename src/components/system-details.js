import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Row from 'react-bootstrap/lib/Row';

const SystemDetails = () => {
    return (
        <div>
            <Panel>
                <Panel.Heading>System</Panel.Heading>
                <Panel.Body></Panel.Body>
            </Panel>
            <Panel>
                <Panel.Heading>Service</Panel.Heading>
                <Panel.Body>
                    <div style={{'margin-left': '15px', 'margin-right': '15px'}}>
                        <Form horizontal>
                            <FormGroup controlId="equipmentName">
                                <ControlLabel>Equipment Name</ControlLabel>
                                <DropdownButton
                                    componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    bsSize="xsmall"
                                    title="Select the frequency below."
                                    style={{width: '100%'}}
                                >
                                    <MenuItem key="30">Last 30 Days</MenuItem>
                                    <MenuItem key="60">Last 60 Days</MenuItem>
                                    <MenuItem key="90">Last 90 Days</MenuItem>
                                </DropdownButton>
                                <div style={{'margin-left': '15px', 'margin-right': '15px'}}>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Recalculating Hash, Init System</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Updated System records...</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Forking the system records..</span>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <span>10/12/2016</span>
                                    </Row>
                                    <Row>
                                        <span>Initiating backup..</span>
                                    </Row>
                                    <hr/>
                                </div>
                            </FormGroup>
                        </Form>
                    </div>
                </Panel.Body>
            </Panel>
            <Panel>
                <Panel.Heading>Notes</Panel.Heading>
                <Panel.Body></Panel.Body>
            </Panel>
        </div>
    );
}

export default SystemDetails;