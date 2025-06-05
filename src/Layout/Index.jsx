import Navbar from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
