import { useEffect, useState } from 'react'
import './index.css'


const LateralBar = () => {
    const [shiba, setShiba] = useState([])

    const getShiba = async () => {
        const response = await fetch('http://shibe.online/api/shibes')
        const shibaImage = await response.json()
        setShiba(shibaImage)
    }


    useEffect(() => {
        getShiba()
    }, [])




    return (
        <>

            <div className="card border-0 " style={{ width: "13rem" }}>
                <img src={shiba} className="img-fluid rounded-1 card-img-top  p-1" />
                <div className="card-body">
                    <p className="card-text">Shiba Random</p>
                </div>
            </div>
        </>
    )
}
export default LateralBar