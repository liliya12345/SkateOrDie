// ===== HOME PAGE PRODUCTS =====

// // Массив продуктов (дублируем из shop.js или загружаем из localStorage)
// let homeProducts = [];
//
// // Инициализация продуктов на главной странице
// document.addEventListener('DOMContentLoaded', function() {
//   loadHomeProducts();
//   displayRandomProducts();
// });
//
// // Загрузить продукты для главной страницы
// function loadHomeProducts() {
//   // Сначала проверяем localStorage
//   const savedProducts = localStorage.getItem('skateordie_products');
//
//   if (savedProducts) {
//     homeProducts = JSON.parse(savedProducts);
//   }
//
//   // Если в localStorage нет продуктов или мало, используем дефолтные
//   if (homeProducts.length < 3) {
//     homeProducts = [
//       {
//         id: 1,
//         name: "Tech Wool Hoodie",
//         price: 89,
//         category: "Hoodies",
//         imageUrl: "https://static.zara.net/assets/public/d0a7/81e3/ad63490d965b/250763fbc04a/00248756505-a3/00248756505-a3.jpg?ts=1765454947405&w=2638",
//         badge: "Bestseller",
//         colors: ["Black", "Gray", "Navy"]
//       },
//       {
//         id: 2,
//         name: "Utility Cargo Pants",
//         price: 78,
//         category: "Pants",
//         imageUrl: "https://static.zara.net/assets/public/7782/7583/50bc479c9953/90c3e25ca998/T9333161508-p/T9333161508-p.jpg?ts=1765454457061&w=2638",
//         badge: "New",
//         colors: ["Black", "Olive", "Brown"]
//       },
//       {
//         id: 3,
//         name: "Pro Skate Shoes",
//         price: 120,
//         category: "Footwear",
//         imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         badge: "Limited",
//         colors: ["Black/White", "Gray", "Red"]
//       },
//       {
//         id: 4,
//         name: "Minimalist Cap",
//         price: 32,
//         category: "Accessories",
//         imageUrl: "https://static.zara.net/assets/public/96df/2eeb/b61342a4b947/b27eae1bd174/02326594400-e1/02326594400-e1.jpg?ts=1754654184597&w=1900",
//         badge: "Limited",
//         colors: ["Black", "White", "Navy"]
//       },
//       {
//         id: 5,
//         name: "Thermal Sweatshirt",
//         price: 65,
//         category: "Hoodies",
//         imageUrl: "https://static.zara.net/assets/public/7d06/884d/cfc4417e8255/c038c37bfaa0/01880661532-p/01880661532-p.jpg?ts=1762274326479&w=1900",
//         badge: "Sustainable",
//         colors: ["Gray", "Black", "Burgundy"]
//       },
//       {
//         id: 6,
//         name: "Ripstop Pants",
//         price: 55,
//         category: "Pants",
//         imageUrl: "https://static.zara.net/assets/public/2d76/4273/b0cd4403b32d/4e7b3547de4b/03854719800-e1/03854719800-e1.jpg?ts=1764246462261&w=666",
//         badge: "Sustainable",
//         colors: ["Black", "Gray", "Camo"]
//       }
//     ];
//   }
// }
//
// // Отобразить случайные продукты
// function displayRandomProducts() {
//   const container = document.getElementById('productsContainer');
//   if (!container) return;
//
//   // Очищаем контейнер
//   container.innerHTML = '';
//
//   // Получаем 3 случайных продукта
//   const randomProducts = getRandomProducts(3);
//
//   // Создаем карточки продуктов
//   randomProducts.forEach(product => {
//     const productCard = createProductCard(product);
//     container.appendChild(productCard);
//   });
// }
//
// // Получить случайные продукты
// function getRandomProducts(count) {
//   // Если продуктов меньше, чем нужно, возвращаем все
//   if (homeProducts.length <= count) {
//     return homeProducts;
//   }
//
//   // Получаем случайные индексы
//   const randomIndices = [];
//   while (randomIndices.length < count) {
//     const randomIndex = Math.floor(Math.random() * homeProducts.length);
//     if (!randomIndices.includes(randomIndex)) {
//       randomIndices.push(randomIndex);
//     }
//   }
//
//   // Возвращаем продукты по случайным индексам
//   return randomIndices.map(index => homeProducts[index]);
// }
//
// // Создать карточку продукта
// function createProductCard(product) {
//   const card = document.createElement('div');
//   card.className = 'card';
//   card.style.cssText = `
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//   `;
//
//   card.innerHTML = `
//     <div class="card-image" style="height: 200px; overflow: hidden; border-radius: var(--border-radius) var(--border-radius) 0 0;">
//       <img src="${product.imageUrl}" alt="${product.name}"
//            style="width: 100%; height: 100%; object-fit: cover;"
//            loading="lazy">
//       ${product.badge ? `<div style="position: absolute; top: 12px; left: 12px; background-color: #0d8e6c; color: #1a1a1a; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">${product.badge}</div>` : ''}
//     </div>
//     <div class="card-content" style="flex: 1; display: flex; flex-direction: column; padding: 24px;">
//       <div class="card-category" style="color: #0477bf; font-size: 0.875rem; font-weight: 600; margin-bottom: 8px;">
//         ${product.category}
//       </div>
//       <h3 class="card-title" style="margin: 0 0 12px 0; font-size: 1.25rem; color: var(--white);">
//         ${product.name}
//       </h3>
//       <p class="card-description" style="flex: 1; margin-bottom: 16px; color: var(--gray-300);">
//         ${getProductDescription(product)}
//       </p>
//       <div class="product-price" style="font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--white); margin-bottom: 16px;">
//         $${product.price}
//       </div>
//       <button class="btn btn-accent" onclick="goToProduct('${product.category}', ${product.id})"
//               style="width: 100%; padding: 12px; background-color: #b63971; color: #1a1a1a; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
//         <i class="fas fa-shopping-cart"></i>
//         Buy Now
//       </button>
//     </div>
//   `;
//
//   // Добавляем hover эффект
//   card.addEventListener('mouseenter', function() {
//     this.style.transform = 'translateY(-8px)';
//     this.style.boxShadow = '0 12px 24px rgba(0, 255, 136, 0.2)';
//   });
//
//   card.addEventListener('mouseleave', function() {
//     this.style.transform = 'translateY(0)';
//     this.style.boxShadow = 'none';
//   });
//
//   return card;
// }
//
// // Получить описание продукта
// function getProductDescription(product) {
//   if (product.description) {
//     return product.description;
//   }
//
//   // Генерируем описание на основе категории
//   const descriptions = {
//     'Hoodies': 'Premium quality hoodie with comfortable fit and durable fabric. Perfect for skateboarding and casual wear.',
//     'Pants': 'Durable skate pants with reinforced stitching and flexible material for maximum mobility.',
//     'Footwear': 'High-performance skate shoes with superior grip and impact protection.',
//     'Accessories': 'Essential skate accessories designed for style and functionality.',
//     'T-Shirts': 'Classic skate t-shirt with bold graphics and soft cotton fabric.',
//     'Jackets': 'Weather-resistant jacket perfect for skate sessions in any condition.',
//     'Skateboards': 'Professional skateboard deck with optimal pop and durability.'
//   };
//
//   return descriptions[product.category] || 'Premium skatewear product designed for performance and style.';
// }
//
// // Перейти к продукту в магазине
// function goToProduct(category, productId) {
//   // Сохраняем информацию о продукте
//   localStorage.setItem('skateordie_selected_category', category);
//   localStorage.setItem('skateordie_scroll_to_product', productId);
//
//   // Переходим в магазин
//   window.location.href = `shop.html?category=${category.toLowerCase()}`;
// }
//
// // Обновить продукты (можно вызвать из консоли)
// function refreshHomeProducts() {
//   loadHomeProducts();
//   displayRandomProducts();
// }
