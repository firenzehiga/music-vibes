/* eslint-disable react/prop-types */
import SongCard from "../SongCard/SongCard";
import styles from "./NewReleases.module.css";

export default function NewReleases(props) {
	const { songs } = props; // props dari parent

	return (
		<section className={styles.newReleases} id="new">
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>New Releases</h2>
					<p className={styles.subtitle}>Fresh tracks that just dropped</p>
				</div>
				<div className={styles.grid}>
					{songs.map((song) => (
						<SongCard key={song.id} song={song} />
					))}
				</div>
			</div>
		</section>
	);
}
