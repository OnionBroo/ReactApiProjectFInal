import NavMenu from "../components/Navbar"
import LateralBar from "../components/lateralbar"


const Apis = () =>{
    return(
        <>
        <NavMenu />
        <div className="container ms-0 p-0">
        <div className="row">
        <LateralBar className="p-0 ms-0 col-2" />
        <h1 className="col-10">api</h1>
        </div>
        
        </div>
        </>
    )
}
export default Apis