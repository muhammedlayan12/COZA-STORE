
// $(document).ready(function() {
//     // Assuming the data is directly available in the script
    

//     let productList = $('.products');

//     // Loop through each category
//     $.each(data.categories, function(category, products) {
//         // Loop through each product in the category
//         $.each(products, function(index, product) {
//             let card = `
//                 <div class="product">
//                     <div class="tag">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="price">
//                             <p>${product.title}</p>
//                             <span>${product.price}</span>
//                         </div>
//                         <div class="i">
//                             ${product.icon}
//                         </div>
//                     </div>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     });
// });











// // Function to render products
// function renderProducts(products) {
//   let productList = $('.products');
//   productList.empty();
  
//   products.forEach((product, index) => {
//     let card = `
//       <div class="product">
//         <div class="tag">
//           <img src="${product.image}" alt="${product.title}">
//           <div class="price">
//             <p>${product.title}</p>
//             <span>${product.price}</span>
//           </div>
//           <div class="i">
//             ${product.icon}
//           </div>
//         </div>
//         <button class="shop-now" data-index="${index}">Shop Now</button>
//       </div>
//     `;
//     productList.append(card);
//   });

//   // Add event listener for the "Shop Now" button
//   $('.shop-now').on('click', function() {
//     let productIndex = $(this).data('index');
//     let product = products[productIndex];
    
//     // Populate modal with product details
//     $('#modalProductContent').html(`
//       <h2>${product.title}</h2>
//       <img src="${product.image}" alt="${product.title}">
//       <p>${product.price}</p>
//       <p>${product.description}</p> <!-- Assuming description is available -->
//     `);
    
//     // Display the modal
//     $('#productModal').fadeIn();
//   });

//   // Close the modal when the "x" button is clicked
//   $('.close').on('click', function() {
//     $('#productModal').fadeOut();
//   });

//   // Close the modal when clicking outside of the modal content
//   $(window).on('click', function(event) {
//     if ($(event.target).is('#productModal')) {
//       $('#productModal').fadeOut();
//     }
//   });
// }


// // Function to load products by category
// function loadProductsByCategory(category) {
//   $.getJSON('data.json', function (data) {
//       let products = data.data.filter(product => product.category === category);
//       renderProducts(products);
//   }).fail(function () {
//       console.error('Failed to load data.json');
//   });
// }

// // Function to load products from the inline data object
// function loadProductsFromData(data, category) {
//   let allProducts = [];

//   if (category === 'All Products') {
//       // Combine all products
//       $.each(data.categories, function (cat, products) {
//           allProducts = allProducts.concat(products);
//       });
//   } else {
//       // Filter products by selected category
//       allProducts = data.categories[category] || [];
//   }

//   renderProducts(allProducts);
// }

// $(document).ready(function () {
//   // Inline data object
//   // Inline data object
//   const data = {
//     "categories": {
//         "Women": [
//             {
//                 "id": 1,
//                 "title": "Jacket Adidas F345F",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//                 "price": "$50"
//             },
//             {
//                 "id": 2,
//                 "title": "Jacket Nike Z200",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//                 "price": "$70"
//               },
//               {
//                 "id": 4,
//                 "title": "Jacket Patagonia X1000",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
//                 "price": "$200"
//               },
//               {
//                 "id": 5,
//                 "title": "Jacket Columbia Q45",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
//                 "price": "$250"
//               },
//               {
//                 "id": 7,
//                 "title": "Jacket Timberland H450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
//                 "price": "$80"
//               },
//               {
//                 "id": 8,
//                 "title": "Jacket North Face C-Evo",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
//                 "price": "$90"
//               },
//               {
//                 "id": 10,
//                 "title": "Jacket Reebok V320",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
//                 "price": "$55"
//               },
//               {
//                 "id": 13,
//                 "title": "Jacket Arc'teryx Z590",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
//                 "price": "$230"
//               },
//               {
//                 "id": 14,
//                 "title": "Jacket The North Face A500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
//                 "price": "$140"
//               },
//               {
//                 "id": 16,
//                 "title": "Jacket Canada Goose K980",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
//                 "price": "$300"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Men": [
//             {
//                 "id": 3,
//                 "title": "Jacket North Face B450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//                 "price": "$150"
//               },
//               {
//                 "id": 11,
//                 "title": "Jacket Under Armour U850",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
//                 "price": "$110"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Watches": [
//             {
//                 "id": 6,
//                 "title": "Jacket Levi's T750",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//                 "price": "$100"
//               },
//               {
//                 "id": 15,
//                 "title": "Jacket Mammut M300",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
//                 "price": "$180"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Shoes": [
//             {
//                 "id": 9,
//                 "title": "Jacket Puma R500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//                 "price": "$65"
//               },
//               {
//                 "id": 12,
//                 "title": "Jacket Helly Hansen H270",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
//                 "price": "$190"
//               }
//             // ... (products as shown in your original code)
//         ]
//     }
// };


//   // Load all products from the inline data on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to buttons
//   $(".all-product").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Shoes');
//   });
// });




// // Function to render products
// function renderProducts(products) {
//   let productList = $('.products');
//   productList.empty();
  
//   products.forEach((product, index) => {
//     let card = `
//       <div class="product">
//         <div class="tag">
//           <img src="${product.image}" alt="${product.title}">
//           <div class="price">
//             <p>${product.title}</p>
//             <span>${product.price}</span>
//           </div>
//           <div class="i">
//             ${product.icon}
//           </div>
//         </div>
//         <button class="shop-now" data-index="${index}">Shop Now</button>
//       </div>
//     `;
//     productList.append(card);
//   });



  
//   // Add event listener for the "Shop Now" button
//   $('.shop-now').on('click', function() {
//     let productIndex = $(this).data('index');
//     let product = products[productIndex];
    
//     // Populate modal with product details
//     $('#modalProductContent').html(`
//       <h2>${product.title}</h2>
//       <img src="${product.image}" alt="${product.title}">
//       <p>${product.price}</p>
//       <p>${product.description || 'No description available.'}</p> <!-- Display a message if no description is available -->
//     `);
    
//     // Display the modal
//     $('#productModal').fadeIn();
//   });

//   // Close the modal when the "x" button is clicked
//   $('.close').on('click', function() {
//     $('#productModal').fadeOut();
//   });

//   // Close the modal when clicking outside of the modal content
//   $(window).on('click', function(event) {
//     if ($(event.target).is('#productModal')) {
//       $('#productModal').fadeOut();
//     }
//   });
// }

// // Function to load products from the inline data object
// function loadProductsFromData(data, category) {
//   let allProducts = [];

//   if (category === 'All Products') {
//     // Combine all products
//     $.each(data.categories, function (cat, products) {
//       allProducts = allProducts.concat(products);
//     });
//   } else {
//     // Filter products by selected category
//     allProducts = data.categories[category] || [];
//   }

//   renderProducts(allProducts);
// }

// $(document).ready(function () {
//   // Inline data object
//   const data = {
//     "categories": {
//       "Women": [
//         {
//           "id": 1,
//           "title": "Jacket Adidas F345F",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//           "price": "$50",
//           "description": "Comfortable and stylish Adidas jacket."
//         },
//         {
//           "id": 2,
//           "title": "Jacket Nike Z200",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//           "price": "$70",
//           "description": "A sleek and modern Nike jacket."
//         },
//         // Additional products...
//       ],
//       "Men": [
//         {
//           "id": 3,
//           "title": "Jacket North Face B450",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//           "price": "$150",
//           "description": "Durable North Face jacket for all conditions."
//         },
//         // Additional products...
//       ],
//       "Watches": [
//         {
//           "id": 6,
//           "title": "Jacket Levi's T750",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//           "price": "$100",
//           "description": "Stylish Levi's jacket for everyday wear."
//         },
//         // Additional products...
//       ],
//       "Shoes": [
//         {
//           "id": 9,
//           "title": "Jacket Puma R500",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//           "price": "$65",
//           "description": "Comfortable Puma shoes for all-day wear."
//         },
//         // Additional products...
//       ]
//     }
//   };

//   // Load all products from the inline data on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to category buttons
//   $(".all-product").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Shoes');
//   });
// });










// $(document).ready(function() {
//     // Assuming the data is directly available in the script
    

//     let productList = $('.products');

//     // Loop through each category
//     $.each(data.categories, function(category, products) {
//         // Loop through each product in the category
//         $.each(products, function(index, product) {
//             let card = `
//                 <div class="product">
//                     <div class="tag">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="price">
//                             <p>${product.title}</p>
//                             <span>${product.price}</span>
//                         </div>
//                         <div class="i">
//                             ${product.icon}
//                         </div>
//                     </div>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     });
// });











// // Function to render products
// function renderProducts(products) {
//   let productList = $('.products');
//   productList.empty();
  
//   products.forEach((product, index) => {
//     let card = `
//       <div class="product">
//         <div class="tag">
//           <img src="${product.image}" alt="${product.title}">
//           <div class="price">
//             <p>${product.title}</p>
//             <span>${product.price}</span>
//           </div>
//           <div class="i">
//             ${product.icon}
//           </div>
//         </div>
//         <button class="shop-now" data-index="${index}">Shop Now</button>
//       </div>
//     `;
//     productList.append(card);
//   });

//   // Add event listener for the "Shop Now" button
//   $('.shop-now').on('click', function() {
//     let productIndex = $(this).data('index');
//     let product = products[productIndex];
    
//     // Populate modal with product details
//     $('#modalProductContent').html(`
//       <h2>${product.title}</h2>
//       <img src="${product.image}" alt="${product.title}">
//       <p>${product.price}</p>
//       <p>${product.description}</p> <!-- Assuming description is available -->
//     `);
    
//     // Display the modal
//     $('#productModal').fadeIn();
//   });

//   // Close the modal when the "x" button is clicked
//   $('.close').on('click', function() {
//     $('#productModal').fadeOut();
//   });

//   // Close the modal when clicking outside of the modal content
//   $(window).on('click', function(event) {
//     if ($(event.target).is('#productModal')) {
//       $('#productModal').fadeOut();
//     }
//   });
// }


// // Function to load products by category
// function loadProductsByCategory(category) {
//   $.getJSON('data.json', function (data) {
//       let products = data.data.filter(product => product.category === category);
//       renderProducts(products);
//   }).fail(function () {
//       console.error('Failed to load data.json');
//   });
// }

// // Function to load products from the inline data object
// function loadProductsFromData(data, category) {
//   let allProducts = [];

//   if (category === 'All Products') {
//       // Combine all products
//       $.each(data.categories, function (cat, products) {
//           allProducts = allProducts.concat(products);
//       });
//   } else {
//       // Filter products by selected category
//       allProducts = data.categories[category] || [];
//   }

//   renderProducts(allProducts);
// }

// $(document).ready(function () {
//   // Inline data object
//   // Inline data object
//   const data = {
//     "categories": {
//         "Women": [
//             {
//                 "id": 1,
//                 "title": "Jacket Adidas F345F",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//                 "price": "$50"
//             },
//             {
//                 "id": 2,
//                 "title": "Jacket Nike Z200",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//                 "price": "$70"
//               },
//               {
//                 "id": 4,
//                 "title": "Jacket Patagonia X1000",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
//                 "price": "$200"
//               },
//               {
//                 "id": 5,
//                 "title": "Jacket Columbia Q45",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
//                 "price": "$250"
//               },
//               {
//                 "id": 7,
//                 "title": "Jacket Timberland H450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
//                 "price": "$80"
//               },
//               {
//                 "id": 8,
//                 "title": "Jacket North Face C-Evo",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
//                 "price": "$90"
//               },
//               {
//                 "id": 10,
//                 "title": "Jacket Reebok V320",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
//                 "price": "$55"
//               },
//               {
//                 "id": 13,
//                 "title": "Jacket Arc'teryx Z590",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
//                 "price": "$230"
//               },
//               {
//                 "id": 14,
//                 "title": "Jacket The North Face A500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
//                 "price": "$140"
//               },
//               {
//                 "id": 16,
//                 "title": "Jacket Canada Goose K980",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
//                 "price": "$300"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Men": [
//             {
//                 "id": 3,
//                 "title": "Jacket North Face B450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//                 "price": "$150"
//               },
//               {
//                 "id": 11,
//                 "title": "Jacket Under Armour U850",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
//                 "price": "$110"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Watches": [
//             {
//                 "id": 6,
//                 "title": "Jacket Levi's T750",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//                 "price": "$100"
//               },
//               {
//                 "id": 15,
//                 "title": "Jacket Mammut M300",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
//                 "price": "$180"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Shoes": [
//             {
//                 "id": 9,
//                 "title": "Jacket Puma R500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//                 "price": "$65"
//               },
//               {
//                 "id": 12,
//                 "title": "Jacket Helly Hansen H270",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
//                 "price": "$190"
//               }
//             // ... (products as shown in your original code)
//         ]
//     }
// };


//   // Load all products from the inline data on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to buttons
//   $(".all-product").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Shoes');
//   });
// });


// $(document).ready(function() {
//     // Assuming the data is directly available in the script
    

//     let productList = $('.products');

//     // Loop through each category
//     $.each(data.categories, function(category, products) {
//         // Loop through each product in the category
//         $.each(products, function(index, product) {
//             let card = `
//                 <div class="product">
//                     <div class="tag">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="price">
//                             <p>${product.title}</p>
//                             <span>${product.price}</span>
//                         </div>
//                         <div class="i">
//                             ${product.icon}
//                         </div>
//                     </div>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     });
// });











// // Function to render products
// function renderProducts(products) {
//   let productList = $('.products');
//   productList.empty();
  
//   products.forEach((product, index) => {
//     let card = `
//       <div class="product">
//         <div class="tag">
//           <img src="${product.image}" alt="${product.title}">
//           <div class="price">
//             <p>${product.title}</p>
//             <span>${product.price}</span>
//           </div>
//           <div class="i">
//             ${product.icon}
//           </div>
//         </div>
//         <button class="shop-now" data-index="${index}">Shop Now</button>
//       </div>
//     `;
//     productList.append(card);
//   });

//   // Add event listener for the "Shop Now" button
//   $('.shop-now').on('click', function() {
//     let productIndex = $(this).data('index');
//     let product = products[productIndex];
    
//     // Populate modal with product details
//     $('#modalProductContent').html(`
//       <h2>${product.title}</h2>
//       <img src="${product.image}" alt="${product.title}">
//       <p>${product.price}</p>
//       <p>${product.description}</p> <!-- Assuming description is available -->
//     `);
    
//     // Display the modal
//     $('#productModal').fadeIn();
//   });

//   // Close the modal when the "x" button is clicked
//   $('.close').on('click', function() {
//     $('#productModal').fadeOut();
//   });

//   // Close the modal when clicking outside of the modal content
//   $(window).on('click', function(event) {
//     if ($(event.target).is('#productModal')) {
//       $('#productModal').fadeOut();
//     }
//   });
// }


// // Function to load products by category
// function loadProductsByCategory(category) {
//   $.getJSON('data.json', function (data) {
//       let products = data.data.filter(product => product.category === category);
//       renderProducts(products);
//   }).fail(function () {
//       console.error('Failed to load data.json');
//   });
// }

// // Function to load products from the inline data object
// function loadProductsFromData(data, category) {
//   let allProducts = [];

//   if (category === 'All Products') {
//       // Combine all products
//       $.each(data.categories, function (cat, products) {
//           allProducts = allProducts.concat(products);
//       });
//   } else {
//       // Filter products by selected category
//       allProducts = data.categories[category] || [];
//   }

//   renderProducts(allProducts);
// }

