/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../components/Playlist/Playlist.module.css";

export default function Playlist(props) {
	const { songs, allSongs, onAddToPlaylist } = props;
	const [selectedSong, setSelectedSong] = useState(""); // state buat simpan id lagu

	const filteredSongs = allSongs.filter(
		(song, index, self) =>
			index ===
			self.findIndex((s) => s.title === song.title && s.artist === song.artist) // fungsi biar ga ada lagu duplikat (ada 2 data lagu yg sama di 2 file array)
	);

	const handleSubmit = (e) => {
		// fungsi buat tambahin lagu ke playlist
		e.preventDefault();
		if (selectedSong) {
			// biome-ignore lint/style/useNumberNamespace: <explanation>
			const song = allSongs.find((s) => s.id === parseInt(selectedSong)); // cari lagu berdasarkan id
			if (song) onAddToPlaylist(song);
			setSelectedSong("");
		}
	};

	return (
		<section className={styles.playlist} id="playlist">
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>My Playlist</h2>
					<p className={styles.subtitle}>
						Your personalized collection of favorite tracks
					</p>
				</div>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<select
							value={selectedSong}
							onChange={(e) => setSelectedSong(e.target.value)}
							className={styles.select}>
							<option value="">Add a song to playlist</option>
							{filteredSongs.map((song) => (
								<option key={song.id} value={song.id}>
									{song.title} - {song.artist}
								</option>
							))}
						</select>
					</div>
					<button type="submit" className={styles.submitButton}>
						Add to Playlist
					</button>
				</form>

				<div className={styles.grid}>
					{songs.map((song) => (
						<div key={song.id} className={styles.songCard}>
							<img
								src={song.image}
								alt={song.title}
								className={styles.songImage}
							/>
							<div className={styles.songInfo}>
								<h3 className={styles.songTitle}>{song.title}</h3>
								<p className={styles.songArtist}>{song.artist}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
