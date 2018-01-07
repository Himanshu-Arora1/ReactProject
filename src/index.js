
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Steps from './components/Steps'
import SearchBar from './components/searchbar'
import StoredData from './components/storeddata'

class App extends Component {
	render () {
		return (
			<div>
				<SearchBar />
				<Steps />
				<StoredData />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	  document.querySelector('.container'));

