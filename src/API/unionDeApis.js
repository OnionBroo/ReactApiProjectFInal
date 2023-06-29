import { userPostHTML } from "../view/home"

const vacio = []

console.log("ola")

const Images = [
    {
        "id": "56",
        "author": "Sebastian Muller",
        "width": 2880,
        "height": 1920,
        "url": "https://unsplash.com/photos/VLdaxYyXJvw",
        "download_url": "https://picsum.photos/id/56/2880/1920"
    },
    {
        "id": "57",
        "author": "Nicholas Swanson",
        "width": 2448,
        "height": 3264,
        "url": "https://unsplash.com/photos/SyBYM8R6VU4",
        "download_url": "https://picsum.photos/id/57/2448/3264"
    },
    {
        "id": "58",
        "author": "Tony Naccarato",
        "width": 1280,
        "height": 853,
        "url": "https://unsplash.com/photos/-kEr-QltARg",
        "download_url": "https://picsum.photos/id/58/1280/853"
    },
    {
        "id": "59",
        "author": "Art Wave",
        "width": 2464,
        "height": 1632,
        "url": "https://unsplash.com/photos/algEQavPY4M",
        "download_url": "https://picsum.photos/id/59/2464/1632"
    },
    {
        "id": "60",
        "author": "Vadim Sherbakov",
        "width": 1920,
        "height": 1200,
        "url": "https://unsplash.com/photos/Hi9GSwWkCJk",
        "download_url": "https://picsum.photos/id/60/1920/1200"
    },
    {
        "id": "61",
        "author": "Alex",
        "width": 3264,
        "height": 2448,
        "url": "https://unsplash.com/photos/zMz14hsbpuU",
        "download_url": "https://picsum.photos/id/61/3264/2448"
    },
    {
        "id": "62",
        "author": "Daniel Genser",
        "width": 2000,
        "height": 1333,
        "url": "https://unsplash.com/photos/PzPbh-faPgU",
        "download_url": "https://picsum.photos/id/62/2000/1333"
    },
    {
        "id": "63",
        "author": "Justin Leibow",
        "width": 5000,
        "height": 2813,
        "url": "https://unsplash.com/photos/ZJsseAxEcqM",
        "download_url": "https://picsum.photos/id/63/5000/2813"
    },
    {
        "id": "64",
        "author": "Alexander Shustov",
        "width": 4326,
        "height": 2884,
        "url": "https://unsplash.com/photos/AHBiSKaENwc",
        "download_url": "https://picsum.photos/id/64/4326/2884"
    },
    {
        "id": "65",
        "author": "Alexander Shustov",
        "width": 4912,
        "height": 3264,
        "url": "https://unsplash.com/photos/2FrX56QL7P8",
        "download_url": "https://picsum.photos/id/65/4912/3264"
    },
    {
        "id": "66",
        "author": "Nicholas Swanson",
        "width": 3264,
        "height": 2448,
        "url": "https://unsplash.com/photos/agnhLQWqr1Q",
        "download_url": "https://picsum.photos/id/66/3264/2448"
    },
    {
        "id": "67",
        "author": "Rula Sibai",
        "width": 2848,
        "height": 4288,
        "url": "https://unsplash.com/photos/QbkGwv3xtmQ",
        "download_url": "https://picsum.photos/id/67/2848/4288"
    },
    {
        "id": "68",
        "author": "Cristian Moscoso",
        "width": 4608,
        "height": 3072,
        "url": "https://unsplash.com/photos/2SfRAWkinpU",
        "download_url": "https://picsum.photos/id/68/4608/3072"
    },
    {
        "id": "69",
        "author": "Alexander Shustov",
        "width": 4912,
        "height": 3264,
        "url": "https://unsplash.com/photos/SITaCHf7jjg",
        "download_url": "https://picsum.photos/id/69/4912/3264"
    },
    {
        "id": "70",
        "author": "Dorothy Lin",
        "width": 3011,
        "height": 2000,
        "url": "https://unsplash.com/photos/OokBLPrkCNk",
        "download_url": "https://picsum.photos/id/70/3011/2000"
    },
    {
        "id": "71",
        "author": "Jon Eckert",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/IoIbdFdGCnQ",
        "download_url": "https://picsum.photos/id/71/5000/3333"
    },
    {
        "id": "72",
        "author": "Tyler Finck",
        "width": 3000,
        "height": 2000,
        "url": "https://unsplash.com/photos/Cs4QZdHrHt4",
        "download_url": "https://picsum.photos/id/72/3000/2000"
    },
    {
        "id": "73",
        "author": "Jon Eckert",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/umLpP7uCZs0",
        "download_url": "https://picsum.photos/id/73/5000/3333"
    },
    {
        "id": "74",
        "author": "Isaak Dury",
        "width": 4288,
        "height": 2848,
        "url": "https://unsplash.com/photos/YhZbnxqtooM",
        "download_url": "https://picsum.photos/id/74/4288/2848"
    },
    {
        "id": "75",
        "author": "Jassy Onyae",
        "width": 1999,
        "height": 2998,
        "url": "https://unsplash.com/photos/1gBUXhf0PtA",
        "download_url": "https://picsum.photos/id/75/1999/2998"
    },
    {
        "id": "76",
        "author": "Alexander Shustov",
        "width": 4912,
        "height": 3264,
        "url": "https://unsplash.com/photos/OxzhYtL-00Y",
        "download_url": "https://picsum.photos/id/76/4912/3264"
    },
    {
        "id": "77",
        "author": "May Pamintuan",
        "width": 1631,
        "height": 1102,
        "url": "https://unsplash.com/photos/j9nfqTi5T5o",
        "download_url": "https://picsum.photos/id/77/1631/1102"
    },
    {
        "id": "78",
        "author": "Paul Evans",
        "width": 1584,
        "height": 2376,
        "url": "https://unsplash.com/photos/CtkDsu4w-Rs",
        "download_url": "https://picsum.photos/id/78/1584/2376"
    },
    {
        "id": "79",
        "author": "Dorothy Lin",
        "width": 2000,
        "height": 3011,
        "url": "https://unsplash.com/photos/TIr6EwYMRUM",
        "download_url": "https://picsum.photos/id/79/2000/3011"
    },
    {
        "id": "80",
        "author": "Sonja Langford",
        "width": 3888,
        "height": 2592,
        "url": "https://unsplash.com/photos/Y2PYfopoz-k",
        "download_url": "https://picsum.photos/id/80/3888/2592"
    },
    {
        "id": "81",
        "author": "Sander Weeteling",
        "width": 5000,
        "height": 3250,
        "url": "https://unsplash.com/photos/rlxZqmc6D_I",
        "download_url": "https://picsum.photos/id/81/5000/3250"
    },
    {
        "id": "82",
        "author": "Rula Sibai",
        "width": 1500,
        "height": 997,
        "url": "https://unsplash.com/photos/-vq7mi4oF0s",
        "download_url": "https://picsum.photos/id/82/1500/997"
    },
    {
        "id": "83",
        "author": "Julie Geiger",
        "width": 2560,
        "height": 1920,
        "url": "https://unsplash.com/photos/dYshDcTI1Js",
        "download_url": "https://picsum.photos/id/83/2560/1920"
    }
]



Images.map(img =>{
    
    vacio.push({idImagen:img.id})

})
const idPosts = [
    { idusuario: 197,idImagen: '56'  },  { idusuario: 3344 }, { idusuario: 2650 },
    { idusuario: 8196, idImagen: '58' }, { idusuario: 4665 }, { idusuario: 2722 },
    { idusuario: 1167, }, { idusuario: 8331 }, { idusuario: 4347 },
    { idusuario: 1519 }, { idusuario: 9693 }, { idusuario: 206 },
    { idusuario: 1811 }, { idusuario: 4453 }, { idusuario: 8147 },
    { idusuario: 4436 }, { idusuario: 5553 }, { idusuario: 1177 },
    { idusuario: 4016 }, { idusuario: 7662 }, { idusuario: 2246 },
    { idusuario: 8573 }, { idusuario: 9975 }, { idusuario: 6861 },
    { idusuario: 7377 }, { idusuario: 9977 }, { idusuario: 4438 },
    { idusuario: 4516 }]
console.log(vacio)