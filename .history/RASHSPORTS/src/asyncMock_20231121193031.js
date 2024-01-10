const products = [
  { id: "1", name: "Camiseta de Boca Juniors", category: "Indumentaria", price: 29.999, stock: 10, img: "./img/boca.jpeg" },
  { id: "10", name: "Botines TOTAL 90", category: "Calzado", price: 79.000, stock: 35, img: "./img/total90.jpg" },
  { id: "2", name: "Camiseta San Lorenzo", category: "Indumentaria", price: 29.999, stock: 25, img: "./img/casla.jpg" },
  { id: "190", name: "Camiseta Banfield", category: "Indumentaria", price: 29.999, stock: 51, img: "./img/banfield.jpg" },
  { id: "7", name: "Botines papi fulbo", category: "Calzado", price: 19.000, stock: 5, img: "./img/papi.jpg" },
  { id: "102", name: "Short Boca Juniors", category: "Indumentaria", price: 29.000, stock: 17, img: "./img/boquita.jpg" },
  { id: "4", name: "Ojotas D10S", category: "Calzado", price: 179.000, stock: 10, img: "./img/d10s.jpeg" },
  { id: "3", name: "Buzo entrenamiento Argentina", category: "Indumentaria", price: 109.000, stock: 58, img: "./img/argentina.jpg" },
];

      export const getProducts = (id) => {
        return new Promise((resolve, reject) => {

            if (products.length > 0) {
                setTimeout(() => {
                    resolve(products);
                }, 3000);
            } else {
                reject("No hay productos")
            }
        })
            };

     export const getProductByID = (id) => {
        return new Promise ((resolve, reject) => {
            if (products.length >0) {
                const product = products.find ( p => p.id === id);
                setTimeout(() => {
                  if(!product) {
                    reject(`No se encuentra el productos con el id ${id}`)
                  }
                  resolve(product);
                }, 2000);
              } else {
                reject("No hay productos");
              }
            });
          };

