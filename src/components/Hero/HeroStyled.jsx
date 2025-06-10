import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";

const lyrics = [
	{ time: 0.8, text: "She said, Careful, or you'll lose it" },
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

const HeroSection = styled.section`
	position: relative;
	width: 100vw;
	min-height: 100vh;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
`;

const BackgroundVideo = styled.video`
	position: absolute;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: 1;
`;

const Overlay = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(20, 20, 40, 0.65);
	z-index: 2;
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 10;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 18px;
	margin-top: ${({ showPlayer }) => (showPlayer ? "6vh" : "0")};
	transition: margin-top 0.5s cubic-bezier(0.4, 1.5, 0.4, 1);
`;

const HeroTitle = styled.h1`
	font-weight: 800;
	color: #fff;
	line-height: 1.12;
	text-align: center;
	font-size: 1.6rem;
	margin: 0;
	letter-spacing: 0.5px;
	z-index: 10;
	position: relative;
	@media (min-width: 768px) {
		font-size: 2.1rem;
	}
	@media (min-width: 992px) {
		font-size: 2.35rem;
	}
`;

const Subtitle = styled.p`
	font-size: 0.95rem;
	opacity: 0.95;
	margin: 0 0 8px 0;
	color: #fff;
	font-weight: 400;
	text-align: center;
	z-index: 10;
	@media (min-width: 768px) {
		font-size: 1.05rem;
	}
`;

const SongCardButton = styled.button`
	display: flex;
	align-items: center;
	gap: 18px;
	background: linear-gradient(
		90deg,
		var(--primary-color, #7300a0),
		var(--secondary-color, #a259ec)
	);
	border-radius: 18px;
	padding: 13px 20px;
	cursor: pointer;
	transition: background 0.18s, transform 0.2s, box-shadow 0.2s;
	box-shadow: 0 2px 16px rgba(40, 0, 70, 0.1);
	border: none;
	margin-bottom: 0;
	z-index: 10;

	&:hover {
		background: linear-gradient(
			50deg,
			var(--primary-color, #7300a0),
			var(--secondary-color, #a259ec)
		);
		transform: translateY(-4px) scale(1.03);
		box-shadow: 0 10px 32px rgba(122, 89, 236, 0.18);
	}
	@media (max-width: 500px) {
		padding: 10px 8px;
		gap: 10px;
	}
`;

const CoverImg = styled.img`
	width: 38px;
	height: 38px;
	border-radius: 9px;
	object-fit: cover;
	background: #eee;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

const SongInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-width: 0;
`;

const SongTitle = styled.div`
	color: #fff;
	font-weight: 700;
	font-size: 1.07rem;
	line-height: 1.1;
	margin-bottom: 2px;
	@media (max-width: 500px) {
		font-size: 0.98rem;
	}
`;

const SongArtist = styled.div`
	color: #e2cfff;
	font-size: 0.95rem;
	font-weight: 400;
	@media (max-width: 500px) {
		font-size: 0.87rem;
	}
`;

const CenterCard = styled.div`
	position: static;
	width: 95vw;
	max-width: 390px;
	min-width: 170px;
	background: rgba(40, 40, 60, 0.56);
	border-radius: 18px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.19);
	padding: 1.1rem 1rem 1.1rem 1rem;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	backdrop-filter: blur(2px);
	z-index: 20;
	margin-top: 0;
	gap: 0.7rem;
	margin-bottom: 32px; /* Tambahkan jarak ke bawah agar tidak mepet section bawah */
	@media (max-width: 400px) {
		max-width: 98vw;
		padding: 0.8rem 0.2rem;
	}
`;

const PlayerCoverImg = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 9px;
	margin-bottom: 0.5rem;
	object-fit: cover;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.17);
`;

const PlayerTitle = styled.h2`
	margin: 0;
	font-size: 1rem;
	font-weight: 700;
`;

const PlayerArtist = styled.p`
	margin: 0 0 0.5rem 0;
	opacity: 0.85;
	font-size: 0.93rem;
`;

const LyricsBox = styled.div`
	width: 100%;
	max-height: 100px;
	min-height: 55px;
	overflow-y: auto;
	margin: 0.4rem 0 0.5rem 0;
	color: #fff;
	font-size: 0.97rem;
	font-family: inherit;
	text-align: left;
	background: transparent;
	padding: 0 3px;
	/* Scrollbar style */
	&::-webkit-scrollbar {
		width: 4px;
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #a259ec;
		border-radius: 6px;
	}
`;

const LyricLine = styled.div`
	transition: color 0.22s, font-weight 0.22s;
	color: ${({ active }) => (active ? "#fff" : "#bba6fa")};
	font-weight: ${({ active }) => (active ? 700 : 400)};
	font-size: ${({ active }) => (active ? "1.04em" : "1em")};
	line-height: 1.5;
	margin-left: ${({ active }) => (active ? "1px" : "0")};
`;

const ProgressBar = styled.input.attrs({ type: "range" })`
	width: 100%;
	margin: 7px 0 2px 0;
	accent-color: var(--primary-color, #a259ec);
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
	gap: 9px;
	margin: 0.2rem 0 0.1rem 0;
`;

const PlayButton = styled.button`
	background: var(--primary-color, #1ed760);
	color: white;
	width: 34px;
	height: 34px;
	border-radius: 50%;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background 0.2s;
	margin: 0 5px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);

	&:hover {
		background: var(--secondary-color, #a259ec);
	}
`;

const IconImg = styled.img`
	width: 17px;
	height: 17px;
`;

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
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(0.8);

	const audioRef = useRef(null);
	const lyricsRef = useRef(null);
	const [userScrollingLyrics, setUserScrollingLyrics] = useState(false);

	const activeLyricIndex = lyrics.findIndex(
		(l, i) =>
			currentTime >= l.time &&
			(i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)
	);

	// Manual scroll, NOT scrollIntoView, agar tidak menarik halaman utama
	useEffect(() => {
		if (lyricsRef.current && activeLyricIndex !== -1 && !userScrollingLyrics) {
			const box = lyricsRef.current;
			const el = box.children[activeLyricIndex];
			if (el) {
				const boxHeight = box.clientHeight;
				const elOffset = el.offsetTop + el.clientHeight / 2;
				box.scrollTo({
					top: elOffset - boxHeight / 2,
					behavior: "smooth",
				});
			}
		}
	}, [activeLyricIndex, userScrollingLyrics]);

	useEffect(() => {
		if (!lyricsRef.current) return;
		const box = lyricsRef.current;
		let scrolling;
		const handleScroll = () => {
			setUserScrollingLyrics(true);
			clearTimeout(scrolling);
			scrolling = setTimeout(() => {
				setUserScrollingLyrics(false);
			}, 1200);
		};
		box.addEventListener("scroll", handleScroll);
		return () => {
			box.removeEventListener("scroll", handleScroll);
			clearTimeout(scrolling);
		};
	}, []);

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
	const handleLoadedMetadata = (e) => setDuration(e.target.duration);
	const handleSeek = (e) => {
		const newTime = Number(e.target.value);
		audioRef.current.currentTime = newTime;
		setCurrentTime(newTime);
	};
	const handleVolume = (e) => {
		const v = Number(e.target.value);
		audioRef.current.volume = v;
		setVolume(v);
	};

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
			<Overlay />
			<ContentWrapper showPlayer={showPlayer}>
				{!showPlayer && (
					<>
						<HeroTitle>Discover Your Next Favorite Song</HeroTitle>
						<Subtitle>Explore the best music from around the world</Subtitle>
					</>
				)}
				{!showPlayer && (
					<SongCardButton onClick={handleStart}>
						<CoverImg src={song.image} alt={song.title} />
						<SongInfo>
							<SongTitle>{song.title}</SongTitle>
							<SongArtist>{song.artist}</SongArtist>
						</SongInfo>
					</SongCardButton>
				)}
				{showPlayer && (
					<CenterCard>
						<PlayerCoverImg src={song.image} alt={song.title} />
						<PlayerTitle>{song.title}</PlayerTitle>
						<PlayerArtist>{song.artist}</PlayerArtist>
						<LyricsBox ref={lyricsRef}>
							{lyrics.map((line, idx) => (
								<LyricLine key={line.time} active={idx === activeLyricIndex}>
									{line.text}
								</LyricLine>
							))}
						</LyricsBox>
						<ProgressBar
							min={0}
							max={duration}
							value={currentTime}
							onChange={handleSeek}
						/>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								fontSize: "0.81em",
								opacity: 0.8,
							}}>
							<span>{formatTime(currentTime)}</span>
							<span>{formatTime(duration)}</span>
						</div>
						<Controls>
							<PlayButton onClick={handlePlayPause}>
								<IconImg
									src={playing ? PauseIcon : PlayIcon}
									alt={playing ? "Pause" : "Play"}
								/>
							</PlayButton>
							<input
								type="range"
								min={0}
								max={1}
								step={0.01}
								value={volume}
								onChange={handleVolume}
								style={{ width: 46 }}
							/>
						</Controls>
						<audio
							ref={audioRef}
							src={song.audio}
							onTimeUpdate={handleTimeUpdate}
							onLoadedMetadata={handleLoadedMetadata}
							onEnded={() => setPlaying(false)}
						/>
					</CenterCard>
				)}
			</ContentWrapper>
		</HeroSection>
	);
}

function formatTime(time) {
	if (!time) return "0:00";
	const min = Math.floor(time / 60);
	const sec = Math.floor(time % 60)
		.toString()
		.padStart(2, "0");
	return `${min}:${sec}`;
}