// $(document).ready(function () {
//   // Inline data object
//   // Inline data object
//   const data = {
//     "categories": {
//         "Women": [
//             {
//                 "id": 1,
//                 "title": "Jacket Adidas F345F",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//                 "price": "$50"
//             },
//             {
//                 "id": 2,
//                 "title": "Jacket Nike Z200",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//                 "price": "$70"
//               },
//               {
//                 "id": 4,
//                 "title": "Jacket Patagonia X1000",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
//                 "price": "$200"
//               },
//               {
//                 "id": 5,
//                 "title": "Jacket Columbia Q45",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
//                 "price": "$250"
//               },
//               {
//                 "id": 7,
//                 "title": "Jacket Timberland H450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
//                 "price": "$80"
//               },
//               {
//                 "id": 8,
//                 "title": "Jacket North Face C-Evo",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
//                 "price": "$90"
//               },
//               {
//                 "id": 10,
//                 "title": "Jacket Reebok V320",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
//                 "price": "$55"
//               },
//               {
//                 "id": 13,
//                 "title": "Jacket Arc'teryx Z590",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
//                 "price": "$230"
//               },
//               {
//                 "id": 14,
//                 "title": "Jacket The North Face A500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
//                 "price": "$140"
//               },
//               {
//                 "id": 16,
//                 "title": "Jacket Canada Goose K980",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
//                 "price": "$300"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Men": [
//             {
//                 "id": 3,
//                 "title": "Jacket North Face B450",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//                 "price": "$150"
//               },
//               {
//                 "id": 11,
//                 "title": "Jacket Under Armour U850",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
//                 "price": "$110"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Watches": [
//             {
//                 "id": 6,
//                 "title": "Jacket Levi's T750",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//                 "price": "$100"
//               },
//               {
//                 "id": 15,
//                 "title": "Jacket Mammut M300",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
//                 "price": "$180"
//               }
//             // ... (products as shown in your original code)
//         ],
//         "Shoes": [
//             {
//                 "id": 9,
//                 "title": "Jacket Puma R500",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//                 "price": "$65"
//               },
//               {
//                 "id": 12,
//                 "title": "Jacket Helly Hansen H270",
//                 "icon": "<i class='fa-solid fa-heart'></i>",
//                 "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
//                 "price": "$190"
//               }
//             // ... (products as shown in your original code)
//         ]
//     }
// };


//   // Load all products from the inline data on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to buttons
//   $(".all-product").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//       event.preventDefault();
//       loadProductsFromData(data, 'Shoes');
//   });
// });




// // Function to render products
// function renderProducts(products) {
//   let productList = $('.products');
//   productList.empty();
  
//   products.forEach((product, index) => {
//     let card = `
//       <div class="product">
//         <div class="tag">
//           <img src="${product.image}" alt="${product.title}">
//           <div class="price">
//             <p>${product.title}</p>
//             <span>${product.price}</span>
//           </div>
//           <div class="i">
//             ${product.icon}
//           </div>
//         </div>
//         <button class="shop-now" data-index="${index}">Shop Now</button>
//       </div>
//     `;
//     productList.append(card);
//   });



// }

// $(document).ready(function () {
//   // Inline data object
//   const data = {
//     "categories": {
//       "Women": [
//         {
//           "id": 1,
//           "title": "Jacket Adidas F345F",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//           "price": "$50"
//       },
//       {
//           "id": 2,
//           "title": "Jacket Nike Z200",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//           "price": "$70"
//         },
//         {
//           "id": 4,
//           "title": "Jacket Patagonia X1000",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
//           "price": "$200"
//         },
//         {
//           "id": 5,
//           "title": "Jacket Columbia Q45",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
//           "price": "$250"
//         },
//         {
//           "id": 7,
//           "title": "Jacket Timberland H450",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
//           "price": "$80"
//         },
//         {
//           "id": 8,
//           "title": "Jacket North Face C-Evo",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
//           "price": "$90"
//         },
//         {
//           "id": 10,
//           "title": "Jacket Reebok V320",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
//           "price": "$55"
//         },
//         {
//           "id": 13,
//           "title": "Jacket Arc'teryx Z590",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
//           "price": "$230"
//         },
//         {
//           "id": 14,
//           "title": "Jacket The North Face A500",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
//           "price": "$140"
//         },
//         {
//           "id": 16,
//           "title": "Jacket Canada Goose K980",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
//           "price": "$300"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Men": [
//         {
//           "id": 3,
//           "title": "Jacket North Face B450",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//           "price": "$150"
//         },
//         {
//           "id": 11,
//           "title": "Jacket Under Armour U850",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
//           "price": "$110"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Watches": [
//         {
//           "id": 6,
//           "title": "Jacket Levi's T750",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//           "price": "$100"
//         },
//         {
//           "id": 15,
//           "title": "Jacket Mammut M300",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
//           "price": "$180"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Shoes": [
//         {
//           "id": 9,
//           "title": "Jacket Puma R500",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//           "price": "$65"
//         },
//         {
//           "id": 12,
//           "title": "Jacket Helly Hansen H270",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
//           "price": "$190"
//         }
//       // ... (products as shown in your original code)
//   ]
//     }
//   };

//   // Load all products from the inline data on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to category buttons
//   $(".all-product").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Shoes');
//   });
// });





  



