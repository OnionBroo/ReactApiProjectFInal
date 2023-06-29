import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import '../components/index.css'

const UserCard = (props) => {
    return (
        <>

            <NavLink className="text-decoration-none col-post mt-3 card ms-4 border-0 rounded-3 bg" to={`/post/${props.idPost}`} style={{ width: "19rem" }}>
                <div className="m-0  box rounded-top-3">
                    <img src={props.avatar} width="200" height="250" className="card-img-top rounded-top-3  " alt="..." />
                    <div className="overlay rounded-3 align-items-center">
                        <p className="p-5 text-light ">Ir al usuario</p>
                    </div>
                </div>
                <div className="card-body pt-2 pb-2">
                    <h1 className="navbar-brand" href="#">{props.username}</h1>
                    <ul className="list-group list-group-flush border-0 bg">
                        <li className="list-group-item rounded-5 mb-1 border-0">Nombre: {props.first_name}</li>
                        <li className="list-group-item rounded-5 mb-1 border-0">{props.email}</li>
                        <li className="list-group-item rounded-5 mb-1 border-0">Teléfono: {props.phone_number}</li>
                    </ul>
                </div>
            </NavLink>



        </>
    )
}

UserCard.propTypes = {
    idPost: PropTypes.string,
    avatar: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    first_name: PropTypes.string,
}

export default UserCard