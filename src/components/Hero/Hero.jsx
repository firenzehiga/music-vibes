import { useRef, useState } from "react";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";
import {
	HeroSection,
	BackgroundVideo,
	SongHeader,
	CoverImg,
	SongTitle,
	SongArtist,
	LyricArea,
	LyricLine,
	ControlsArea,
	PlayButton,
	IconImg,
	Wrapper,
	HeroTitle,
	Subtitle,
	SongCardButton,
	CardCoverImg,
	CardSongInfo,
	CardSongTitle,
	CardSongArtist,
} from "./HeroStyled";
const lyrics = [
	{ time: 0.5, text: "She said, Careful, or you'll lose it" },
	{ time: 4, text: "But, girl, I'm only human," },
	{ time: 7, text: "And I know there's a blade where your heart is" },
	{ time: 10, text: "And you know how to use it" },
	{ time: 13, text: "And you can take my flesh if you want girl" },
	{ time: 16, text: "But, baby, don't abuse it (Calm down)" },
	{ time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
	{ time: 22, text: "I'm praying that they're human" },
	{ time: 25, text: "Please understand that I'm trying my hardest" },
	{ time: 28, text: "My head's a mess, but I'm trying regardless" },
	{ time: 31, text: "Anxiety is one hell of a problem" },
	{ time: 34, text: "She's latching onto me, I can't resolve it" },
	{ time: 37, text: "It's not right, it's not fair, it's not fair" },
	{ time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
	{ time: 47, text: "Oh, no, no, no, ooh-ooh" },
];

export default function HeroPlayer() {
	const song = {
		title: "Consume",
		artist: "Chase Atlantic",
		image: "/photo/consume.jpg",
		audio: "/audio/consume.mp3",
	};
	const VIDEO_SRC = "/video/consume.mp4";

	const [showPlayer, setShowPlayer] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	const audioRef = useRef(null);

	// Cari lirik aktif
	const activeLyricIndex = lyrics.findIndex(
		(l, i) =>
			currentTime >= l.time &&
			(i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)
	);

	const getLyric = (offset) => {
		const idx = activeLyricIndex + offset;
		if (idx >= 0 && idx < lyrics.length) return lyrics[idx].text;
		return "";
	};

	const handleStart = () => {
		setShowPlayer(true);
		setPlaying(true);
		setTimeout(() => audioRef.current && audioRef.current.play(), 150);
	};

	const handlePlayPause = () => {
		if (!playing) audioRef.current.play();
		else audioRef.current.pause();
		setPlaying(!playing);
	};

	const handleTimeUpdate = (e) => setCurrentTime(e.target.currentTime);

	return (
		<HeroSection>
			<BackgroundVideo
				autoPlay
				muted
				loop
				playsInline
				src={VIDEO_SRC}
				type="video/mp4"
			/>

			{!showPlayer ? (
				// Tombol card lagu untuk memulai lagu (TIDAK DIUBAH)
				<>
					<Wrapper>
						<HeroTitle>Discover Your Next Favorite Song</HeroTitle>
						<Subtitle>Explore the best music from around the world</Subtitle>
						<div
							style={{
								width: "100vw",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								gap: 18,
								marginTop: "12vh",
							}}>
							<SongCardButton onClick={handleStart}>
								<CardCoverImg src={song.image} alt={song.title} />
								<CardSongInfo>
									<CardSongTitle>{song.title}</CardSongTitle>
									<CardSongArtist>{song.artist}</CardSongArtist>
								</CardSongInfo>
							</SongCardButton>
						</div>
					</Wrapper>
				</>
			) : (
				<>
					<SongHeader>
						<CoverImg src={song.image} alt={song.title} />
						<SongTitle>{song.title}</SongTitle>
						<SongArtist>{song.artist}</SongArtist>
					</SongHeader>
					<LyricArea>
						{getLyric(-1) && (
							<LyricLine offset={-1} aria-hidden="true">
								{getLyric(-1)}
							</LyricLine>
						)}
						{getLyric(0) && (
							<LyricLine offset={0} $active>
								{getLyric(0)}
							</LyricLine>
						)}
						{getLyric(1) && (
							<LyricLine offset={1} aria-hidden="true">
								{getLyric(1)}
							</LyricLine>
						)}
					</LyricArea>
					<ControlsArea>
						<PlayButton onClick={handlePlayPause}>
							<IconImg
								src={playing ? PauseIcon : PlayIcon}
								alt={playing ? "Pause" : "Play"}
							/>
						</PlayButton>
					</ControlsArea>
					<audio
						ref={audioRef}
						src={song.audio}
						onTimeUpdate={handleTimeUpdate}
						onEnded={() => setPlaying(false)}
						loop
					/>
				</>
			)}
		</HeroSection>
	);
}
