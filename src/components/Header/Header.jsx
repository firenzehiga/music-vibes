import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
	HeaderSection,
	Nav,
	Logo,
	SpotifyIcon,
	Hamburger,
	Menu,
} from "./HeaderStyled";

export default function Header() {
	// state buat buka/tutup menu saat hamburger diklik
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// fungsi buat buka/tutup menu
	const toggleMenu = () => {
		setIsMenuOpen((open) => !open);
	};

	return (
		<HeaderSection>
			<Nav>
				<Logo>
					<SpotifyIcon />
					Music Vibes
				</Logo>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<Hamburger onClick={toggleMenu} aria-label="Toggle menu">
					{isMenuOpen ? <FaTimes /> : <FaBars />}
				</Hamburger>
				<Menu open={isMenuOpen}>
					<li>
						<Link to="/" onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/music/new" onClick={() => setIsMenuOpen(false)}>
							New Releases
						</Link>
					</li>
					<li>
						<Link to="/music/popular" onClick={() => setIsMenuOpen(false)}>
							Popular
						</Link>
					</li>
					<li>
						<Link to="/music/playlist" onClick={() => setIsMenuOpen(false)}>
							Playlist
						</Link>
					</li>
				</Menu>
			</Nav>
		</HeaderSection>
	);
}
