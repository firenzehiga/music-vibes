/* eslint-disable react/prop-types */
import { useState } from "react";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";
import {
	Card,
	ImageContainer,
	Image,
	PlayButton,
	IconImg,
	Content,
	Title,
	Artist,
} from "./SongCardStyled";


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
