import SongCard from "../components/SongCard/SongCard";
import styles from "../components/NewReleases/NewReleases.module.css";
import { useNewReleases } from "../hooks/useSpotifyData";
import SkeletonCard from "../components/Skeleton/SkeletonCard";
export default function NewReleases() {
	// const [songs] = useState(newSongsData);
	const { albums, loading, error } = useNewReleases();

	if (loading) {
		// Tampilkan 6 skeleton card
		return (
			<section className={styles.newReleases}>
				<div className={styles.container}>
					<div className={styles.header}>
						<h2 className={styles.title}>New Releases</h2>
						<p className={styles.subtitle}>Fresh tracks that just dropped</p>
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
		<section className={styles.newReleases}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>New Releases</h2>
					<p className={styles.subtitle}>Fresh tracks that just dropped</p>
				</div>
				<div className={styles.grid}>
					{albums.map((song) => (
						<SongCard song={song} key={song.id} />
					))}
				</div>
			</div>
		</section>
	);
}
