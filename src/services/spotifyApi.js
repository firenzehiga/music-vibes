import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

class SpotifyAPI {
	constructor() {
		this.baseURL = "https://api.spotify.com/v1";
		this.accessToken = localStorage.getItem("spotify_access_token");
		this.tokenExpiry = localStorage.getItem("spotify_token_expiry");

		// Setup axios instance
		this.api = axios.create({
			baseURL: this.baseURL,
			timeout: 10000,
		});
	}

	async getClientCredentialsToken() {
		try {
			const response = await axios.post(
				"https://accounts.spotify.com/api/token",
				"grant_type=client_credentials",
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Authorization: `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
					},
				}
			);

			const { access_token, expires_in } = response.data;

			if (access_token) {
				this.accessToken = access_token;
				this.tokenExpiry = Date.now() + expires_in * 1000;

				localStorage.setItem("spotify_access_token", this.accessToken);
				localStorage.setItem("spotify_token_expiry", this.tokenExpiry);

				// Update axios default headers
				this.api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${this.accessToken}`;
			}

			return access_token;
		} catch (error) {
			console.error(
				"Error getting token:",
				error.response?.data || error.message
			);
			throw error;
		}
	}

	async ensureValidToken() {
		if (!this.accessToken || Date.now() >= this.tokenExpiry) {
			await this.getClientCredentialsToken();
		} else {
			// Set header jika token masih valid
			this.api.defaults.headers.common[
				"Authorization"
			] = `Bearer ${this.accessToken}`;
		}
	}

	async apiCall(endpoint) {
		await this.ensureValidToken();

		try {
			const response = await this.api.get(endpoint);
			return response.data;
		} catch (error) {
			console.error("API call failed:", error.response?.data || error.message);
			throw error;
		}
	}

	async getNewReleases(limit = 20) {
		const endpoint = `/browse/new-releases?limit=${limit}&market=US`;
		return this.apiCall(endpoint);
	}

	async getFeaturedPlaylists(limit = 20) {
		const endpoint = `/browse/featured-playlists?limit=${limit}&market=US`;
		return this.apiCall(endpoint);
	}

	async searchTracks(query, limit = 20) {
		const endpoint = `/search?q=${encodeURIComponent(
			query
		)}&type=track&limit=${limit}&market=US`;
		return this.apiCall(endpoint);
	}

	async getPopularTracks() {
		try {
			const searches = ["pop hits 2024", "trending now", "viral songs"];
			const allTracks = [];

			for (const query of searches) {
				const result = await this.searchTracks(query, 10);
				if (result.tracks && result.tracks.items) {
					allTracks.push(...result.tracks.items);
				}
			}

			// Remove duplicates berdasarkan ID
			const uniqueTracks = allTracks.filter(
				(track, index, self) =>
					index === self.findIndex((t) => t.id === track.id)
			);

			return uniqueTracks.slice(0, 20);
		} catch (error) {
			console.error("Error getting popular tracks:", error);
			throw error;
		}
	}

	// Method tambahan untuk get track details
	async getTrack(trackId) {
		const endpoint = `/tracks/${trackId}`;
		return this.apiCall(endpoint);
	}

	// Method untuk get artist details
	async getArtist(artistId) {
		const endpoint = `/artists/${artistId}`;
		return this.apiCall(endpoint);
	}

	// Method untuk get album details
	async getAlbum(albumId) {
		const endpoint = `/albums/${albumId}`;
		return this.apiCall(endpoint);
	}

	async getArtistTopTracks(artistId, market = "US") {
		const endpoint = `/artists/${artistId}/top-tracks?market=${market}`;
		return this.apiCall(endpoint);
	}

	async getPopularTracksFromArtists() {
		try {
			// Daftar ID artis terkenal (contoh, bisa ditambah)
			const artistIds = [
				"5069JTmv5ZDyPeZaCCXiCg", // Wave To Earth
				"06HL4z0CvFAxyc27GXpf02", // Taylor Swift
				"6zO1dZ40fTZ5hY9NnnRJSk", // Yung Kai
				"1QAJqy2dA3ihHBFIHRphZj", // CAS
				"1Xyo4u8uXC1ZmMpatF05PJ", // The Weeknd
			];
			const allTracks = [];

			for (const artistId of artistIds) {
				const result = await this.getArtistTopTracks(artistId);
				if (result.tracks) {
					allTracks.push(...result.tracks);
				}
			}

			// Remove duplicates by track ID
			const uniqueTracks = allTracks.filter(
				(track, index, self) =>
					index === self.findIndex((t) => t.id === track.id)
			);

			return uniqueTracks.slice(0, 30);
		} catch (error) {
			console.error("Error getting popular tracks from artists:", error);
			throw error;
		}
	}
}

export default new SpotifyAPI();
// export const useSpotifyData = () => {
