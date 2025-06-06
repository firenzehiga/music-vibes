import { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
	// state buat buka/tutup menu saat hamburger diklik
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// fungsi buat buka/tutup menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<h1 className={styles.logo}>
					<FaSpotify className={styles.icon} />
					Music Vibes
				</h1>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className={styles.hamburger} onClick={toggleMenu}>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
				<ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/music/new">New Releases</Link>
					</li>
					<li>
						<Link to="/music/popular">Popular</Link>
					</li>
					<li>
						<Link to="/music/playlist">Playlist</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
