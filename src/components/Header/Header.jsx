import { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes, FaMusic } from "react-icons/fa";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<h1 className={styles.logo}>
					<FaMusic className={styles.icon} />
					Music Vibes
				</h1>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className={styles.hamburger} onClick={toggleMenu}>
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</button>
				<ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
					<li>
						<a href="#new">New Releases</a>
					</li>
					<li>
						<a href="#popular">Popular</a>
					</li>
					<li>
						<a href="#playlist">Playlist</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
