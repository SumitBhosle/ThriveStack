import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold text-primary" to="#">Event Management</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/registerevent">Register Event</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/viewevent">View Event</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar; 