import SongCard from "../components/SongCard/SongCardStyled";
import SkeletonCard from "../components/Skeleton/SkeletonCardStyled";
import { useNewReleases } from "../hooks/useSpotifyData";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
	padding: 50px 16px;
	background: var(--background-color);

	@media (min-width: 768px) {
		padding: 50px 24px;
	}
	@media (min-width: 992px) {
		padding: 50px 32px;
	}
`;

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const Header = styled.div`
	text-align: center;
	margin-bottom: 30px;

	@media (min-width: 768px) {
		margin-bottom: 40px;
	}
`;

const Title = styled.h2`
	font-size: 28px;
	color: var(--text-color);
	margin-bottom: 12px;

	@media (min-width: 768px) {
		font-size: 32px;
	}
	@media (min-width: 992px) {
		font-size: var(--desktop-title-font-size, 36px);
	}
`;

const Subtitle = styled.p`
	color: #64748b;
	font-size: 16px;
	max-width: 500px;
	margin: 0 auto;

	@media (min-width: 768px) {
		font-size: 18px;
	}
	@media (min-width: 992px) {
		font-size: var(--desktop-subtitle-font-size, 20px);
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: var(--mobile-grid-template-columns, 1fr);
	gap: var(--grid-mobile-gap, 20px);
	padding: var(--grid-mobile-padding, 0);

	@media (min-width: 768px) {
		grid-template-columns: var(--tablet-grid-template-columns, repeat(2, 1fr));
		gap: 30px;
		padding: 14px;
	}
	@media (min-width: 992px) {
		grid-template-columns: var(--desktop-grid-template-columns, repeat(3, 1fr));
		gap: var(--grid-desktop-gap, 32px);
		padding: var(--grid-desktop-padding, 20px 0);
	}
`;

export default function NewReleases() {
	const { albums, loading, error } = useNewReleases();

	if (loading) {
		// Tampilkan 6 skeleton card
		return (
			<Section>
				<Container>
					<Header>
						<Title>New Releases</Title>
						<Subtitle>Fresh tracks that just dropped</Subtitle>
					</Header>
					<Grid>
						{Array.from({ length: 6 }).map((_, i) => (
							<SkeletonCard key={i} />
						))}
					</Grid>
				</Container>
			</Section>
		);
	}

	if (error) {
		return (
			<div
				style={{
					textAlign: "center",
					color: "#fff",
					background: "#ff4e50",
					borderRadius: 12,
					padding: "2rem",
					margin: "2rem auto",
					width: "60%",
				}}>
				<p>Error loading new releases: {error}</p>
			</div>
		);
	}

	return (
		<Section>
			<Container>
				<Header>
					<Title>New Releases</Title>
					<Subtitle>Fresh tracks that just dropped</Subtitle>
				</Header>
				<Grid>
					{albums.map((song) => (
						<SongCard song={song} key={song.id} />
					))}
				</Grid>
			</Container>
		</Section>
	);
}
