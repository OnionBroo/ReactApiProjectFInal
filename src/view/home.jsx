import { useEffect, useState } from "react"
import { getImagePixi } from "../API/loremPicsum"
import { getUsers } from "../API/randomDataUser"
import NavMenu from "../components/Navbar"
import '../components/index.css'
import PostCard from "../components/postCard"



const Home = () => {

    const [userPost, setUserPost] = useState([])
    const [pixiImage, setPixiImage] = useState([])

    const getDataFromApis = async () => {
        try {
            const users = await getUsers();
            setUserPost(users)
            const image = await getImagePixi();
            setPixiImage(image)

        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getDataFromApis()
    }, [])


    const renderUser = () => {
        if (userPost.length > 0) {
            if (pixiImage.length > 0) {
                const userPostHTML = userPost.map((post, indice) => {
                    return (
                        <PostCard
                            webformatURL={pixiImage[indice].download_url
                            }
                            avatar={post.avatar}
                            username={post.username}


                        />
                    )

                })
                return userPostHTML
            } else {
                return console.log("error")
            }

        }
    }


    return (
        <>
            <NavMenu />
            <div className="container text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">Imágenes y Usuarios</h1>
                </div>
                <div className="row align-items-center">
                    <p className="col mt-3">Discover food and drink on Pinterest for every occasion and any meal of the day. </p>
                </div>
            </div>
            <div className="main-div">
                {renderUser()}
            </div>
        </>
    )
}
export default Home