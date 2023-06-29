import { useParams } from "react-router-dom";
import NavMenu from "../components/Navbar";
import '../components/index.css'

const Post = () =>{

    const {id} = useParams()


    return(
        <>
        <NavMenu/>
       
    </>
    )
}
export default Post