import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.section}>
					<h3 className={styles.title}>Music Vibes</h3>
					<p>
						Your ultimate destination for music discovery and entertainment.
					</p>
				</div>
				<div className={styles.section}>
					<h3 className={styles.title}>Quick Links</h3>
					<ul className={styles.links}>
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
				</div>
				<div className={styles.section}>
					<h3 className={styles.title}>Connect</h3>
					<ul className={styles.links}>
						<li>
							<a href="#facebook">LinkedIn</a>
						</li>
						<li>
							<a href="#twitter">Tiktok</a>
						</li>
						<li>
							<a href="#instagram">Instagram</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					&copy; {new Date().getFullYear()} Music Vibes - firenzehiga. Build
					with React and Love ❤️
				</p>
			</div>
		</footer>
	);
}
