import '../styles/Main.css';

const Main = () => {
	return (
		<div className="Main">
			<div className="container">
				<h1>This is a test heading</h1>
				<p>This is a sample small text</p>

				<button className="main-btn">
					View Projects
					<i style={{ marginLeft: '5px' }} className="fas fa-arrow-right" />
				</button>
			</div>
		</div>
	);
};

export default Main;
