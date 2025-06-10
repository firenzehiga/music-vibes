import { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

// Styled Components

const HeaderSection = styled.header`
	padding: 14px 16px;
	background: linear-gradient(
		90deg,
		var(--primary-color),
		var(--secondary-color)
	);
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	position: relative;

	@media (min-width: 768px) {
		padding: 14px 24px;
	}
	@media (min-width: 992px) {
		padding: 14px 32px;
	}
`;

const Nav = styled.nav`
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		max-width: 960px;
	}
	@media (min-width: 992px) {
		max-width: 1200px;
	}
`;

const Logo = styled.h1`
	color: white;
	font-size: 24px;
	font-weight: 700;
	margin: 0;
	letter-spacing: 1px;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
		font-size: 26px;
	}
`;

const SpotifyIcon = styled(FaSpotify)`
	color: white;
	font-size: 24px;
	margin: 8px 10px 8px 0;

	@media (min-width: 768px) {
		font-size: 26px;
	}
`;

const Hamburger = styled.button`
	display: block;
	color: white;
	font-size: 24px;
	background: none;
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none !important;
	}
`;

const Menu = styled.ul`
	display: ${({ open }) => (open ? "flex" : "none")};
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: var(--primary-color);
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	list-style: none;
	text-align: center;
	z-index: 10;
	margin: 0;

	& a {
		color: white;
		text-decoration: none;
		font-weight: 500;
		font-size: 16px;
		transition: opacity 0.2s;
	}
	& a:hover {
		opacity: 0.8;
	}

	@media (min-width: 768px) {
		display: flex !important;
		position: static;
		background: none;
		flex-direction: row;
		gap: 24px;
		padding: 0;

		& a {
			font-size: 17px;
		}
	}
	@media (min-width: 992px) {
		gap: 30px;
		& a {
			font-size: 16px;
		}
	}
`;

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