// $(document).ready(function () {
  // const data = {
  //   "categories": {
  //     "Women": [
  //       {
  //         "id": 1,
  //         "title": "Jacket Adidas F345F",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
  //         "price": "$50"
  //     },
  //     {
  //         "id": 2,
  //         "title": "Jacket Nike Z200",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
  //         "price": "$70"
  //       },
  //       {
  //         "id": 4,
  //         "title": "Jacket Patagonia X1000",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
  //         "price": "$200"
  //       },
  //       {
  //         "id": 5,
  //         "title": "Jacket Columbia Q45",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
  //         "price": "$250"
  //       },
  //       {
  //         "id": 7,
  //         "title": "Jacket Timberland H450",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
  //         "price": "$80"
  //       },
  //       {
  //         "id": 8,
  //         "title": "Jacket North Face C-Evo",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
  //         "price": "$90"
  //       },
  //       {
  //         "id": 10,
  //         "title": "Jacket Reebok V320",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
  //         "price": "$55"
  //       },
  //       {
  //         "id": 13,
  //         "title": "Jacket Arc'teryx Z590",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
  //         "price": "$230"
  //       },
  //       {
  //         "id": 14,
  //         "title": "Jacket The North Face A500",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
  //         "price": "$140"
  //       },
  //       {
  //         "id": 16,
  //         "title": "Jacket Canada Goose K980",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
  //         "price": "$300"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Men": [
  //       {
  //         "id": 3,
  //         "title": "Jacket North Face B450",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
  //         "price": "$150"
  //       },
  //       {
  //         "id": 11,
  //         "title": "Jacket Under Armour U850",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
  //         "price": "$110"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Watches": [
  //       {
  //         "id": 6,
  //         "title": "Jacket Levi's T750",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
  //         "price": "$100"
  //       },
  //       {
  //         "id": 15,
  //         "title": "Jacket Mammut M300",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
  //         "price": "$180"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Shoes": [
  //       {
  //         "id": 9,
  //         "title": "Jacket Puma R500",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
  //         "price": "$65"
  //       },
  //       {
  //         "id": 12,
  //         "title": "Jacket Helly Hansen H270",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
  //         "price": "$190"
  //       }
  //     // ... (products as shown in your original code)
  // ]
  //   }
  // };

//   // Function to render products
//   function renderProducts(products) {
//     let productList = $('.products');
//     productList.empty();
    
//     products.forEach((product, index) => {
//       let card = `
//         <div class="product">
//           <div class="tag">
//             <img src="${product.image}" alt="${product.title}">
//             <div class="price">
//               <p>${product.title}</p>
//               <span>${product.price}</span>
//             </div>
//             <div class="i">
//               ${product.icon}
//             </div>
//           </div>
//           <button class="shop-now" data-index="${index}">Shop Now</button>
//         </div>
//       `;
//       productList.append(card);
//     });

//     // Add event listener for the "Shop Now" button
//     $('.shop-now').on('click', function() {
//       let productIndex = $(this).data('index');
//       let product = products[productIndex];
      
//       // Populate modal with product details
//       $('#productTitle').text(product.title);
//       $('#productPrice').text(product.price);
//       $('#productImage').attr('src', product.image);
      
//       // Reset quantity
//       $('#quantity').text(1);
      
//       // Display the modal
//       $('#productModal').fadeIn();
//     });

//     // Close the modal when the "x" button is clicked
//     $('.close').on('click', function() {
//       $('#productModal').fadeOut();
//     });

//     // Close the modal when clicking outside the modal content
//     $(window).on('click', function(event) {
//       if ($(event.target).is('#productModal')) {
//         $('#productModal').fadeOut();
//       }
//     });

//     // Quantity control logic
//     let quantity = 1;
//     $('#increase').on('click', function() {
//       quantity++;
//       $('#quantity').text(quantity);
//     });

//     $('#decrease').on('click', function() {
//       if (quantity > 1) {
//         quantity--;
//         $('#quantity').text(quantity);
//       }
//     });

//     // Add to Cart button logic
//     $('#addToCart').on('click', function() {
//       alert(`Added ${quantity} of this product to cart!`);
//       $('#productModal').fadeOut();
//     });
//   }

//   // Function to load products by category
//   function loadProductsFromData(data, category) {
//     let allProducts = [];

//     if (category === 'All Products') {
//       $.each(data.categories, function (cat, products) {
//         allProducts = allProducts.concat(products);
//       });
//     } else {
//       allProducts = data.categories[category] || [];
//     }

//     renderProducts(allProducts);
//   }

//   // Load all products on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to category buttons
//   $(".all-product").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Shoes');
//   });
// });










