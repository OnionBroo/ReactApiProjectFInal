import NavMenu from "../components/Navbar"
import '../components/index.css'



const Home = () => {
    return (
        <>
            <NavMenu />
            <div className="main-div">
                <div className="col-post">
                <div class="card" style={{ width: "14rem" }}>
                    <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <a className="navbar-brand" href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2 mb-1"/>
                        User</a>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home