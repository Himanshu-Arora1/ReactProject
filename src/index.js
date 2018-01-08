import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import MainContainer from './components/main-container';

class App extends Component {
	render () {
		return (
			<div>
				<Navbar/>
				<MainContainer/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	  document.querySelector('.app'));

