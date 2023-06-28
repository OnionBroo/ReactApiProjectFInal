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
            console.log(users)
            setUserPost(users)
            const image = await getImagePixi();
            setPixiImage(image)
            console.log(pixiImage)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getDataFromApis()
    }, [])


    const renderUser = () => {
        if(userPost.length > 0 ){
            if(pixiImage.length > 0){
                const userPostHTML = userPost.map((post, indice) =>{
                    return (
                        <PostCard
                        webformatURL={pixiImage[indice].download_url
                        }
                        avatar = { post.avatar }
                        username = { post.username }
                        
        
                        />
                    )

                })
                return userPostHTML
            }else{
                return console.log("error")
            }
            
        }
    }
   

    return (
        <>
            <NavMenu />
            <div className="main-div">
                {renderUser()}
            </div>
        </>
    )
}
export default Home