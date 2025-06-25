import Hero from "../components/Hero/Hero";
import PopularSongs from "./Popular";
import styles from "../App.module.css";

function App() {
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
