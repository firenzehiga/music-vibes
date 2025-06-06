import SongCard from "../components/SongCard/SongCard";
import styles from "../components/PopularSongs/PopularSongs.module.css";
import { useState } from "react";
import { usePopularSongs } from "../hooks/useSpotifyData";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
export default function PopularSongs() {
	const { songs, loading, error } = usePopularSongs();

	const [visibleSongs, setVisibleSongs] = useState(6); // state buat tampilin 4 lagu awal

	const showMore = () => {
		setVisibleSongs(songs.length); // fungsi buat tampilin sisa lagu selanjutnya
	};

	const showLess = () => {
		setVisibleSongs(6); // fungsi buat kembaliin lagi ke 4 lagu awal
	};

	if (loading) {
		// Tampilkan 6 skeleton card
		return (
			<section className={styles.popular}>
				<div className={styles.container}>
					<div className={styles.header}>
						<h2 className={styles.title}>Popular Songs</h2>
						<p className={styles.subtitle}>
							Chart-topping hits everyone listening to
						</p>
					</div>
					<div className={styles.grid}>
						{Array.from({ length: 6 }).map((_, i) => (
							<SkeletonCard key={i} />
						))}
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<div
				style={{
					textAlign: "center",
					color: "#fff",
					background: "#ff4e50",
					borderRadius: 12,
					padding: "2rem",
					margin: "2rem auto",
					width: "60%",
				}}>
				<p>Error loading new releases: {error}</p>
			</div>
		);
	}
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
						{songs.slice(0, visibleSongs).map((song) => (
							<SongCard key={song.id} song={song} />
						))}
					</div>
					<div className={styles.buttonContainer}>
						{visibleSongs < songs.length ? (
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
