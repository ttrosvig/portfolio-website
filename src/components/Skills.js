import '../styles/Skills.css';

const Skills = () => {
	return (
		<section className="Skills">
			<h2 style={{ textAlign: 'center' }}>Skills</h2>

			<div className="col-container">
				<ul>
					<b>Languages</b>
					<li>
						<i className="fab fa-html5" /> HTML
					</li>
					<li>
						<i className="fab fa-css3" /> CSS
					</li>
					<li>
						<i className="fab fa-js-square" /> JavaScript
					</li>
					<li>
						<i className="fab fa-java" />
						Java
					</li>
					<li>
						<i className="fab fa-python" /> Python
					</li>
					<li>
						<i className="fab fa-php" />
						PHP
					</li>
				</ul>

				<ul>
					<b>Frameworks</b>
					<li>React</li>
					<li>Express</li>
					<li>jQuery</li>
					<li>Flask</li>
					<li>Bootstrap</li>
					<li>Tailwind</li>
				</ul>
			</div>

			<div className="container">
				<h2 style={{ textAlign: 'center', marginTop: '0.25em' }}>Some of my work</h2>

				<ul style={{ marginBottom: '2em' }}>
					<li>
						<a target="_blank" href="http://www.allyscloset.org">
							Ally's Closet
						</a>
					</li>

					<li>
						<a target="_blank" href="https://recipe-book-capstone1.herokuapp.com">
							Cook Book
						</a>
					</li>
				</ul>
			</div>

			<div className="custom-shape-divider-bottom-1614970952">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" />
				</svg>
			</div>
		</section>
	);
};

export default Skills;
