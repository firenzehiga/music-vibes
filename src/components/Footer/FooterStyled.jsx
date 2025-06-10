import styled from "styled-components";

const FooterSection = styled.footer`
	background: linear-gradient(
		90deg,
		var(--secondary-color),
		var(--primary-color)
	);
	color: white;
	padding: 2rem 1rem;
	margin-top: auto;

	@media (min-width: 768px) {
		padding: 2.5rem 1.5rem;
	}
	@media (min-width: 992px) {
		padding: 3rem 2rem;
	}
`;

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2.5rem;
	}
	@media (min-width: 992px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
	}
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	@media (min-width: 768px) {
		gap: 1rem;
	}
	@media (min-width: 992px) {
		gap: 1.25rem;
	}
`;

const Title = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.75rem;

	@media (min-width: 768px) {
		font-size: 1.4rem;
	}
	@media (min-width: 992px) {
		font-size: 1.5rem;
	}
`;

const Links = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (min-width: 768px) {
		gap: 1rem;
	}
	@media (min-width: 992px) {
		gap: 1.25rem;
	}
`;

const LinkItem = styled.a`
	color: white;
	text-decoration: none;
	opacity: 0.8;
	font-size: 0.9rem;
	transition: opacity 0.2s;

	&:hover {
		opacity: 1;
	}

	@media (min-width: 768px) {
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		font-size: 1.1rem;
	}
`;

const Copyright = styled.div`
	text-align: center;
	margin-top: 2rem;
	padding-top: 1.5rem;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	font-size: 0.9rem;

	@media (min-width: 768px) {
		font-size: 1rem;
		margin-top: 2.5rem;
		padding-top: 1.5rem;
	}
	@media (min-width: 992px) {
		font-size: 1.1rem;
		margin-top: 3rem;
		padding-top: 2rem;
	}
`;

export default function Footer() {
	return (
		<FooterSection>
			<Container>
				<Section>
					<Title>Music Vibes</Title>
					<p>
						Your ultimate destination for music discovery and entertainment.
					</p>
				</Section>
				<Section>
					<Title>Quick Links</Title>
					<Links>
						<li>
							<LinkItem href="#new">New Releases</LinkItem>
						</li>
						<li>
							<LinkItem href="#popular">Popular</LinkItem>
						</li>
						<li>
							<LinkItem href="#playlist">Playlist</LinkItem>
						</li>
					</Links>
				</Section>
				<Section>
					<Title>Connect</Title>
					<Links>
						<li>
							<LinkItem href="#facebook">LinkedIn</LinkItem>
						</li>
						<li>
							<LinkItem href="#twitter">Tiktok</LinkItem>
						</li>
						<li>
							<LinkItem href="#instagram">Instagram</LinkItem>
						</li>
					</Links>
				</Section>
			</Container>
			<Copyright>
				<p>
					&copy; {new Date().getFullYear()} Music Vibes - firenzehiga. Build
					with React and Love ❤️
				</p>
			</Copyright>
		</FooterSection>
	);
}
