import React, {Component} from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const BioDetails = () => {
	return (
		<Panel>
			<Panel.Heading>Bio</Panel.Heading>
			<Panel.Body>
				<div style={{'margin-left': '15px', 'margin-right': '15px'}}>
					<Form horizontal>
						<FormGroup controlId="equipmentName">
							<ControlLabel>Equipment Name</ControlLabel>
							<FormControl type="text" />
						</FormGroup>

						<FormGroup controlId="formVendor">
							<ControlLabel>Vendor</ControlLabel>
							<FormControl type="text" />
						</FormGroup>

						<FormGroup controlId="formLocation">
							<ControlLabel>Location</ControlLabel>
							<FormControl type="text" />
						</FormGroup>

						<FormGroup controlId="formModel">
							<ControlLabel>Model</ControlLabel>
							<FormControl type="text" />
						</FormGroup>

						<FormGroup controlId="formSerial">
							<ControlLabel>Serial Number</ControlLabel>
							<FormControl type="text" />
						</FormGroup>


						<FormGroup>
							<Button bsStyle="primary" type="submit">Submit</Button>
						</FormGroup>
					</Form>
				</div>
			</Panel.Body>
		</Panel>
	);
}

export default BioDetails;