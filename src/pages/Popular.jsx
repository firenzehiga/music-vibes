import SongCard from "../components/SongCard/SongCard";
import styles from "../components/PopularSongs/PopularSongs.module.css";
import popularSongsData from "../utils/constants/popularSongData";
import { useState } from "react";

const popularSongs = popularSongsData; //

export default function PopularSongs() {
	const [visibleSongs, setVisibleSongs] = useState(6); // state buat tampilin 4 lagu awal

	const showMore = () => {
		setVisibleSongs(popularSongs.length); // fungsi buat tampilin sisa lagu selanjutnya
	};

	const showLess = () => {
		setVisibleSongs(6); // fungsi buat kembaliin lagi ke 4 lagu awal
	};

	return (
		<>
			<section className={styles.popular} id="popular">
				<div className={styles.container}>
					<div className={styles.header}>
						<h2 className={styles.title}>Popular Songs</h2>
						<p className={styles.subtitle}>
							Chart-topping hits everyones listening to{" "}
						</p>
					</div>
					<div className={styles.grid}>
						{popularSongs.slice(0, visibleSongs).map((song) => (
							<SongCard key={song.id} song={song} />
						))}
					</div>
					<div className={styles.buttonContainer}>
						{visibleSongs < popularSongs.length ? (
							<button
								type="button"
								onClick={showMore}
								className={styles.seeMoreButton}>
								See More
							</button>
						) : (
							<button
								type="button"
								onClick={showLess}
								className={styles.seeMoreButton}>
								Show Less
							</button>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
