import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import NewReleases from "../components/NewReleases/NewReleases";
import newSongsData from "../utils/constants/newSongData";
import PopularSongs from "../components/PopularSongs/PopularSongs";
import Playlist from "../components/Playlist/Playlist";
import Footer from "../components/Footer/Footer";
import styles from "../App.module.css";
import AddSongForm from "../components/AddSongForm/AddSongForm";
import { useState, useEffect } from "react";
import popularSongsData from "../utils/constants/popularSongData";
import playlistData from "../utils/constants/playlistData";
function App() {
	const defaultPlaylist = playlistData; // data awal playlist

	const [songs, setSongs] = useState(newSongsData); // state buat simpan data lagu, nilai awal dari newSongsData

	const [playlist, setPlaylist] = useState(defaultPlaylist); // state buat simpan playlist

	const allSongs = [...newSongsData, ...popularSongsData]; // data gabungan newSongsData dan popularSongsData

	const [showScrollTop, setShowScrollTop] = useState(false); // state buat tampilin tombol scroll ke atas

	// fungsi buat tampilin tombol scroll ke atas
	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 650);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// fungsi buat scroll ke atas
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// fungsi buat tambahin lagu ke playlist
	const addToPlaylist = (song) => {
		if (!playlist.find((item) => item.id === song.id)) {
			// cek apakah lagu sudah ada di playlist, kalau belum, setPlaylist bakal jalan
			setPlaylist([...playlist, song]);
		}
	};

	return (
		<div className={styles.app}>
			<Header />
			<main>
				<Hero />
				<PopularSongs />
				<NewReleases songs={songs} setSongs={setSongs} />
				<AddSongForm songs={songs} setSongs={setSongs} />
				<Playlist
					songs={playlist}
					allSongs={allSongs}
					onAddToPlaylist={addToPlaylist}
				/>
			</main>
			<Footer />
			{showScrollTop && (
				<button
					type="button"
					className={styles.scrollTopButton}
					onClick={scrollToTop}
					aria-label="Scroll to top"
				>
					↑
				</button>
			)}
		</div>
	);
}

export default App;
