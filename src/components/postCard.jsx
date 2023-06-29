import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import '../components/index.css'
const PostCard = (props) => {
    return (
        <>

            <NavLink className="text-decoration-none col-post mt-3 card ms-4 border-0 rounded-3 bg" to={`/post/${props.idPost}`} style={{ width: "14rem" }}>
                <div className="m-0  box rounded-top-3">
                    <img src={props.webformatURL} width="300" height="400" className="card-img-top rounded-top-3  " alt="..." />
                    <div className="overlay rounded-3 align-items-center">
                        <p className="p-5 text-light ">Ir al post
                            <span className="material-symbols-outlined">
                                open_in_new
                            </span>
                        </p>
                    </div>
                </div>
                <div className="card-body pt-2 pb-2">
                    <a className="navbar-brand" href="#">
                        <img src={props.avatar} alt="Logo" width="30" height="30" className="inline-block rounded-5  align-text-top icon-user me-2 " />
                        {props.username}</a>
                </div>
            </NavLink>



        </>
    )
}

PostCard.propTypes = {
    idPost: PropTypes.string,
    webformatURL: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    tags: PropTypes.string
}

export default PostCard