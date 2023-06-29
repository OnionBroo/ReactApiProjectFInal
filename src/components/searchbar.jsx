import '../components/index.css'
import PropTypes from "prop-types";

const SearchBar = ({setSearch}) => {


    return (
        <>

            <p className="col mt-3">Buscador de usuarios de la api. </p>
            <div className='row flex-wrap'>
                <input
                    onChange={(event) => {
                        setSearch({input: event.target.value})
                        
                    }}
                    className="form-control me-2 col"
                    type="search"
                    placeholder="Ingrese un nombre de Usuario"
                    aria-label="Search"

                />
                <button className="btn btn-outline-dark col-1" type="submit">Buscar</button>

            </div>
        </>
    )
}

SearchBar.propTypes = {
    setSearch: PropTypes.func,
}

export default SearchBar