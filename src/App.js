import { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

class App extends Component {

	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		) 
	}
}

export default App;
