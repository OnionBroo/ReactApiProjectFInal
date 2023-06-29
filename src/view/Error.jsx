import { NavLink } from "react-router-dom"
import NavMenu from "../components/Navbar"
import '../components/index.css'
import Footer from "../components/footer"


const Error = () => {
    return (
        
        <>
        <NavMenu />
        <div className="container mb-1 text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">Ups...</h1>
                </div>
                <img className="col" src="https://error404.fun/img/full-preview/1x/19.png" width={300} height={250} alt="" />
                <div className="row align-items-center">
                    <p className="col mt-3">Esta página no existe ¿Quieres volver al inicio? <NavLink to={"/"} className={"text-decoration-none text-dark text-decoration-underline"}>click</NavLink> </p>
                </div>
            </div>
            <Footer />

        </>
    )
}
export default Error