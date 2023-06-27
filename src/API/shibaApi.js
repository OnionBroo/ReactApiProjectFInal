const getShiba = async () => {
    const response = await fetch('http://shibe.online/api/shibes')
    const shibaImage = await response.json()
}