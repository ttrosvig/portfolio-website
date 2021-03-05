import '../styles/App.css';
import AboutMe from './AboutMe';
import Main from './Main';
import Skills from './Skills';
import Testimonials from './Testimonials';

function App() {
	return (
		<div className="App">
			<Main />
			<AboutMe />
			<Skills />
			<Testimonials />
		</div>
	);
}

export default App;
