import { NavLink } from "react-router-dom"
import '../components/index.css'


const NavMenu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className={"nav-link navbar-brand nav-item p-2 rounded-4"} to={"/"}>
                        <img src="https://cryptologos.cc/logos/shiba-inu-shib-logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
                        SocialShiba</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item rounded-5 ms-1">
                                <NavLink className={"nav-link"} to={"/"}>Home</NavLink>
                            </li>
                            <li className="nav-item rounded-5 ms-1">
                                <NavLink className={"nav-link"} to={"/aboutApi"}>About API</NavLink>
                            </li>
                            <li className="nav-item rounded-5 ms-1">
                                <NavLink className={"nav-link"} to={"/users"}>Encontrar Usuarios</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavMenu