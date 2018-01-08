import React, {Component} from 'react';
import Biodetails from './bio_details';
import Systemdetails from './system-details';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class Datasection extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={8}>
                        <Biodetails/>
                    </Col>
                    <Col xs={4}>
                        <Systemdetails/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Datasection;