import styled from "styled-components";

export const SectionContainer = styled.section`
	padding: 5rem 2rem;
	background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
	color: white;
	position: relative;
	min-height: 100vh;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.04)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
		opacity: 0.3;
		z-index: 0;
	}
`;

export const TimelineContainer = styled.div`
	position: relative;
	max-width: 800px;
	margin: 0 auto;
	z-index: 1;
	&::before {
		content: "";
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(to bottom, #00e5b0, #0097e5);
		transform: translateX(-50%);
		border-radius: 2px;
		box-shadow: 0 0 10px rgba(0, 229, 176, 0.5);
	}
	@media (max-width: 768px) {
		&::before {
			left: 30px;
		}
	}
`;

export const TimelineItem = styled.div`
	position: relative;
	margin-bottom: 4rem;
	&:nth-child(odd) {
		padding-right: 50%;
		text-align: right;
		@media (max-width: 768px) {
			padding-right: 0;
			padding-left: 70px;
			text-align: left;
		}
	}
	&:nth-child(even) {
		padding-left: 50%;
		text-align: left;
		@media (max-width: 768px) {
			padding-left: 70px;
		}
	}
`;

export const TimelineDot = styled.div`
	position: absolute;
	top: 20px;
	width: 20px;
	height: 20px;
	background: linear-gradient(45deg, #00e5b0, #0097e5);
	border-radius: 50%;
	border: 4px solid #1a1a2e;
	box-shadow: 0 0 20px rgba(0, 229, 176, 0.6);
	z-index: 2;
	${TimelineItem}:nth-child(odd) & {
		right: -10px;
		@media (max-width: 768px) {
			left: 20px;
		}
	}
	${TimelineItem}:nth-child(even) & {
		left: -10px;
		@media (max-width: 768px) {
			left: 20px;
		}
	}
	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8px;
		height: 8px;
		background: white;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const SongCard = styled.div`
	background: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(20px);
	border-radius: 20px;
	padding: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.4s ease;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.1),
			transparent
		);
		transition: left 0.6s ease;
	}
	&:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(0, 229, 176, 0.3);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		&::before {
			left: 100%;
		}
	}
`;

export const ReleaseDate = styled.div`
	font-size: 0.9rem;
	color: #00e5b0;
	font-weight: 600;
	margin-bottom: 1rem;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const SongInfo = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 24px;
`;

export const SongText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1;
`;

export const SongTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: #fff;
	line-height: 1.2;
`;

export const SongArtist = styled.div`
	color: rgba(255, 255, 255, 0.7);
	font-size: 1rem;
`;

export const SongImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 12px;
	object-fit: cover;
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
`;

export const Spinner = styled.div`
	border: 6px solid #eee;
	border-top: 6px solid #00e5b0;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	animation: spin 1s linear infinite;
	margin: 32px auto 0 auto;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
