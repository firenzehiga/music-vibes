import styled from "styled-components";

export const Section = styled.section`
	padding: 40px 16px;
	background: linear-gradient(to right, #f1f1f1, #e5e5e5);
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Header = styled.div`
	text-align: center;
	margin-bottom: 24px;
	@media (min-width: 768px) {
		margin-bottom: 32px;
	}
	@media (min-width: 992px) {
		margin-bottom: 40px;
	}
`;

export const Title = styled.h2`
	font-size: 32px;
	color: var(--text-color);
	margin-bottom: 12px;
	@media (min-width: 768px) {
		font-size: 36px;
	}
	@media (min-width: 992px) {
		font-size: var(--desktop-title-font-size);
	}
`;

export const Subtitle = styled.p`
	color: #64748b;
	font-size: 16px;
	max-width: 500px;
	margin: 0 auto;
	@media (min-width: 768px) {
		font-size: 18px;
	}
	@media (min-width: 992px) {
		font-size: var(--desktop-subtitle-font-size);
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 600px;
	margin: 0 auto 24px;
	padding: 0 12px;
	@media (min-width: 768px) {
		flex-direction: row;
		gap: 16px;
		max-width: 800px;
		padding: 0 16px;
	}
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 1px solid #e2e8f0;
	border-radius: 6px;
	font-size: 14px;
	color: var(--text-color);
	background: white;
	&:focus {
		outline: none;
		border-color: var(--primary-color);
		box-shadow: 0 0 0 3px rgba(0, 229, 176, 0.1);
	}
	@media (min-width: 768px) {
		padding: 12px;
		font-size: 16px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: var(--mobile-grid-template-columns, 1fr);
	gap: 20px;
	padding: 0;
	@media (min-width: 768px) {
		grid-template-columns: var(--tablet-grid-template-columns, repeat(2, 1fr));
		gap: 30px;
		padding: 14px;
	}
	@media (min-width: 992px) {
		grid-template-columns: var(--desktop-grid-template-columns, repeat(3, 1fr));
		gap: var(--grid-desktop-gap, 32px);
		padding: var(--grid-desktop-padding, 20px 0);
	}
`;

export const SongCard = styled.div`
	background: white;
	border-radius: 12px;
	overflow: hidden;
	position: relative;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`;

export const SongImage = styled.img`
	width: 100%;
	height: 160px;
	object-fit: cover;
	@media (min-width: 768px) {
		height: 180px;
	}
	@media (min-width: 992px) {
		height: 200px;
	}
`;

export const SongInfo = styled.div`
	padding: 0.75rem;
	@media (min-width: 768px) {
		padding: 1rem;
	}
`;

export const SongTitle = styled.h3`
	font-size: 1rem;
	font-weight: 600;
	color: var(--text-color);
	margin-bottom: 0.25rem;
	@media (min-width: 768px) {
		font-size: 1.05rem;
	}
	@media (min-width: 992px) {
		font-size: 1.1rem;
	}
`;

export const SongArtist = styled.p`
	color: #64748b;
	font-size: 0.85rem;
	@media (min-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const SubmitButton = styled.button`
	background: var(--primary-color, #00c99d);
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 6px;
	cursor: pointer;
	font-weight: 500;
	font-size: 14px;
	margin-top: 12px;
	transition: all 0.2s;
	&:hover {
		background: #00c99d;
	}
`;
