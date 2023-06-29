import { useParams } from "react-router-dom";
import NavMenu from "../components/Navbar";
import '../components/index.css'
import { useEffect, useState } from "react";
import PostCardPage from "../components/postCardView";
import Footer from "../components/footer";

const Post = () => {

    const [picsumImage, setPicsumImage] = useState([])
    const [randomUser, setRandomUser] = useState([])
    const { id, width, height } = useParams()

    const getPost = async (id, width, height) => {
        const responseImage = await fetch(`https://picsum.photos/id/${id}/${width}/${height}`)
        const responseUser = await fetch('https://random-data-api.com/api/v2/users?size=2')

        const image = await responseImage
        setPicsumImage(image)

        const user = await responseUser.json()
        setRandomUser(user)

    }

    useEffect(() => {
        getPost(id, width, height)
    }, [])

    const render = () => {
        if (randomUser.length > 0) {
            return (
                <>
                    <PostCardPage
                        webformatURL={picsumImage.url}
                        avatar={randomUser[0].avatar}
                        username={randomUser[0].username}


                    />

                </>
            )
        }
    }

    return (
        <>
            <NavMenu />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    {render()}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Post