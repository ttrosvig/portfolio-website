import '../styles/AboutMe.css';

const AboutMe = () => {
	return (
		<div className="AboutMe container">
			<h2> A Little Bit About Me...</h2>

			<div className="AboutMe-text-container">
				<p>
					I am a software engineer who loves tackling challenges big and small. I am continuously learning, and I enjoy
					every minute of it. With me on your team, I can guarentee quality and timely results above and beyond what is
					expected.
				</p>

				<br />

				<h4>Interests</h4>
				<p>Programming, hunting, board games, video games and spending time with my dog, Mavis.</p>
			</div>

			<div class="custom-shape-divider-bottom-1614964376">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill" />
				</svg>
			</div>
		</div>
	);
};

export default AboutMe;
