import '../styles/Main.css';
import Image from '../static/photo.png';

const Main = () => {
	return (
		<main className="Main container">
			<nav className="Main-media">
				<a target="_blank" href="https://www.linkedin.com/in/tristan-trosvig">
					<i className="fab fa-linkedin" />
				</a>

				<a target="_blank" href="https://github.com/ttrosvig">
					<i className="fab fa-github" />
				</a>
			</nav>

			<div className="custom-shape-divider-top-1614963905">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" />
				</svg>
			</div>

			<div className="container">
				<img className="Main-image" src={Image} alt="This is a photo of me!" />

				<h1 className="Main-header">Tristan Trosvig</h1>
				<p className="Main-p">Web Developer / Frontend Software Engineer</p>
			</div>

			<div className="custom-shape-divider-bottom-1614964198">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" />
				</svg>
			</div>
		</main>
	);
};

export default Main;
