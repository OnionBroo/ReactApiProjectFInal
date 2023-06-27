import NavMenu from "../components/Navbar"
import LateralBar from "../components/lateralbar"

const Users = () =>{
    return(
        <>
        <NavMenu />
        <div className="container ms-0 p-0">
        <div className="row">
        <LateralBar className="p-0 ms-0 col-2" />
        <h1 className="col-10">users</h1>
        </div>
        
        </div>
        </>
    )
}
export default Users