
const getImagePixi = () => {
    const promise = new Promise((resolve, reject) =>{
        fetch('https://picsum.photos/v2/list/')
        .then((pixiImageJSON)=>{
            const pixiData = pixiImageJSON.json()
            resolve(pixiData)
        })
        .catch((error) =>{
            reject(error)
        }) 
    })
    return promise 
}
export {getImagePixi}