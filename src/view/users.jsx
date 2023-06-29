import { useEffect, useState } from "react"
import { getUsers } from "../API/randomDataUser"
import NavMenu from "../components/Navbar"
import '../components/index.css'
import SearchBar from "../components/searchbar"
import UserCard from "../components/userCard"


const Users = () => {
    
    const [userPost, setUserPost] = useState([])
    const [search, setSearch] = useState({input: ''})

    console.log(search)

    const getDataFromApi = async () => {
        try {
            const users = await getUsers();
            setUserPost(users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    const renderUser = () => {
        if (userPost.length > 0) {
            
            const searchUsers = userPost.filter( user =>{
                if(search === ''){
                    return user
                }
                if(user.username.toLowerCase().includes(search.input.toLocaleLowerCase())){
                    return user
                }
            })

            if(searchUsers.length > 0 ){

                const userHTML = searchUsers.map(user => {
                            
                    return (
                        <UserCard
                                
                            idPost={user.id}
                            avatar={user.avatar}
                            username={user.username}
                            email={user.email}
                            phone_number={user.phone_number}
                            first_name={user.first_name}
    
    
                        />
                    )
    
                })
                return userHTML
            }
            
                
        } else {
                return console.log("error")
        }

        }
    
    
    
    
    
    
    
    
    return (
        <>
            <NavMenu />
            <div className="container mb-56 text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">Usuarios</h1>
                </div>
                <div className="row align-items-center">
                   <SearchBar setSearch={setSearch} />
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                {renderUser()}

                </div>
            </div>

        </>
    )
}
export default Users