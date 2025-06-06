/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../components/Playlist/Playlist.module.css";
import { useSpotifySearch } from "../hooks/useSpotifyData";

export default function Playlist(props) {
	const { songs, onAddToPlaylist } = props;
	const [searchQuery, setSearchQuery] = useState(""); // untuk search Spotify

	// Spotify search
	const {
		results: searchResults,
		loading: searchLoading,
		error: searchError,
	} = useSpotifySearch(searchQuery);

	// Hapus dari hasil search lagu yang sudah ada di playlist (biar tidak double)
	const filteredSearchResults = searchResults.filter(
		(song) => !songs.some((p) => p.id === song.id)
	);

	return (
		<section className={styles.playlist} id="playlist">
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>My Playlist</h2>
					<p className={styles.subtitle}>
						Your personalized collection of favorite tracks
					</p>
				</div>

				{/* SEARCH DARI SPOTIFY */}
				<div className={styles.form}>
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Search songs from Spotify..."
						className={styles.select}
					/>
				</div>
				{searchLoading && (
					<p style={{ marginTop: 8, color: "#888" }}>Searching...</p>
				)}
				{searchError && (
					<p style={{ marginTop: 8, color: "red" }}>Error: {searchError}</p>
				)}
				{filteredSearchResults.length > 0 && (
					<div className={styles.grid} style={{ marginTop: 16 }}>
						{filteredSearchResults.map((song) => (
							<div key={song.id} className={styles.songCard}>
								<img
									src={song.image}
									alt={song.title}
									className={styles.songImage}
								/>
								<div className={styles.songInfo}>
									<h3 className={styles.songTitle}>{song.title}</h3>
									<p className={styles.songArtist}>{song.artist}</p>
									<button
										onClick={() => onAddToPlaylist(song)}
										className={styles.submitButton}
										style={{ marginTop: 12, fontSize: 14 }}>
										Add to Playlist
									</button>
								</div>
							</div>
						))}
					</div>
				)}
				{searchQuery &&
					!searchLoading &&
					filteredSearchResults.length === 0 && (
						<p style={{ marginTop: 8, color: "#888" }}>
							No result or already in playlist.
						</p>
					)}

				{/* PLAYLIST */}
				<div className={styles.grid} style={{ marginTop: 32 }}>
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
