
const getImagePicsum = () => {
    const promise = new Promise((resolve, reject) =>{
        fetch('https://picsum.photos/v2/list?page=3&limit=28')
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
export {getImagePicsum}