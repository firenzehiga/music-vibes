import styled from "styled-components";
export const HeroSection = styled.section`
	position: relative;
	width: 100%;
	min-height: 100%;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0;
	background: transparent;
`;

export const BackgroundVideo = styled.video`
	position: absolute;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const SongHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100vw;
	margin-top: 42px;
	margin-bottom: 32px;
	z-index: 10;
`;

export const CoverImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 16px;
	object-fit: cover;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.19);
	margin-bottom: 13px;
	opacity: 0.93;
	filter: drop-shadow(0 2px 8px #2226);
`;

export const SongTitle = styled.h2`
	font-size: 1.35rem;
	font-weight: 800;
	line-height: 1.2;
	color: #fff;
	text-align: center;
	opacity: 0.95;
	margin: 0 0 3px 0;
	text-shadow: 0 1px 10px #0006;
`;

export const SongArtist = styled.p`
	color: #e2cfff;
	font-size: 1rem;
	font-weight: 400;
	text-align: center;
	margin: 0;
	opacity: 0.93;
`;

export const LyricArea = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 180px;
	width: 100vw;
	margin-bottom: 32px;
	z-index: 20;
`;

export const LyricLine = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%) translateY(${(props) => props.offset * 48}px);
	font-size: ${(props) =>
		props.$active ? "2.15rem" : props.offset === -1 ? "1.15rem" : "1.10rem"};
	font-weight: ${(props) => (props.$active ? 800 : 500)};
	color: #fff;
	text-align: center;
	width: 108vw; // <--- Perlebar area lirik
	max-width: 1200px; // <--- Perlebar max-width
	letter-spacing: 1px;
	opacity: ${(props) => (props.$active ? 1 : props.offset === -1 ? 0.57 : 0.35)};
	text-shadow: 0 2px 18px #2227, 0 1px 8px #0007;
	border-radius: 12px;
	padding: ${(props) => (props.$active ? "10px 20px" : "2px 10px")};
	transition: font-size 0.18s, opacity 0.19s, background 0.18s;
	pointer-events: none;
	user-select: none;
	animation: ${(props) =>
		props.$active
			? "lyric-fadein 0.38s"
			: props.offset === -1
			? "lyric-fadeout 0.38s"
			: "none"};
	@keyframes lyric-fadein {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}
	@keyframes lyric-fadeout {
		from {
			opacity: 0.57;
			transform: translateX(-50%) translateY(0);
		}
		to {
			opacity: 0.1;
			transform: translateX(-50%) translateY(-50px);
		}
	}
`;

export const ControlsArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: 4vh;
	margin-bottom: 0;
	width: 100vw;
	z-index: 10;
`;

export const PlayButton = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: auto;
	height: auto;
	box-shadow: none;
	&:hover {
		background: transparent;
		transform: scale(1.07);
	}
`;

export const IconImg = styled.img`
	width: 32px;
	height: 32px;
`;

export const SongCardButton = styled.button`
	display: flex;
	gap: 18px;
	background: linear-gradient(
		90deg,
		var(--primary-color, #7300a0),
		var(--secondary-color, #a259ec)
	);
	border-radius: 18px;
	padding: 13px 20px;
	cursor: pointer;
	transition: background 0.18s, transform 0.2s, box-shadow 0.2s;
	box-shadow: 0 2px 16px rgba(40, 0, 70, 0.1);
	border: none;
	margin-bottom: 0;
	z-index: 10;

	&:hover {
		background: linear-gradient(
			50deg,
			var(--primary-color, #7300a0),
			var(--secondary-color, #a259ec)
		);
		transform: translateY(-4px) scale(1.03);
		box-shadow: 0 10px 32px rgba(122, 89, 236, 0.18);
	}
	@media (max-width: 500px) {
		padding: 10px 8px;
		gap: 10px;
	}
`;

export const CardCoverImg = styled.img`
	width: 38px;
	height: 38px;
	border-radius: 9px;
	object-fit: cover;
	background: #eee;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const CardSongInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-width: 0;
`;

export const CardSongTitle = styled.div`
	color: #fff;
	font-weight: 700;
	font-size: 1.07rem;
	line-height: 1.1;
	margin-bottom: 2px;
	@media (max-width: 500px) {
		font-size: 0.98rem;
	}
`;

export const CardSongArtist = styled.div`
	color: #e2cfff;
	font-size: 0.95rem;
	font-weight: 400;
	@media (max-width: 500px) {
		font-size: 0.87rem;
	}
`;

export const Wrapper = styled.div`
	margin-top: 30vh; // Ubah sesuai kebutuhan, misal 10vh - 14vh
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	z-index: 10;
`;

export const HeroTitle = styled.h1`
	font-weight: 800;
	color: #fff;
	line-height: 1.12;
	text-align: center;
	font-size: 1.6rem;
	margin: 0;
	letter-spacing: 0.5px;
	z-index: 10;
	position: relative;
	@media (min-width: 768px) {
		font-size: 2.1rem;
	}
	@media (min-width: 992px) {
		font-size: 2.35rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 0.95rem;
	opacity: 0.95;
	margin: 0 0 8px 0;
	color: #fff;
	font-weight: 400;
	text-align: center;
	z-index: 10;
	@media (min-width: 768px) {
		font-size: 1.05rem;
	}
`;
