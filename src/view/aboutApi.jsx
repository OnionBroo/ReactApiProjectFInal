
import NavMenu from "../components/navbar"
import Footer from "../components/footer"
import '../components/index.css'


const Apis = () =>{
    return(
        <>
        <NavMenu />
        <div className="container mb-5 text-center mt-5">
                <div className="row align-items-center">
                    <h1 className="col">API</h1>
                </div>
                <div className="row align-items-center mb-5">
                    <a className="col mt-3 fs-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://picsum.photos"> Lorem Picsum</a>
                    
                    
                    <a className="col mt-3 fs-3 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href="https://picsum.photos"> Random Data Generator</a>
                </div>
                <div className="row align-items-center mb-5">
                    <img src="https://sergioiglesias.net/images/pildoras-web/picsum_photos.png" width={300} className="col-6 mt-3" />
                    
                    
                    <img src="https://ph-files.imgix.net/f428eb9e-7046-45f5-8f76-4d5eac596ca1.png?auto=format&fit=crop" width={300} className="col-6 mt-0" />
                    
                    
                </div>
            </div>
        <Footer />
        
        </>
    )
}
export default Apis