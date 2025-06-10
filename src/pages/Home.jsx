import Hero from "../components/Hero/HeroStyled";
// import NewReleases from "../components/NewReleases/NewReleases";
// import newSongsData from "../utils/constants/newSongData";
import PopularSongs from "./Popular";
// import Playlist from "../components/Playlist/Playlist";
import styles from "../App.module.css";
// import AddSongForm from "../components/AddSongForm/AddSongForm";
// import { useState } from "react";
// import popularSongsData from "../utils/constants/popularSongData";
// import playlistData from "../utils/constants/playlistData";

function App() {
	// const defaultPlaylist = playlistData; // data awal playlist

	// const [songs, setSongs] = useState(newSongsData); // state buat simpan data lagu, nilai awal dari newSongsData

	// const [playlist, setPlaylist] = useState(defaultPlaylist); // state buat simpan playlist

	// const allSongs = [...newSongsData, ...popularSongsData]; // data gabungan newSongsData dan popularSongsData

	// // fungsi buat tambahin lagu ke playlist
	// const addToPlaylist = (song) => {
	// 	if (!playlist.find((item) => item.id === song.id)) {
	// 		// cek apakah lagu sudah ada di playlist, kalau belum, setPlaylist bakal jalan
	// 		setPlaylist([...playlist, song]);
	// 	}
	// };

	return (
		<>
			<div className={styles.app}>
				<main>
					<Hero />
					<PopularSongs />
				</main>
			</div>
		</>
	);
}

export default App;
