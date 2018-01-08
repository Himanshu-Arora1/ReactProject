import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Steps from './components/Steps'
import SearchBar from './components/searchbar'
import StoredData from './components/storeddata'
import Navbar from './components/Navbar'

class App extends Component {
	render () {
		return (
			<div>
				<Navbar/>
				{/*<SearchBar/>*/}
					<div>

						<Steps />
						<StoredData />
					</div>

			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	  document.querySelector('.container'));

