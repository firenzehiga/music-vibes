import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h2 className={styles.title}>Discover Your Next Favorite Song</h2>
				<p className={styles.subtitle}>
					Explore the best music from around the world
				</p>
				<a href="#playlist" className={styles.start}>
					Start Listening
				</a>
			</div>
		</section>
	);
}
