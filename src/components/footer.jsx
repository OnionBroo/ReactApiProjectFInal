import '../components/index.css'
import Chrona from '../images/chronaImageForProject.jpg'
const Footer = () => {
    return (
        <>
            <div className="card-footer mt-5 pb-5 pt-3 text-center text-light bg-black">
                <div className="container text-center p-1">

                    <img className="rounded-circle m-4 col-1 img-fluid" src={Chrona} width={100} height={100} alt="" />

                    <div className="row  ">
                        <p className="col-12">
                            <a href="https://www.instagram.com/mandroo_o/" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover  ">@mandroo_o</a>
                            <a href=""></a>
                        </p>
                    </div>
                    <div className="row  ">
                        <p className="col-12">
                            <a href="https://github.com/OnionBroo" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover  ">github.com/OnionBroo</a>
                            <a href=""></a>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Footer