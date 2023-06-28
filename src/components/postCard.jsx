import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const PostCard = (props) => {
    return (
       <>
        <div className="col-post">
       <div className="card mt-2 ms-4 border-0 bg-body-tertiary" style={{ width: "14rem" }}>
             <img src={props.webformatURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <a className="navbar-brand" href="#">
                    <img src={props.avatar} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2 mb-1" />
                    {props.username}</a>
            </div>
        </div>
                   
                    
        </div>
       </>
    )
}

PostCard.propTypes = {
    webformatURL: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    tags: PropTypes.string
}

export default  PostCard