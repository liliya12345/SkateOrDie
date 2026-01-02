
  // ===== SHOP JAVASCRIPT =====
  document.addEventListener('DOMContentLoaded', function() {
    initializeShop();
  });
  // Product Data - это единственный массив продуктов
  let products = [
  {
    id: 1,
    name: "Tech Wool Hoodie",
    price: 89,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/d0a7/81e3/ad63490d965b/250763fbc04a/00248756505-a3/00248756505-a3.jpg?ts=1765454947405&w=2638",
    badge: "Bestseller",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 2,
    name: "Utility Cargo Pants",
    price: 78,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/7782/7583/50bc479c9953/90c3e25ca998/T9333161508-p/T9333161508-p.jpg?ts=1765454457061&w=2638",
    badge: "New",
    colors: ["Black", "Olive", "Brown"]
  },
  {
    id: 3,
    name: "Pro Skate Shoes",
    price: 120,
    category: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Limited",
    colors: ["Black/White", "Gray", "Red"]
  },
  {
    id: 4,
    name: "Minimalist Cap",
    price: 32,
    category: "Accessories",
    imageUrl: "https://static.zara.net/assets/public/96df/2eeb/b61342a4b947/b27eae1bd174/02326594400-e1/02326594400-e1.jpg?ts=1754654184597&w=1900",
    badge:  "Limited",
    colors: ["Black", "White", "Navy"]
  },
  {
    id: 5,
    name: "Thermal Sweatshirt",
    price: 65,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/7d06/884d/cfc4417e8255/c038c37bfaa0/01880661532-p/01880661532-p.jpg?ts=1762274326479&w=1900",
    badge: "Sustainable",
    colors: ["Gray", "Black", "Burgundy"]
  },
  {
    id: 6,
    name: "Ripstop Pants",
    price: 55,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/2d76/4273/b0cd4403b32d/4e7b3547de4b/03854719800-e1/03854719800-e1.jpg?ts=1764246462261&w=666",
    badge: "Sustainable",
    colors: ["Black", "Gray", "Camo"]
  },
  {
    id: 7,
    name: "Skate Socks Pack",
    price: 18,
    category: "Accessories",
    imageUrl: "https://static.zara.net/assets/public/b068/ebdd/c5a74367b51c/b9da0891c20c/14358730002032-p/14358730002032-p.jpg?ts=1763394348250&w=1900",
    badge: "3 Pack",
    colors: ["Multicolor"]
  },
  {
    id: 8,
    name: "Classic Skate Hoodie",
    price: 69,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/3a0d/675d/94e9422693c3/ae93670581fb/06224701712-e1/06224701712-e1.jpg?ts=1763460889628&w=1900",
    badge: "Popular",
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 9,
    name: "Skull Graphic Tee",
    price: 39,
    category: "T-Shirts",
    imageUrl: "https://static.zara.net/assets/public/f179/579e/718e4a43a82b/b0e860bf7ba5/00722615104-e1/00722615104-e1.jpg?ts=1764167998022&w=1900",
    badge: "New",
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 10,
    name: "Cargo Skate Pants",
    price: 76,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/9522/a547/33fd4c639196/033822a584a1/03854719803-e1/03854719803-e1.jpg?ts=1764175026889&w=1900",
    badge:  "Limited",
    colors: ["Black", "Gray", "Olive"]
  },
  {
    id: 11,
    name: "Pro Skate Shoes V2",
    price: 129,
    category: "Footwear",
    imageUrl: "https://static.zara.net/assets/public/7f07/5ceb/b3d040898127/d6ddb173ab84/14358730002032-a1/14358730002032-a1.jpg?ts=1763394891967&w=2048",
    badge: "Bestseller",
    colors: ["Black", "White", "Blue"]
  },
  {
    id: 13,
    name: "Windbreaker Jacket",
    price: 89,
    category: "Jackets",
    imageUrl: "https://static.zara.net/assets/public/46ed/a782/b1cd4e708529/c6721d4ae714/05644765800-e1/05644765800-e1.jpg?ts=1759143307787&w=1900",
    badge: "Limited",
    colors: ["Black", "Red", "Blue"]
  },
  {
    id: 14,
    name: "Mesh Pants",
    price: 45,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/9522/a547/33fd4c639196/033822a584a1/03854719803-e1/03854719803-e1.jpg?ts=1764175026889&w=666",
    badge: "New",
    colors: ["Black", "Gray", "Blue"]
  },
  {
    id: 15,
    name: "Long Sleeve Skate Tee",
    price: 49,
    category: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "New",
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 18,
    name: "Flame Print Hoodie",
    price: 79,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/8f3a/9fc2/c6d6458291d8/129e5101b831/03854815712-a2/03854815712-a2.jpg?ts=1763108464210&w=1482",
    badge: "Hot",
    colors: ["Black/Red", "Black/Orange"]
  },
  {
    id: 19,
    name: "Ripped Jeans",
    price: 85,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/d08d/f4cb/67a04c2f8ba1/017f8709fadd/04302605407-e1/04302605407-e1.jpg?ts=1763984172537&w=1900",
    badge:  "Limited",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 21,
    name: "Puffer Vest",
    price: 95,
    category: "Jackets",
    imageUrl: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Winter",
    colors: ["Black", "Navy", "Olive"]
  },
  {
    id: 22,
    name: "Logo Sweatpants",
    price: 65,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/2a61/18d6/f2894ea9a5d3/c95ed201d5d1/09959667807-e1/09959667807-e1.jpg?ts=1764240955603&w=1900",
    badge:  "Limited",
    colors: ["Gray", "Black", "Navy"]
  },
  {
    id: 24,
    name: "Performance Tee",
    price: 42,
    category: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Moisture Wicking",
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 25,
    name: "Zipped Hoodie",
    price: 85,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/b0d9/a980/49df49e89f43/22a181a0db94/01880777800-p/01880777800-p.jpg?ts=1764868143882&w=1482",
    badge: "New",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 27,
    name: "Camo Print Hoodie",
    price: 78,
    category: "Hoodies",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Limited Edition",
    colors: ["Camo Green", "Camo Black"]
  },
  {
    id: 28,
    name: "Jogger Pants",
    price: 72,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/d467/fb1f/4b2341989563/5b8fb4cacaf8/01880661800-p/01880661800-p.jpg?ts=1762274325093&w=1900",
    badge:  "Limited",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 29,
    name: "High Top Skate Shoes",
    price: 135,
    category: "Footwear",
    imageUrl: "https://static.zara.net/assets/public/d1e7/7b7d/56004746a42f/47bc37c2c46e/14440630802-031-p/14440630802-031-p.jpg?ts=1761304958858&w=1900",
    badge: "Bestseller",
    colors: ["Black", "White", "Red"]
  },
  {
    id: 31,
    name: "Tie Dye Hoodie",
    price: 82,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/0126/df30/e32341bd8639/27ffdccc8bab/03854705712-e1/03854705712-e1.jpg?ts=1763655528924&w=1900",
    badge: "Artist Series",
    colors: ["Tie Dye Blue", "Tie Dye Pink"]
  },
  {
    id: 32,
    name: "Basic Skate Tee",
    price: 35,
    category: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge:  "Limited",
    colors: ["White", "Black", "Gray"]
  },
  {
    id: 33,
    name: "Corduroy Pants",
    price: 88,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/0c5d/222e/2774473ea66e/80db138856b2/04676670807-e1/04676670807-e1.jpg?ts=1762359584734&w=1900",
    badge: "Retro",
    colors: ["Brown", "Green", "Navy"]
  },
  {
    id: 35,
    name: "Heavyweight Hoodie",
    price: 92,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/6a6c/3970/71964f8fbcce/fe5bdf2f8bc8/06224704700-e1/06224704700-e1.jpg?ts=1763460916252&w=1900",
    badge: "Winter Collection",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 36,
    name: "Skate Pants",
    price: 48,
    category: "Pants",
    imageUrl: "https://static.zara.net/assets/public/3f6c/8bc7/a7894f8b9e02/96d95d9d8df6/03854762500-e1/03854762500-e1.jpg?ts=1761233781759&w=666",
    badge: "New",
    colors: ["Black", "Gray", "Camo"]
  },
  {
    id: 37,
    name: "Graphic Long Sleeve",
    price: 55,
    category: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "New Design",
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 39,
    name: "Fleece Jacket",
    price: 105,
    category: "Jackets",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Cozy",
    colors: ["Gray", "Black", "Navy"]
  },
  {
    id: 40,
    name: "Striped Hoodie",
    price: 76,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/3656/29b5/d8264eafa8a1/66b803d126f5/00962602898-e1/00962602898-e1.jpg?ts=1763456833271&w=1900",
    badge:  "Limited",
    colors: ["Black/White", "Navy/White"]
  },
  {
    id: 41,
    name: "Skate Slippers",
    price: 38,
    category: "Footwear",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Indoor",
    colors: ["Black", "Gray", "Blue"]
  },
  {
    id: 42,
    name: "Performance Pants",
    price: 52,
    category: "Pants",
    imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Active",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 43,
    name: "Logo Crewneck",
    price: 68,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/ebab/35e7/ba8e455c8dc1/60f1622ab83c/00962602898-p/00962602898-p.jpg?ts=1764081900897&w=1440",
    badge:  "Limited",
    colors: ["Gray", "Black", "White"]
  },
  {
    id: 45,
    name: "Oversized Hoodie",
    price: 88,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/9f5f/e7b5/dd17486bba85/c97241f4f39c/05431634430-e1/05431634430-e1.jpg?ts=1764581173917&w=1900",
    badge: "Oversized Fit",
    colors: ["Black", "Gray", "Oversized"]
  },
  {
    id: 47,
    name: "Thermal Hoodie",
    price: 95,
    category: "Hoodies",
    imageUrl: "https://static.zara.net/assets/public/2247/2925/352f4e68a39c/bd1929bd2e8b/05431634430-p/05431634430-p.jpg?ts=1764665553333&w=1440",
    badge: "Cold Weather",
    colors: ["Black", "Gray", "Navy"]
  },
  {
    id: 49,
    name: "Vintage Logo Tee",
    price: 45,
    category: "T-Shirts",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Retro",
    colors: ["White", "Black", "Vintage"]
  },
  {
    id: 50,
    name: "Skateboard Deck",
    price: 85,
    category: "Skateboards",
    imageUrl: "https://static.zara.net/assets/public/ee75/d5c7/fcf2414e9c12/d666bf33cbcf/00248756505-a2/00248756505-a2.jpg?ts=1765444033958&w=1712",
    badge: "Complete",
    colors: ["Various Graphics"]
  }
  ];

  let cart = [];
  let categories = ['Hoodies', 'Pants', 'Footwear', 'Accessories', 'T-Shirts', 'Jackets', 'Skateboards'];
  let selectedCategory = '';


  // Initialize shop
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Магазин инициализирован');

    // 1. Загружаем продукты из localStorage
    loadProductsFromStorage();

    // 2. Получаем категорию из URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'all';

    // 3. Загружаем корзину
    loadCart();

    // 4. Инициализируем модальное окно корзины
    setupCartModal();

    // 5. Обновляем UI корзины
    updateCartUI();

    // 6. Загружаем и показываем продукты
    loadProducts(category);

    // 7. Обновляем фильтры категорий
    updateFilterTabs();

    // 8. Прокрутка к выбранному продукту
    const scrollToProductId = localStorage.getItem('skateordie_scroll_to_product');
    if (scrollToProductId) {
      setTimeout(() => {
        const productElement = document.querySelector(`[data-product-id="${scrollToProductId}"]`);
        if (productElement) {
          productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          productElement.style.boxShadow = '0 0 0 3px #00ff88';
          setTimeout(() => {
            productElement.style.boxShadow = '';
          }, 2000);
        }
        localStorage.removeItem('skateordie_scroll_to_product');
      }, 500);
    }
  });

  // Load Products
  function loadProducts(category) {
  const container = document.getElementById('productsContainer');
  const filterTabs = document.querySelectorAll('.filter-tab');

  // Filter products
  let filteredProducts = products;
  if (category !== 'all') {
  filteredProducts = products.filter(p => p.category === category);
}

  // Clear container
  if (container) {
  container.innerHTML = '';
}

  // Update active tab
  if (filterTabs.length > 0) {
  filterTabs.forEach(tab => {
  tab.classList.remove('active');
  if (category === 'all' && tab.textContent === 'All Products') {
  tab.classList.add('active');
} else if (tab.textContent.includes(category)) {
  tab.classList.add('active');
}
});
}

  // Display message if no products
  if (filteredProducts.length === 0 && container) {
  container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px;">
        <div style="width: 64px; height: 64px; background-color: var(--gray-100); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px;">
          <i class="fas fa-box-open" style="font-size: 24px; color: var(--gray-800);"></i>
        </div>
        <h3 class="mb-2">No Products Found</h3>
        <p class="opacity-75">No products in this category yet.</p>
      </div>
    `;
  return;
}

  // Create product cards
  if (container) {
  filteredProducts.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.imageUrl}"
               alt="${product.name}"
               style="width: 100%; height: 100%; object-fit: cover;"
               loading="lazy">
          ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h4 class="product-title">${product.name}</h4>
          <div class="product-price">$${product.price}</div>
          <button class="btn btn-secondary mt-3" onclick="addToCart(${product.id})" style="width: 100%; padding: 10px 16px; font-size: 0.875rem;">
            <i class="fas fa-shopping-bag"></i>
            Add to Cart
          </button>
        </div>
      `;

  container.appendChild(productCard);
});
}
}

  // Filter Products
  function filterProducts(category) {
  loadProducts(category);

  // Update URL hash for deep linking
  const categoryId = category === 'all' ? 'filter-all' : `filter-${category.toLowerCase()}`;
  window.history.pushState(null, null, `#${categoryId}`);
}

  // Cart Functions
  function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
  existingItem.quantity += 1;
} else {
  cart.push({
  ...product,
  quantity: 1
});
}

  saveCart();
  updateCartUI();
  showNotification(`Added "${product.name}" to cart`, 'success');
}

  function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

  function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  // Update cart count
  if (cartCount) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

  // Update cart items
  if (cartItems) {
  if (cart.length === 0) {
  cartItems.innerHTML = `
        <div style="text-align: center; padding: 40px 0;">
          <i class="fas fa-shopping-bag" style="font-size: 3rem; color: var(--gray-300); margin-bottom: 16px;"></i>
          <p>Your cart is empty</p>
        </div>
      `;
} else {
  cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.imageUrl}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">$${item.price}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
              <button class="btn btn-secondary" onclick="removeFromCart(${item.id})" style="margin-left: auto; padding: 4px 8px; font-size: 0.75rem;">
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join('');
}
}

  // Update cart total
  if (cartTotal) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = `$${total}`;
}
}

  function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
  removeFromCart(productId);
  return;
}

  const item = cart.find(item => item.id === productId);
  if (item) {
  item.quantity = newQuantity;
  saveCart();
  updateCartUI();
}
}

  function saveCart() {
  localStorage.setItem('skateordie_cart', JSON.stringify(cart));
}

  function loadCart() {
  const savedCart = localStorage.getItem('skateordie_cart');
  if (savedCart) {
  cart = JSON.parse(savedCart);
  updateCartUI();
}
}

  function setupCartModal() {
  const cartModal = document.getElementById('cartModal');
  const overlay = document.getElementById('overlay');

  if (cartModal && overlay) {
  // Close modal when clicking outside
  overlay.addEventListener('click', toggleCart);
}
}

  function toggleCart() {
  const cartModal = document.getElementById('cartModal');
  const overlay = document.getElementById('overlay');

  if (cartModal && overlay) {
  cartModal.classList.toggle('active');
  overlay.classList.toggle('active');
}
}


  // Загрузить продукты из localStorage
  function loadProductsFromStorage() {
    const savedProducts = localStorage.getItem('skateordie_products');
    const savedCategories = localStorage.getItem('skateordie_categories');

    // ✅ ВАЖНО: Сначала загружаем сохраненные продукты
    if (savedProducts) {
      const storedProducts = JSON.parse(savedProducts);

      // ОБНОВЛЯЕМ основной массив products
      // Проверяем каждый сохраненный продукт
      storedProducts.forEach(storedProduct => {
        const existingIndex = products.findIndex(p => p.id === storedProduct.id);

        if (existingIndex !== -1) {
          // Обновляем существующий продукт
          products[existingIndex] = storedProduct;
        } else {
          // Добавляем новый продукт
          products.push(storedProduct);
        }
      });

      console.log('✅ Загружено из localStorage:', storedProducts.length, 'продуктов');
      console.log('📊 Всего продуктов теперь:', products.length);
    }

    // ✅ Загружаем категории
    if (savedCategories) {
      const storedCategories = JSON.parse(savedCategories);

      // Добавляем новые категории
      storedCategories.forEach(cat => {
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      });

      console.log('✅ Категории из localStorage:', categories);
    }
  }
  // ✅ НОВАЯ ФУНКЦИЯ: Обновить фильтры категорий
  function updateFilterTabs() {
    const filterTabs = document.getElementById('filterTabs');
    if (!filterTabs) return;

    // Очистить существующие фильтры (кроме "All Products")
    const allProductsBtn = filterTabs.querySelector('#filter-all');
    filterTabs.innerHTML = '';

    // Добавить кнопку "All Products"
    if (allProductsBtn) {
      filterTabs.appendChild(allProductsBtn);
    } else {
      const allBtn = document.createElement('button');
      allBtn.className = 'filter-tab active';
      allBtn.id = 'filter-all';
      allBtn.textContent = 'All Products';
      allBtn.onclick = function() { filterProducts('all'); };
      filterTabs.appendChild(allBtn);
    }

    // Добавить кнопки для всех категорий
    categories.forEach(category => {
      // Пропускаем если кнопка уже есть
      if (document.getElementById(`filter-${category.toLowerCase()}`)) {
        return;
      }

      const categoryBtn = document.createElement('button');
      categoryBtn.className = 'filter-tab';
      categoryBtn.id = `filter-${category.toLowerCase()}`;
      categoryBtn.textContent = category;
      categoryBtn.onclick = function() { filterProducts(category); };

      filterTabs.appendChild(categoryBtn);
    });

    // ✅ ТАКЖЕ ОБНОВИТЬ ДРОПДАУН В HEADER
    updateCategoryDropdown();
  }

  // ✅ ФУНКЦИЯ: Обновить dropdown категорий в header
  function updateCategoryDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (!dropdownContent) return;

    // Очистить существующие элементы (кроме "All Products")
    const allProductsLink = dropdownContent.querySelector('a[onclick*="filterProducts(\'all\')"]');
    dropdownContent.innerHTML = '';

    // Добавить "All Products" обратно
    if (allProductsLink) {
      dropdownContent.appendChild(allProductsLink);
    } else {
      const allLink = document.createElement('a');
      allLink.href = '#filter-all';
      allLink.className = 'dropdown-item';
      allLink.innerHTML = '<i class="fas fa-grid"></i> All Products';
      allLink.onclick = function() { filterProducts('all'); };
      dropdownContent.appendChild(allLink);
    }

    // Добавить все категории
    categories.forEach(category => {
      // Пропускаем если уже есть
      if (dropdownContent.querySelector(`a[onclick*="filterProducts('${category}')"]`)) {
        return;
      }

      const categoryLink = document.createElement('a');
      categoryLink.href = `#filter-${category.toLowerCase()}`;
      categoryLink.className = 'dropdown-item';

      // Выбрать иконку в зависимости от категории
      let iconClass = 'fas fa-tag'; // иконка по умолчанию
      if (category === 'Hoodies') iconClass = 'fas fa-tshirt';
      else if (category === 'Pants') iconClass = 'fas fa-user';
      else if (category === 'Footwear') iconClass = 'fas fa-shoe-prints';
      else if (category === 'Accessories') iconClass = 'fas fa-hat-cowboy';
      else if (category === 'T-Shirts') iconClass = 'fas fa-tshirt';
      else if (category === 'Jackets') iconClass = 'fas fa-vest';
      else if (category === 'Skateboards') iconClass = 'fas fa-skateboard';

      categoryLink.innerHTML = `<i class="${iconClass}"></i> ${category}`;
      categoryLink.onclick = function() { filterProducts(category); };

      dropdownContent.appendChild(categoryLink);
    });
  }
  // Сохранить продукты в localStorage
  function saveProductsToStorage() {
  localStorage.setItem('skateordie_products', JSON.stringify(products));
  localStorage.setItem('skateordie_categories', JSON.stringify(categories));
}

  // Show admin tab
  function showAdminTab(tabName) {
  // Hide all forms
  document.querySelectorAll('.admin-form').forEach(form => {
    form.classList.remove('active');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.admin-tab').forEach(tab => {
  tab.classList.remove('active');
});

  // Show selected form and activate tab
  document.getElementById(`${tabName}Form`).classList.add('active');
  event.target.classList.add('active');
}

  // Load categories for selection
  function loadCategories() {
  const container = document.getElementById('categorySelection');

  if (!container) return;

  container.innerHTML = categories.map(category => `
    <div class="category-tag" onclick="selectCategory('${category}')"
         data-category="${category}">
      <i class="fas fa-tag"></i>
      <span>${category}</span>
    </div>
  `).join('');
}

  // Select category
  function selectCategory(category) {
  selectedCategory = category;

  // Update UI
  document.querySelectorAll('.category-tag').forEach(tag => {
  tag.classList.remove('selected');
  if (tag.dataset.category === category) {
  tag.classList.add('selected');
}
});

  document.getElementById('selectedCategory').value = category;
}

  // Setup image preview
  function setupImagePreview() {
  const imageUrlInput = document.getElementById('productImageUrl');
  const preview = document.getElementById('imagePreview');

  if (imageUrlInput && preview) {
  imageUrlInput.addEventListener('input', function() {
  const url = this.value.trim();

  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
  preview.innerHTML = `<img src="${url}" alt="Product preview" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'image-preview-placeholder\'><i class=\'fas fa-exclamation-circle\'></i><span>Image not found</span></div>';">`;
} else if (url) {
  preview.innerHTML = '<div class="image-preview-placeholder"><i class="fas fa-exclamation-circle"></i><span>Invalid URL</span></div>';
} else {
  preview.innerHTML = '<div class="image-preview-placeholder"><i class="fas fa-image"></i><span>Image preview will appear here</span></div>';
}
});
}
}

  // Add new product
  function addNewProduct(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('productName').value.trim();
  const price = parseFloat(document.getElementById('productPrice').value);
  const category = document.getElementById('selectedCategory').value;
  const badge = document.getElementById('productBadge').value.trim();
  const description = document.getElementById('productDescription').value.trim();
  const imageUrl = document.getElementById('productImageUrl').value.trim();
  const colors = document.getElementById('productColors').value
  .split(',')
  .map(color => color.trim())
  .filter(color => color.length > 0);

  // Validation
  if (!name || !price || !category || !imageUrl) {
  showNotification('Please fill all required fields', 'error');
  return;
}

  if (price <= 0) {
  showNotification('Price must be greater than 0', 'error');
  return;
}

  // Generate new product ID
  const newId = products.length > 0
  ? Math.max(...products.map(p => p.id)) + 1
  : 1;

  // Create new product object
  const newProduct = {
  id: newId,
  name: name,
  price: price,
  category: category,
  imageUrl: imageUrl,
  badge: badge || null,
  colors: colors.length > 0 ? colors : ['Black', 'White', 'Gray'],
  addedDate: new Date().toISOString()
};

  // Add to products array
  products.push(newProduct);

  // Save to localStorage
  saveProductsToStorage();

  // Update UI
  updateProductSummary();

  // Add to filter tabs if new category
  if (!categories.includes(category)) {
  categories.push(category);
  loadCategories();
  addFilterTab(category);
}

  // Reset form
  resetProductForm();

  // Show notification
  showNotification(`Product "${name}" added successfully!`, 'success');

  // Reload products in current view
  const activeFilter = document.querySelector('.filter-tab.active');
  if (activeFilter) {
  const currentFilter = activeFilter.id.replace('filter-', '');
  if (currentFilter === 'all' || currentFilter === category.toLowerCase()) {
  loadProducts(currentFilter === 'all' ? 'all' : category);
}
}
}

  // Add new category
  function addNewCategory(event) {
  event.preventDefault();

  const categoryName = document.getElementById('categoryName').value.trim();

  if (!categoryName) {
  showNotification('Please enter a category name', 'error');
  return;
}

  if (categories.includes(categoryName)) {
  showNotification('Category already exists', 'error');
  return;
}

  // Add to categories
  categories.push(categoryName);

  // Update UI
  loadCategories();
  loadExistingCategoriesList();
  addFilterTab(categoryName);

  // Reset form
  resetCategoryForm();

  showNotification(`Category "${categoryName}" added successfully!`, 'success');
}

  // Add filter tab
  function addFilterTab(categoryName) {
  const filterTabs = document.getElementById('filterTabs');

  if (!filterTabs) return;

  // Check if tab already exists
  if (document.getElementById(`filter-${categoryName.toLowerCase()}`)) {
  return;
}

  const newTab = document.createElement('button');
  newTab.className = 'filter-tab';
  newTab.id = `filter-${categoryName.toLowerCase()}`;
  newTab.textContent = categoryName;
  newTab.onclick = function() { filterProducts(categoryName); };

  filterTabs.appendChild(newTab);
}

  // Reset product form
  function resetProductForm() {
  document.getElementById('productForm').reset();
  document.getElementById('imagePreview').innerHTML =
  '<div class="image-preview-placeholder"><i class="fas fa-image"></i><span>Image preview will appear here</span></div>';

  // Clear category selection
  selectedCategory = '';
  document.querySelectorAll('.category-tag').forEach(tag => {
  tag.classList.remove('selected');
});
  document.getElementById('selectedCategory').value = '';
}

  // Reset category form
  function resetCategoryForm() {
  document.getElementById('categoryForm').reset();
}

  // Load existing categories list
  function loadExistingCategoriesList() {
  const container = document.getElementById('existingCategories');

  if (!container) return;

  container.innerHTML = categories.map(category => `
    <div class="category-tag">
      <i class="fas fa-tag"></i>
      <span>${category}</span>
    </div>
  `).join('');
}

  // Update product summary
  function updateProductSummary() {
  document.getElementById('totalProducts').textContent = products.length;
  document.getElementById('dbTotalProducts').textContent = products.length;

  // Count by category
  const byCategory = {};
  products.forEach(product => {
  byCategory[product.category] = (byCategory[product.category] || 0) + 1;
});

  const summary = Object.entries(byCategory)
  .map(([cat, count]) => `${cat}: ${count}`)
  .join(', ');

  document.getElementById('categorySummary').textContent = summary || '-';

  // Last added product
  if (products.length > 0) {
  const lastProduct = products[products.length - 1];
  document.getElementById('lastAdded').textContent =
  `${lastProduct.name} (${lastProduct.category})`;
} else {
  document.getElementById('lastAdded').textContent = '-';
}
}

  // Export products
  function exportProducts() {
  const dataStr = JSON.stringify(products, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  const exportFileDefaultName = `skateordie-products-${new Date().toISOString().split('T')[0]}.json`;

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);

  showNotification('Products exported successfully', 'success');
}

  // Clear localStorage
  function clearLocalStorage() {
  if (confirm('Are you sure you want to clear all product data? This cannot be undone.')) {
  localStorage.removeItem('skateordie_products');
  localStorage.removeItem('skateordie_categories');
  localStorage.removeItem('skateordie_cart');

  // Reset cart
  cart = [];
  updateCartUI();

  // Reset categories
  categories = ['Hoodies', 'Pants', 'Footwear', 'Accessories', 'T-Shirts', 'Jackets', 'Skateboards'];

  // Keep default products but clear any added ones
  // Filter only default products (IDs 1-50)
  products = products.filter(p => p.id <= 50);

  // Update UI
  loadCategories();
  loadExistingCategoriesList();
  updateProductSummary();
  loadProducts('all');

  showNotification('All data cleared successfully', 'success');
}
}

  // Restore default products
  function restoreDefaultProducts() {
  if (confirm('Restore default products? This will add all sample products back.')) {
  // Reload the page to get fresh default products
  location.reload();
}
}

  // Show notification
  function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  if (type === 'error') {
  notification.style.backgroundColor = '#ff4444';
}

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
  notification.style.animation = 'slideOut 0.3s ease';
  setTimeout(() => {
  document.body.removeChild(notification);
}, 300);
}, 3000);
}

  // Initialize with smooth animations
  setTimeout(() => {
  document.body.style.opacity = '1';
}, 100);
