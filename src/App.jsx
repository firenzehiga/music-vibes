import Home from "./pages/Home";
// import Hero from "./components/Hero/Hero";
import NewReleases from "./pages/NewReleases";
// import newSongsData from "./utils/constants/newSongData";
import PopularSongs from "./pages/Popular";
import Playlist from "./pages/Playlist";
import styles from "./App.module.css";
import AddSongForm from "./components/AddSongForm/AddSongForm";
import Layout from "./Layout/index";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import newSongsData from "./utils/constants/newSongData";
import popularSongsData from "./utils/constants/popularSongData";
import playlistData from "./utils/constants/playlistData";
function App() {
	const [playlist, setPlaylist] = useState(playlistData);

	const allSongs = [...newSongsData, ...popularSongsData];

	const addToPlaylist = (song) => {
		// Cek biar tidak duplikat
		if (!playlist.some((s) => s.id === song.id)) {
			setPlaylist([...playlist, song]);
		}
	};

	return (
		<>
			<Layout>
				<div className={styles.app}>
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/music/create" element={<AddSongForm />} />
							<Route path="/music/popular" element={<PopularSongs />} />
							<Route
								path="/music/new"
								element={<NewReleases songs={newSongsData} />}
							/>
							<Route
								path="/music/playlist"
								element={
									<Playlist
										songs={playlist}
										allSongs={allSongs}
										onAddToPlaylist={addToPlaylist}
									/>
								}
							/>
						</Routes>
						{/* <Hero />
						<PopularSongs />
						<NewReleases songs={songs} setSongs={setSongs} />
						<AddSongForm songs={songs} setSongs={setSongs} />
						<Playlist
							songs={playlist}
							allSongs={allSongs}
							onAddToPlaylist={addToPlaylist}
						/> */}
					</main>
				</div>
			</Layout>
		</>
	);
}

export default App;
