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
