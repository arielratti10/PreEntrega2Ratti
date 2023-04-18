const productos = [
    {id: "1", nombre: "muscu_basquet", precio: 350, img: "../img/muscu_basquet.jpg", idCat:"2"},
    {id: "2", nombre: "equipo_largo", precio: 180, img: "../img/equipo_largo.jpg", idCat:"2"},
    {id: "3", nombre: "juego_voley", precio: 200, img: "../img/juego_voley.jpg", idCat:"3"},
    {id: "4", nombre: "remera_tenis", precio: 900, img: "../img/remera_tenis.jpg", idCat:"3"}
]


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            resolve(productos)
        }, 100) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}