// $(document).ready(function () {
  // const data = {
  //   "categories": {
  //     "Women": [
  //       {
  //         "id": 1,
  //         "title": "Jacket Adidas F345F",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
  //         "price": "$50"
  //     },
  //     {
  //         "id": 2,
  //         "title": "Jacket Nike Z200",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
  //         "price": "$70"
  //       },
  //       {
  //         "id": 4,
  //         "title": "Jacket Patagonia X1000",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
  //         "price": "$200"
  //       },
  //       {
  //         "id": 5,
  //         "title": "Jacket Columbia Q45",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
  //         "price": "$250"
  //       },
  //       {
  //         "id": 7,
  //         "title": "Jacket Timberland H450",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
  //         "price": "$80"
  //       },
  //       {
  //         "id": 8,
  //         "title": "Jacket North Face C-Evo",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
  //         "price": "$90"
  //       },
  //       {
  //         "id": 10,
  //         "title": "Jacket Reebok V320",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
  //         "price": "$55"
  //       },
  //       {
  //         "id": 13,
  //         "title": "Jacket Arc'teryx Z590",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
  //         "price": "$230"
  //       },
  //       {
  //         "id": 14,
  //         "title": "Jacket The North Face A500",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
  //         "price": "$140"
  //       },
  //       {
  //         "id": 16,
  //         "title": "Jacket Canada Goose K980",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
  //         "price": "$300"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Men": [
  //       {
  //         "id": 3,
  //         "title": "Jacket North Face B450",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
  //         "price": "$150"
  //       },
  //       {
  //         "id": 11,
  //         "title": "Jacket Under Armour U850",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
  //         "price": "$110"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Watches": [
  //       {
  //         "id": 6,
  //         "title": "Jacket Levi's T750",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
  //         "price": "$100"
  //       },
  //       {
  //         "id": 15,
  //         "title": "Jacket Mammut M300",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
  //         "price": "$180"
  //       }
  //     // ... (products as shown in your original code)
  // ],
  //     "Shoes": [
  //       {
  //         "id": 9,
  //         "title": "Jacket Puma R500",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
  //         "price": "$65"
  //       },
  //       {
  //         "id": 12,
  //         "title": "Jacket Helly Hansen H270",
  //         "icon": "<i class='fa-solid fa-heart'></i>",
  //         "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
  //         "price": "$190"
  //       }
  //     // ... (products as shown in your original code)
  // ]
  //   }
  // };
//   let cart = []; // Array to store cart items

//   function renderProducts(products) {
//     let productList = $('.products');
//     productList.empty();
    
//     products.forEach((product, index) => {
//       let card = `
//         <div class="product">
//           <div class="tag">
//             <img src="${product.image}" alt="${product.title}">
//             <div class="price">
//               <p>${product.title}</p>
//               <span>${product.price}</span>
//             </div>
//             <div class="i">
//               ${product.icon}
//             </div>
//           </div>
//           <button class="shop-now" data-index="${index}">Shop Now</button>
//         </div>
//       `;
//       productList.append(card);
//     });

//     // Add event listener for the "Shop Now" button
//     $('.shop-now').on('click', function() {
//       let productIndex = $(this).data('index');
//       let product = products[productIndex];
      
//       // Populate modal with product details
//       $('#productTitle').text(product.title);
//       $('#productPrice').text(product.price);
//       $('#productImage').attr('src', product.image);
      
//       // Reset quantity
//       $('#quantity').text(1);
      
//       // Display the modal
//       $('#productModal').fadeIn();
//     });

//     // Close the modal when the "x" button is clicked
//     $('.close').on('click', function() {
//       $('#productModal').fadeOut();
//     });

//     // Close the modal when clicking outside the modal content
//     $(window).on('click', function(event) {
//       if ($(event.target).is('#productModal')) {
//         $('#productModal').fadeOut();
//       }
//     });

//     // Quantity control logic
//     let quantity = 1;
//     $('#increase').on('click', function() {
//       quantity++;
//       $('#quantity').text(quantity);
//     });

//     $('#decrease').on('click', function() {
//       if (quantity > 1) {
//         quantity--;
//         $('#quantity').text(quantity);
//       }
//     });

//     // Add to Cart button logic
//     $('#addToCart').on('click', function() {
//       let product = {
//         title: $('#productTitle').text(),
//         price: $('#productPrice').text(),
//         quantity: parseInt($('#quantity').text())
//       };
//       cart.push(product);

//       $('#productModal').fadeOut();

//       // Update and show cart notification
//       updateCartNotification();
//     });

//     // Function to update the cart notification
//     function updateCartNotification() {
//       let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//       $('#cartItemCount').text(`${totalItems} items`);
//       $('#cartNotification').fadeIn();

//       // Hide notification after 3 seconds
//       setTimeout(function() {
//         $('#cartNotification').fadeOut();
//       }, 3000);
//     }

//     // Checkout button logic
//     $('#checkoutButton').on('click', function() {
//       alert('Proceeding to checkout...');
//       // Redirect to checkout page or handle checkout process here
//     });
//   }

//   // Function to load products by category
//   function loadProductsFromData(data, category) {
//     let allProducts = [];

//     if (category === 'All Products') {
//       $.each(data.categories, function (cat, products) {
//         allProducts = allProducts.concat(products);
//       });
//     } else {
//       allProducts = data.categories[category] || [];
//     }

//     renderProducts(allProducts);
//   }

//   // Load all products on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to category buttons
//   $(".all-product").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Shoes');
//   });
// });




