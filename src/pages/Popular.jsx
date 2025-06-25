import SongCard from "../components/SongCard/SongCard";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
import { useState } from "react";
import { usePopularSongs } from "../hooks/useSpotifyData";
import {
	Section,
	Container,
	Header,
	Title,
	Subtitle,
	Grid,
	ButtonContainer,
	SeeMoreButton,
} from "../components/Popular/PopularStyled";

export default function PopularSongs() {
	const { songs, loading, error } = usePopularSongs();
	const [visibleSongs, setVisibleSongs] = useState(6);

	const showMore = () => {
		setVisibleSongs(songs.length);
	};

	const showLess = () => {
		setVisibleSongs(6);
	};

	if (loading) {
		return (
			<Section>
				<Container>
					<Header>
						<Title>Popular Songs</Title>
						<Subtitle>Chart-topping hits everyone listening to</Subtitle>
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
		<Section id="popular">
			<Container>
				<Header>
					<Title>Popular Songs</Title>
					<Subtitle>Chart-topping hits everyone listening to</Subtitle>
				</Header>
				<Grid>
					{songs.slice(0, visibleSongs).map((song) => (
						<SongCard key={song.id} song={song} />
					))}
				</Grid>
				<ButtonContainer>
					{visibleSongs < songs.length ? (
						<SeeMoreButton type="button" onClick={showMore}>
							See More
						</SeeMoreButton>
					) : (
						<SeeMoreButton type="button" onClick={showLess}>
							Show Less
						</SeeMoreButton>
					)}
				</ButtonContainer>
			</Container>
		</Section>
	);
}
