import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const StyledSkeletonCard = styled.div`
	background: #d1d5db;
	border-radius: 12px;
	margin: 1rem 0.5rem;
	width: 300px;
	height: 300px;
	display: inline-block;
	position: relative;
	overflow: hidden;
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, #d1d5db 25%, #f3f3f3 50%, #d1d5db 75%);
		background-size: 400px 100%;
		animation: ${shimmer} 1.2s infinite;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.85;
	}
`;

// eslint-disable-next-line react/prop-types
export default function SkeletonCard({ style }) {
	return <StyledSkeletonCard style={style} />;
}