// $(document).ready(function () {
//   const data = {
//     "categories": {
//       "Women": [
//         {
//           "id": 1,
//           "title": "Jacket Adidas F345F",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
//           "price": "$50"
//       },
//       {
//           "id": 2,
//           "title": "Jacket Nike Z200",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
//           "price": "$70"
//         },
//         {
//           "id": 4,
//           "title": "Jacket Patagonia X1000",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
//           "price": "$200"
//         },
//         {
//           "id": 5,
//           "title": "Jacket Columbia Q45",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
//           "price": "$250"
//         },
//         {
//           "id": 7,
//           "title": "Jacket Timberland H450",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
//           "price": "$80"
//         },
//         {
//           "id": 8,
//           "title": "Jacket North Face C-Evo",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
//           "price": "$90"
//         },
//         {
//           "id": 10,
//           "title": "Jacket Reebok V320",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
//           "price": "$55"
//         },
//         {
//           "id": 13,
//           "title": "Jacket Arc'teryx Z590",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
//           "price": "$230"
//         },
//         {
//           "id": 14,
//           "title": "Jacket The North Face A500",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
//           "price": "$140"
//         },
//         {
//           "id": 16,
//           "title": "Jacket Canada Goose K980",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
//           "price": "$300"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Men": [
//         {
//           "id": 3,
//           "title": "Jacket North Face B450",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
//           "price": "$150"
//         },
//         {
//           "id": 11,
//           "title": "Jacket Under Armour U850",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
//           "price": "$110"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Watches": [
//         {
//           "id": 6,
//           "title": "Jacket Levi's T750",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
//           "price": "$100"
//         },
//         {
//           "id": 15,
//           "title": "Jacket Mammut M300",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
//           "price": "$180"
//         }
//       // ... (products as shown in your original code)
//   ],
//       "Shoes": [
//         {
//           "id": 9,
//           "title": "Jacket Puma R500",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
//           "price": "$65"
//         },
//         {
//           "id": 12,
//           "title": "Jacket Helly Hansen H270",
//           "icon": "<i class='fa-solid fa-heart'></i>",
//           "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
//           "price": "$190"
//         }
//       // ... (products as shown in your original code)
//   ]
//     }
//   };
//   let cart = []; // Array to store cart items

//   function renderProducts(products) {
//     let productList = $('.products');
//     productList.empty();
    
//     products.forEach((product, index) => {
//       let card = `
//         <div class="product">
//           <div class="tag">
//             <img src="${product.image}" alt="${product.title}">
//             <div class="price">
//               <p>${product.title}</p>
//               <span>${product.price}</span>
//             </div>
//             <div class="i">
//               ${product.icon}
//             </div>
//           </div>
//           <button class="shop-now" data-index="${index}">Shop Now</button>
//         </div>
//       `;
//       productList.append(card);
//     });

//     // Add event listener for the "Shop Now" button
//     $('.shop-now').on('click', function() {
//       let productIndex = $(this).data('index');
//       let product = products[productIndex];
      
//       // Populate modal with product details
//       $('#productTitle').text(product.title);
//       $('#productPrice').text(product.price);
//       $('#productImage').attr('src', product.image);
      
//       // Reset quantity
//       $('#quantity').text(1);
      
//       // Display the modal
//       $('#productModal').fadeIn();
//     });

//     // Close the modal when the "x" button is clicked
//     $('.close').on('click', function() {
//       $('#productModal').fadeOut();
//     });

//     // Close the modal when clicking outside the modal content
//     $(window).on('click', function(event) {
//       if ($(event.target).is('#productModal')) {
//         $('#productModal').fadeOut();
//       }
//     });

//     // Quantity control logic
//     let quantity = 1;
//     $('#increase').on('click', function() {
//       quantity++;
//       $('#quantity').text(quantity);
//     });

//     $('#decrease').on('click', function() {
//       if (quantity > 1) {
//         quantity--;
//         $('#quantity').text(quantity);
//       }
//     });

//     // Add to Cart button logic
//     $('#addToCart').on('click', function() {
//       let product = {
//         title: $('#productTitle').text(),
//         price: $('#productPrice').text(),
//         quantity: parseInt($('#quantity').text())
//       };
//       cart.push(product);

//       $('#productModal').fadeOut();

//       // Update and show cart notification
//       updateCartNotification();
//     });

//     // Function to update the cart notification
//     function updateCartNotification() {
//       let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//       $('#cartItemCount').text(`${totalItems} items`);
//       $('#cartNotification').fadeIn();

//       // Hide notification after 3 seconds
//       setTimeout(function() {
//         $('#cartNotification').fadeOut();
//       }, 3000);
//     }

//     // Checkout button logic
//     $('#checkoutButton').on('click', function() {
//       $('#checkoutModal').fadeIn();
//     });

//     // Close checkout modal
//     $('.close-checkout').on('click', function() {
//       $('#checkoutModal').fadeOut();
//     });

//     // Confirm and Checkout button logic
//     $('.checkout-button').on('click', function() {
//       alert('Thank you for your purchase!');
//       $('#checkoutModal').fadeOut();
//       // Implement actual checkout process here
//     });
//   }

//   // Function to load products by category
//   function loadProductsFromData(data, category) {
//     let allProducts = [];

//     if (category === 'All Products') {
//       $.each(data.categories, function (cat, products) {
//         allProducts = allProducts.concat(products);
//       });
//     } else {
//       allProducts = data.categories[category] || [];
//     }

//     renderProducts(allProducts);
//   }

//   // Load all products on page load
//   loadProductsFromData(data, 'All Products');

//   // Attach event handlers to category buttons
//   $(".all-product").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'All Products');
//   });

//   $(".woman").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Women');
//   });

//   $(".man").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Men');
//   });

//   $(".watches").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Watches');
//   });

//   $(".shoes").click(function (event) {
//     event.preventDefault();
//     loadProductsFromData(data, 'Shoes');
//   });
// });






