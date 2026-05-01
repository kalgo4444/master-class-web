import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-shell">
				<NavLink
					to="/"
					className="brand"
				>
					YouMarket
				</NavLink>
				<ul className="nav-links">
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
