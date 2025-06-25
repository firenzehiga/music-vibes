import styled from "styled-components";

// Styled Components
export const Section = styled.section`
	padding: 50px 16px;
	background: linear-gradient(to right, #f8f9fa, #e9ecef);

	@media (min-width: 768px) {
		padding: 50px 24px;
	}
	@media (min-width: 992px) {
		padding: 50px 32px;
	}
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const Header = styled.div`
	text-align: center;
	margin-bottom: 30px;

	@media (min-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const Title = styled.h2`
	font-size: 28px;
	color: var(--text-color);
	margin-bottom: 12px;

	@media (min-width: 768px) {
		font-size: 32px;
	}
	@media (min-width: 992px) {
		font-size: var(--desktop-title-font-size, 36px);
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
		font-size: var(--desktop-subtitle-font-size, 20px);
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: var(--mobile-grid-template-columns, 1fr);
	gap: var(--grid-mobile-gap, 20px);
	padding: var(--grid-mobile-padding, 0);

	@media (min-width: 768px) {
		grid-template-columns: var(--tablet-grid-template-columns, repeat(2, 1fr));
		gap: var(--grid-tablet-gap, 30px);
		padding: var(--grid-tablet-padding, 14px);
	}
	@media (min-width: 992px) {
		grid-template-columns: var(--desktop-grid-template-columns, repeat(3, 1fr));
		gap: var(--grid-desktop-gap, 32px);
		padding: var(--grid-desktop-padding, 20px 0);
	}
`;

export const ButtonContainer = styled.div`
	text-align: center;
	margin-top: 2rem;

	@media (min-width: 768px) {
		margin-top: 2.5rem;
	}
	@media (min-width: 992px) {
		margin-top: 3rem;
	}
`;

export const SeeMoreButton = styled.button`
	background: var(--primary-color);
	color: white;
	border: none;
	padding: 0.75rem 2rem;
	border-radius: 30px;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background: #00c99d;
		transform: translateY(-2px);
	}
`;