$(document).ready(function () {

  const data = {
    "categories": {
      "Women": [
        {
          "id": 1,
          "title": "Jacket Adidas F345F",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-01.jpg",
          "price": "$50"
      },
      {
          "id": 2,
          "title": "Jacket Nike Z200",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-02.jpg",
          "price": "$70"
        },
        {
          "id": 4,
          "title": "Jacket Patagonia X1000",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-04.jpg",
          "price": "$200"
        },
        {
          "id": 5,
          "title": "Jacket Columbia Q45",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-05.jpg",
          "price": "$250"
        },
        {
          "id": 7,
          "title": "Jacket Timberland H450",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-07.jpg",
          "price": "$80"
        },
        {
          "id": 8,
          "title": "Jacket North Face C-Evo",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-08.jpg",
          "price": "$90"
        },
        {
          "id": 10,
          "title": "Jacket Reebok V320",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-10.jpg",
          "price": "$55"
        },
        {
          "id": 13,
          "title": "Jacket Arc'teryx Z590",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-13.jpg",
          "price": "$230"
        },
        {
          "id": 14,
          "title": "Jacket The North Face A500",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-14.jpg",
          "price": "$140"
        },
        {
          "id": 16,
          "title": "Jacket Canada Goose K980",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-16.jpg",
          "price": "$300"
        }
      // ... (products as shown in your original code)
  ],
      "Men": [
        {
          "id": 3,
          "title": "Jacket North Face B450",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-03.jpg",
          "price": "$150"
        },
        {
          "id": 11,
          "title": "Jacket Under Armour U850",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-11.jpg",
          "price": "$110"
        }
      // ... (products as shown in your original code)
  ],
      "Watches": [
        {
          "id": 6,
          "title": "Jacket Levi's T750",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-06.jpg",
          "price": "$100"
        },
        {
          "id": 15,
          "title": "Jacket Mammut M300",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-15.jpg",
          "price": "$180"
        }
      // ... (products as shown in your original code)
  ],
      "Shoes": [
        {
          "id": 9,
          "title": "Jacket Puma R500",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-09.jpg",
          "price": "$65"
        },
        {
          "id": 12,
          "title": "Jacket Helly Hansen H270",
          "icon": "<i class='fa-solid fa-heart'></i>",
          "image": "https://themewagon.github.io/cozastore/images/product-12.jpg",
          "price": "$190"
        }
      // ... (products as shown in your original code)
  ]
    }
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderProducts(products) {
    let productList = $('.products');
    productList.empty();
    
    products.forEach((product, index) => {
      let card = `
        <div class="product">
          <div class="tag">
            <img src="${product.image}" alt="${product.title}">
            <div class="price">
              <p>${product.title}</p>
              <span>${product.price}</span>
            </div>
            <div class="i">
              ${product.icon}
            </div>
          </div>
          <button class="shop-now" data-index="${index}">Shop Now</button>
        </div>
      `;
      productList.append(card);
    });

    $('.shop-now').on('click', function() {
      let productIndex = $(this).data('index');
      let product = products[productIndex];
      
      $('#productTitle').text(product.title);
      $('#productPrice').text(product.price);
      $('#productImage').attr('src', product.image);
      
      $('#quantity').text(1);
      
      $('#productModal').fadeIn();
    });

    $('.close').on('click', function() {
      $('#productModal').fadeOut();
    });

    $(window).on('click', function(event) {
      if ($(event.target).is('#productModal')) {
        $('#productModal').fadeOut();
      }
    });

    let quantity = 1;
    $('#increase').on('click', function() {
      quantity++;
      $('#quantity').text(quantity);
    });

    $('#decrease').on('click', function() {
      if (quantity > 1) {
        quantity--;
        $('#quantity').text(quantity);
      }
    });

    $('#addToCart').on('click', function() {
      let product = {
        title: $('#productTitle').text(),
        price: $('#productPrice').text(),
        quantity: parseInt($('#quantity').text()),
        image: $('#productImage').attr('src')
      };
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      $('#productModal').fadeOut();

      updateCartNotification();
    });

    function updateCartNotification() {
      let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      $('#cartItemCount').text(`${totalItems} items`);
      $('#cartNotification').fadeIn();

      setTimeout(function() {
        $('#cartNotification').fadeOut();
      }, 3000);
    }

    $('#checkoutButton').on('click', function() {
      $('#checkoutModal').fadeIn();
    });

    $('.close-checkout').on('click', function() {
      $('#checkoutModal').fadeOut();
    });

    $('.checkout-button').on('click', function() {
      alert('Thank you for your purchase!');
      localStorage.removeItem('cart');
      $('#checkoutModal').fadeOut();
    });

    $('.close-notification').on('click', function() {
      $('#cartNotification').fadeOut();
    });
  }

  function loadProductsFromData(data, category) {
    let allProducts = [];

    if (category === 'All Products') {
      $.each(data.categories, function (cat, products) {
        allProducts = allProducts.concat(products);
      });
    } else {
      allProducts = data.categories[category] || [];
    }

    renderProducts(allProducts);
  }

  loadProductsFromData(data, 'All Products');

  $(".all-product").click(function (event) {
    event.preventDefault();
    loadProductsFromData(data, 'All Products');
  });

  $(".woman").click(function (event) {
    event.preventDefault();
    loadProductsFromData(data, 'Women');
  });

  $(".man").click(function (event) {
    event.preventDefault();
    loadProductsFromData(data, 'Men');
  });

  $(".watches").click(function (event) {
    event.preventDefault();
    loadProductsFromData(data, 'Watches');
  });

  $(".shoes").click(function (event) {
    event.preventDefault();
    loadProductsFromData(data, 'Shoes');
  });
});
