import { useEffect, useState } from "react"
import { getImagePicsum } from "../API/loremPicsum"
import { getUsers } from "../API/randomDataUser"
import NavMenu from "../components/Navbar"
import '../components/index.css'
import PostCard from "../components/postCard"
import Footer from "../components/footer"


const Home = () => {

    const [userPost, setUserPost] = useState([])
    const [picsumImage, setPixiImage] = useState([])

    const getDataFromApis = async () => {
        try {
            const users = await getUsers();
            setUserPost(users)
            const image = await getImagePicsum();
            setPixiImage(image)

        } catch (error) {
            return (
                <>
                    <h1>{error}</h1>
                </>
            )
        }
    }

    useEffect(() => {
        getDataFromApis()
    }, [])

    const renderUser = () => {
        if (userPost.length > 0) {
            if (picsumImage.length > 0) {
                const userPostHTML = userPost.map((post, indice) => {

                    return (
                        <PostCard
                            idPost={picsumImage[indice].id}
                            idWidth={picsumImage[indice].width}
                            idHeight={picsumImage[indice].height}
                            webformatURL={picsumImage[indice].download_url
                            }
                            avatar={post.avatar}
                            username={post.username}


                        />
                    )

                })
                return userPostHTML
            } else {
                return (
                    <h4>cargando contenido</h4>
                )
            }

        }
    }


    return (
        <>
            <NavMenu />
            <div className="container mb-56 text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">Imágenes y Usuarios</h1>
                </div>
                <div className="row align-items-center">
                    <p className="col mt-3">Proyecto para la Desgraduación, utlizando React, una Api y Bootstrap. </p>
                </div>
            </div>
            <div className="main-div">
                {renderUser()}
            </div>
            <Footer />
        </>
    )
}



export default Home