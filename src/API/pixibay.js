//API key de la api = "37799907-8d963c48ba5e566a58b05b038"//
const getImagePixi = () => {
    const promise = new Promise((resolve, reject) =>{
        fetch('https://pixabay.com/api/?key=37799907-8d963c48ba5e566a58b05b038')
        .then((pixiImageJSON)=>{
            const pixiImage = pixiImageJSON.json()
            resolve(pixiImage)
        })
        .catch((error) =>{
            reject(error)
        }) 
    })
    return promise 
}
export {getImagePixi}