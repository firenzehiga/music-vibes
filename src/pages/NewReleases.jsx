import SongCard from "../components/SongCard/SongCard";
import styles from "./components/NewReleases/NewReleases.module.css";
import newSongsData from "../utils/constants/newSongData";
import { useState } from "react";
export default function NewReleases() {
	const [songs] = useState(newSongsData);

	return (
		<section className={styles.newReleases}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>New Releases</h2>
					<p className={styles.subtitle}>Fresh tracks that just dropped</p>
				</div>
				<div className={styles.grid}>
					{songs.map((song) => (
						<SongCard song={song} key={song.id} />
					))}
				</div>
			</div>
		</section>
	);
}
