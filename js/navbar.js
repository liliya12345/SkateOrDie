// ===== NAVBAR CATEGORIES =====

let navbarCategories = [];

// Initialize navbar categories
document.addEventListener('DOMContentLoaded', function() {
  loadNavbarCategories();
});

// Загрузить категории для навигации
function loadNavbarCategories() {
  const savedCategories = localStorage.getItem('skateordie_categories');

  if (savedCategories) {
    navbarCategories = JSON.parse(savedCategories);
  } else {
    // Если в localStorage нет категорий, используем дефолтные
    navbarCategories = ['Hoodies', 'Pants', 'Footwear', 'Accessories', 'T-Shirts', 'Jackets', 'Skateboards'];
  }

  // Обновить dropdown в навигации
  updateNavbarDropdown();
}

// Обновить dropdown категорий в навигации
function updateNavbarDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dropdownContent) return;

  // Очистить существующие элементы
  dropdownContent.innerHTML = '';

  // Добавить "All Products"
  const allLink = document.createElement('a');
  allLink.href = 'shop.html#filter-all';
  allLink.className = 'dropdown-item';
  allLink.innerHTML = '<i class="fas fa-grid"></i> All Products';
  dropdownContent.appendChild(allLink);

  // Добавить все категории
  navbarCategories.forEach(category => {
    const categoryLink = document.createElement('a');
    categoryLink.href = `shop.html#filter-${category.toLowerCase()}`;
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
    dropdownContent.appendChild(categoryLink);
  });
}

// Функция для фильтрации продуктов (используется при клике на категорию)
function filterProducts(category) {
  // Сохраняем выбранную категорию в localStorage
  localStorage.setItem('skateordie_selected_category', category);

  // Перенаправляем на shop.html
  window.location.href = `shop.html?category=${category.toLowerCase()}`;
}
