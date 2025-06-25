import {
	FooterSection,
	Container,
	Section,
	Title,
	Links,
	LinkItem,
	Copyright,
} from "./FooterStyled";

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
