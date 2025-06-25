import { useState, useEffect } from "react";
import spotifyApi from "../services/spotifyApi";

// Hook untuk New Releases
export const useNewReleases = () => {
	const [albums, setAlbums] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNewReleases = async () => {
			try {
				setLoading(true);
				const result = await spotifyApi.getNewReleases(5);

				// Transform data to match existing structure
				const transformedData = result.albums.items.map((album) => ({
					id: album.id,
					image: album.images[0]?.url || "",
					title: album.name,
					artist: album.artists.map((artist) => artist.name).join(", "),
					release_date: album.release_date,
					total_tracks: album.total_tracks,
					external_urls: album.external_urls,
				}));

				setAlbums(transformedData);
			} catch (err) {
				console.error("Error fetching new releases:", err);
				setError(err.message);
				// Fallback ke data statis jika error
				const { default: fallbackData } = await import(
					"../utils/constants/newSongData"
				);
				setAlbums(fallbackData);
			} finally {
				setLoading(false);
			}
		};

		fetchNewReleases();
	}, []);

	return { albums, loading, error };
};

// Hook untuk Popular Songs
export const usePopularSongs = () => {
	const [songs, setSongs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPopularSongs = async () => {
			try {
				setLoading(true);
				const tracks = await spotifyApi.getPopularTracksFromArtists();

				// Transform data to match existing structure
				const transformedData = tracks.map((track) => ({
					id: track.id,
					image: track.album.images[0]?.url || "",
					title: track.name,
					artist: track.artists.map((artist) => artist.name).join(", "),
					// Tambah field lain
					album: track.album.name,
					duration_ms: track.duration_ms,
					preview_url: track.preview_url,
					external_urls: track.external_urls,
					popularity: track.popularity,
				}));

				setSongs(transformedData);
			} catch (err) {
				console.error("Error fetching popular songs:", err);
				setError(err.message);
				// Fallback ke data statis jika error
				const { default: fallbackData } = await import(
					"../utils/constants/popularSongData"
				);
				setSongs(fallbackData);
			} finally {
				setLoading(false);
			}
		};

		fetchPopularSongs();
	}, []);

	return { songs, loading, error };
};

// Hook untuk Search
export const useSpotifySearch = (query) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!query || query.length < 2) {
			setResults([]);
			return;
		}

		const searchTracks = async () => {
			try {
				setLoading(true);
				setError(null);

				const result = await spotifyApi.searchTracks(query, 20);

				const transformedData = result.tracks.items.map((track) => ({
					id: track.id,
					image: track.album.images[0]?.url || "",
					title: track.name,
					artist: track.artists.map((artist) => artist.name).join(", "),
					album: track.album.name,
					preview_url: track.preview_url,
					external_urls: track.external_urls,
				}));

				setResults(transformedData);
			} catch (err) {
				console.error("Error searching tracks:", err);
				setError(err.message);
				setResults([]);
			} finally {
				setLoading(false);
			}
		};

		const timeoutId = setTimeout(searchTracks, 500); // Debounce 500ms
		return () => clearTimeout(timeoutId);
	}, [query]);

	return { results, loading, error };
};
