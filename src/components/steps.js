import React, { Component } from 'react';
import BioDetails from './bio_details.js'


class Steps extends Component {

	constructor(props){

		super(props);

		this.state={clicked:false}

		// this.click = this.click.bind(this);
	}

	
	render(){
		return(
			<div className='steps'>
				<button onClick={()=>this.setState({
      clicked: true
    })}>bio</button>
				{this.state.clicked ? <BioDetails /> : null}
			</div>
			)
	}
}

export default Steps;
