import { useNewReleases } from "../hooks/useSpotifyData";
import {
	SectionContainer,
	TimelineContainer,
	TimelineItem,
	TimelineDot,
	SongCard,
	SongInfo,
	SongImage,
	SongText,
	ReleaseDate,
	SongTitle,
	SongArtist,
	Spinner,
} from "../components/NewReleases/NewReleaseStyled";

export default function NewReleases() {
	const { albums, loading, error } = useNewReleases();

	if (loading) {
		return (
			<SectionContainer>
				<div style={{ textAlign: "center", marginBottom: 64, zIndex: 1 }}>
					<h2
						style={{
							fontSize: "2.5rem",
							color: "white",
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
						}}>
						🎵 Latest Drops
					</h2>
					<div
						style={{
							color: "rgba(255,255,255,0.8)",
							fontSize: "1.25rem",
							maxWidth: 600,
							margin: "0 auto",
						}}>
						Fresh releases hitting the charts this week
					</div>
					<Spinner />
				</div>
			</SectionContainer>
		);
	}

	if (error) {
		return (
			<SectionContainer>
				<div
					style={{
						textAlign: "center",
						color: "#fff",
						background: "#ff4e50",
						borderRadius: 12,
						padding: "2rem",
						margin: "2rem auto",
						width: "60%",
						zIndex: 1,
					}}>
					<p>Error loading new releases: {error}</p>
				</div>
			</SectionContainer>
		);
	}

	return (
		<SectionContainer >
			<div style={{ position: "relative", zIndex: 1 }}>
				<div style={{ textAlign: "center", marginBottom: 64 }}>
					<h2
						style={{
							fontSize: "2.5rem",
							color: "white",
							textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
						}}>
						🎵 Latest Drops
					</h2>
					<div
						style={{
							color: "rgba(255,255,255,0.8)",
							fontSize: "1.25rem",
							maxWidth: 600,
							margin: "0 auto",
						}}>
						Fresh releases hitting the charts this week
					</div>
				</div>
				<TimelineContainer>
					{albums.map((song) => (
						<TimelineItem key={song.id}>
							<TimelineDot />
							<SongCard>
								<SongInfo>
									<SongImage
										src={song.image || song.images?.[0]?.url}
										alt={song.title || song.name}
									/>
									<SongText>
										<ReleaseDate>
											{song.release_date || song.date || "-"}
										</ReleaseDate>
										<SongTitle>{song.title || song.name}</SongTitle>
										<SongArtist>
											{song.artist ||
												(song.artists &&
													song.artists.map((a) => a.name).join(", "))}
										</SongArtist>
									</SongText>
								</SongInfo>
							</SongCard>
						</TimelineItem>
					))}
				</TimelineContainer>
			</div>
		</SectionContainer>
	);
}
