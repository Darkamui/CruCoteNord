import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Head>
				<title>Cru Côte Nord</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
