/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./SongCard.module.css";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";

export default function SongCard(props) {
	const { song } = props; // destructuring di dalam fungsi

	const [isPlaying, setIsPlaying] = useState(false); // state buat tombol play/pause (cuma tombol)

	const handleTogglePlay = () => {
		setIsPlaying(!isPlaying); // fungsi buat tombol play/pause
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={song.image} alt={song.title} className={styles.image} />
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className={styles.playButton} onClick={handleTogglePlay}>
					<img
						src={isPlaying ? PauseIcon : PlayIcon}
						alt={isPlaying ? "Pause" : "Play"}
						className={isPlaying ? styles.PauseIcon : styles.PlayIcon}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{song.title}</h3>
				<p className={styles.artist}>{song.artist}</p>
			</div>
		</div>
	);
}
