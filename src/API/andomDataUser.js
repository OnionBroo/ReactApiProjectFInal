const Users = () => {
    const promise = new Promise((resolve, reject) =>{
        fetch('https://random-data-api.com/api/v2/users?size=100')
        .then((usersJSON)=>{
            const usersData = usersJSON.json()
            resolve(usersData)
        })
        .catch((error) =>{
            reject(error)
        }) 
    })
    return promise 
}
export default Users