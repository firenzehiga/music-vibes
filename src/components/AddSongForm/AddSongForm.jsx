import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddSongForm.module.css";

export default function AddSongForm(props) {
	// eslint-disable-next-line react/prop-types
	const { songs, setSongs } = props;

	// state buat validasi form
	const [isTitleError, setIsTitleError] = useState(false);
	const [isArtistError, setIsArtistError] = useState(false);
	const [isImageError, setIsImageError] = useState(false);

	// State untuk menyimpan data form
	const [artist, setArtist] = useState("");
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	function handleTitle(e) {
		setTitle(e.target.value); // fungsi buat set title
	}

	function handleArtist(e) {
		setArtist(e.target.value); // fungsi buat set artist
	}

	function handleImage(e) {
		setImage(e.target.value); // fungsi buat set image
	}

	// fungsi buat submit
	function handleSubmit(e) {
		e.preventDefault();
		if (title === "") {
			//
			setIsTitleError(true);
		} else if (artist === "") {
			setIsArtistError(true);
		} else if (!isValidUrl(image) && image !== "") {
			setIsImageError(true);
		} else {
			const song = {
				id: nanoid(),
				image:
					image ||
					"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500",
				title: title,
				artist: artist,
			};
			setSongs([...songs, song]);

			// Reset form setelah submit
			setTitle("");
			setArtist("");
			setImage("");
			setIsTitleError(false);
			setIsArtistError(false);
			setIsImageError(false);
		}
	}

	// fungsi buat validasi url
	function isValidUrl(string) {
		try {
			new URL(string);
			return true;
			// eslint-disable-next-line no-unused-vars
		} catch (_) {
			return false;
		}
	}
	return (
		<section className={styles.addForm}>
			<div className={styles.formWrapper}>
				<div className={styles.header}>
					<h2 className={styles.title}>Add Song Form</h2>
					<p className={styles.subtitle}>Create a new song</p>
				</div>
				<form onSubmit={handleSubmit} className={styles.formContainer}>
					<div className={styles.inputGroup}>
						<label htmlFor="title" className={styles.label}>
							Title
						</label>
						<input
							id="title"
							type="text"
							value={title}
							onChange={handleTitle}
							className={`${styles.input} ${isTitleError ? styles.error : ""}`}
							placeholder="Song Title"
						/>
						{isTitleError && <p className={styles.error}>Title Wajib Diisi</p>}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="artist" className={styles.label}>
							Artist
						</label>
						<input
							id="artist"
							type="text"
							value={artist}
							onChange={handleArtist}
							className={`${styles.input} ${isArtistError ? styles.error : ""}`}
							placeholder="Artist Name"
						/>
						{isArtistError && (
							<p className={styles.error}>Artist Wajib Diisi</p>
						)}
					</div>

					<div className={styles.inputGroup}>
						<label htmlFor="image" className={styles.label}>
							Image URL (optional)
						</label>
						<input
							id="image"
							type="text"
							value={image}
							onChange={handleImage}
							className={`${styles.input} ${isImageError ? styles.error : ""}`}
							placeholder="Image URL"
						/>
						{isImageError && <p className={styles.error}>Invalid Image URL</p>}
					</div>

					<button type="submit" className={styles.button}>
						Add Song
					</button>
				</form>
			</div>
		</section>
	);
}
