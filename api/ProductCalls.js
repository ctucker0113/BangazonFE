const dbURL = 'https://localhost:5001'

// GET All Products
const getProducts = () => new Promise((resolve, reject) => {
    fetch(`${dbURL}/api/products`, {
        // NOTE: The above URL MAY need to be changed to api/products
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// const getProducts = () => new Promise((resolve, reject) => {
//     fetch(`${dbURL}/api/products`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => resolve(Object.values(data)))
//       .catch(reject);
//   });

export {
    getProducts,
    dbURL,
}