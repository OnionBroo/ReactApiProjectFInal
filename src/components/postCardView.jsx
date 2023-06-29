
import PropTypes from "prop-types";
import '../components/index.css'
const PostCardPage = (props) => {
    return (
        <>

            <div className="text-decoration-none col-9 mt-3 card ms-4 border-0 rounded-3 bg" >
                <div className="card-body pt-2 pb-2">
                    <a className="navbar-brand" href="#">
                        <img src={props.avatar} alt="Logo" width="30" height="30" className="inline-block rounded-5  align-text-top icon-user me-2 " />
                        {props.username}</a>
                </div>
                <img src={props.webformatURL} width="800" height="600" className="card-img-top rounded p-2 pb-3  " alt="..." />
            </div>



        </>
    )
}

PostCardPage.propTypes = {
    idPost: PropTypes.number,
    idWidth: PropTypes.number,
    idHeight: PropTypes.string,
    webformatURL: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    
}

export default PostCardPage