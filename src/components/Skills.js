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
		</section>
	);
};

export default Skills;
