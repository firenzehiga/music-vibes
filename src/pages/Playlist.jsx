/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpotifySearch } from "../hooks/useSpotifyData";
import {
	Section,	
	Container,
	Header,
	Title,
	Subtitle,
	Form,
	Input,
	Grid,
	SongCard,
	SongImage,
	SongInfo,
	SongTitle,
	SongArtist,
	SubmitButton,
} from "../components/Playlist/PlaylistStyled";

export default function Playlist(props) {
	const { songs, onAddToPlaylist } = props;
	const [searchQuery, setSearchQuery] = useState("");

	const {
		results: searchResults,
		loading: searchLoading,
		error: searchError,
	} = useSpotifySearch(searchQuery);

	const filteredSearchResults = searchResults.filter(
		(song) => !songs.some((p) => p.id === song.id)
	);

	return (
		<Section id="playlist">
			<Container>
				<Header>
					<Title>My Playlist</Title>
					<Subtitle>Your personalized collection of favorite tracks</Subtitle>
				</Header>

				{/* SEARCH DARI SPOTIFY */}
				<Form>
					<Input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search songs from Spotify..."
					/>
				</Form>
				{searchLoading && (
					<p style={{ marginTop: 8, color: "#888" }}>Searching...</p>
				)}
				{searchError && (
					<p style={{ marginTop: 8, color: "red" }}>Error: {searchError}</p>
				)}
				{filteredSearchResults.length > 0 && (
					<Grid style={{ marginTop: 16 }}>
						{filteredSearchResults.map((song) => (
							<SongCard key={song.id}>
								<SongImage src={song.image} alt={song.title} />
								<SongInfo>
									<SongTitle>{song.title}</SongTitle>
									<SongArtist>{song.artist}</SongArtist>
									<SubmitButton
										onClick={() => onAddToPlaylist(song)}
										style={{ fontSize: 14 }}>
										Add to Playlist
									</SubmitButton>
								</SongInfo>
							</SongCard>
						))}
					</Grid>
				)}
				{searchQuery &&
					!searchLoading &&
					filteredSearchResults.length === 0 && (
						<p style={{ marginTop: 8, color: "#888" }}>
							No result or already in playlist.
						</p>
					)}

				{/* PLAYLIST */}
				<Grid style={{ marginTop: 32 }}>
					{songs.map((song) => (
						<SongCard key={song.id}>
							<SongImage src={song.image} alt={song.title} />
							<SongInfo>
								<SongTitle>{song.title}</SongTitle>
								<SongArtist>{song.artist}</SongArtist>
							</SongInfo>
						</SongCard>
					))}
				</Grid>
			</Container>
		</Section>
	);
}
