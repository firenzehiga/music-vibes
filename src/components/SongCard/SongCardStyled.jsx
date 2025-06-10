/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";

// Styled Components
const Card = styled.div`
	background: var(--card-background);
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	position: relative;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
	}
`;

const ImageContainer = styled.div`
	position: relative;
	padding-top: 100%;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;

	${Card}:hover & {
		filter: blur(4px);
	}
`;

const Content = styled.div`
	padding: 16px;

	@media (min-width: 768px) {
		padding: 20px;
	}
	@media (min-width: 992px) {
		padding: 24px;
	}
`;

const Title = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: var(--text-color);
	margin-bottom: 6px;

	@media (min-width: 768px) {
		font-size: 20px;
	}
`;

const Artist = styled.p`
	color: #64748b;
	font-size: 14px;

	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

const PlayButton = styled.div`
	position: absolute;
	background: var(--primary-color);
	color: white;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.3s ease;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	${Card}:hover & {
		opacity: 1;
	}

	@media (min-width: 768px) {
		width: 55px;
		height: 54px;
	}
`;

const IconImg = styled.img`
	width: 20px;
	height: 20px;
	filter: none !important;

	@media (min-width: 768px) {
		width: 25px;
		height: 25px;
	}
`;

export default function SongCard(props) {
	const { song } = props;

	const [isPlaying, setIsPlaying] = useState(false);

	const handleTogglePlay = () => {
		alert("Tracks is not available for now");
		setIsPlaying(!isPlaying);
	};

	return (
		<Card>
			<ImageContainer>
				<Image src={song.image} alt={song.title} />
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<PlayButton onClick={handleTogglePlay}>
					<IconImg
						src={isPlaying ? PauseIcon : PlayIcon}
						alt={isPlaying ? "Pause" : "Play"}
					/>
				</PlayButton>
			</ImageContainer>
			<Content>
				<Title>{song.title}</Title>
				<Artist>{song.artist}</Artist>
			</Content>
		</Card>
	);
}
