import Navbar from "../components/Header/HeaderStyled";
import Footer from "../components/Footer/FooterStyled";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Main = styled.main`
	flex-grow: 1;
`;

function Layout({ children }) {
	return (
		<Wrapper>
			<Navbar />
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
