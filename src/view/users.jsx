import { useEffect, useState } from "react"
import { getUsers } from "../API/randomDataUser"

import '../components/index.css'
import SearchBar from "../components/searchbar"
import UserCard from "../components/userCard"
import Footer from "../components/footer"
import NavMenu from "../components/Navbar"


const Users = () => {

    const [userPost, setUserPost] = useState([])
    const [search, setSearch] = useState({ input: '' })

    

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

            const searchUsers = userPost.filter(user => {
                if (search === '') {
                    return user
                }
                if (user.username.toLowerCase().includes(search.input.toLocaleLowerCase())) {
                    return user
                }
            })

            if (searchUsers.length > 0) {

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
            } else {
                return (
                    <>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                            <div className="row ">
                                <h1 className="col">Oh, no...</h1>
                            </div>
                            <img className="col-2 img-fluid" src="https://i.pinimg.com/originals/d9/a9/68/d9a9687e533efd2673484918a0e0443a.png" width={100} height={100} alt="" />
                            <div className="row align-items-center">
                                <p className="col mt-3">No existen usuarios con este nombre  </p>
                            </div>

                            </div>
                        </div>
                    </>
                )
            }


        }

    }








    return (
        <>
            <NavMenu />
            <div className="container mb-5 text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">Usuarios</h1>
                </div>
                <div className="row align-items-center">
                    <div className="row">

                        <SearchBar setSearch={setSearch} />

                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {renderUser()}

                </div>
            </div>
            <Footer />
        </>
    )
}
export default Users