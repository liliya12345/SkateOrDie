// ===== MODERN JAVASCRIPT =====

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setupHeaderScroll();
  setupMobileMenu();
  setupSmoothScrolling();

});

// Header Scroll Effect
function setupHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Mobile Menu
function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Check viewport width
    function checkViewport() {
      if (window.innerWidth <= 768) {
        toggle.style.display = 'inline-flex';
        nav.style.display = 'none';
      } else {
        toggle.style.display = 'none';
        nav.style.display = 'flex';
      }
    }

    checkViewport();
    window.addEventListener('resize', checkViewport);
  }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      // Handle filter links
      if (targetId.startsWith('#filter-')) {
        e.preventDefault();
        const category = targetId.replace('#filter-', '');
        if (typeof filterProducts === 'function') {
          filterProducts(category === 'all' ? 'all' : category.charAt(0).toUpperCase() + category.slice(1));
        }
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}


function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  console.log("")
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 24px;
    background-color: ${type === 'success' ? 'var(--success)' : 'var(--accent)'};
    color: white;
    padding: 16px 24px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    z-index: 9999;
    transform: translateX(120%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 320px;
    font-weight: 500;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(120%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize with smooth animations
setTimeout(() => {
  document.body.style.opacity = '1';
}, 100);
ocument.addEventListener('DOMContentLoaded', function() {
  // Проверяем, была ли форма только что отправлена
  const urlParams = new URLSearchParams(window.location.search);
  const formSubmitted = urlParams.get('form');

  if (formSubmitted === 'submitted') {
    // Показываем сообщение об успехе
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
      successMessage.style.display = 'block';
      successMessage.scrollIntoView({ behavior: 'smooth' });
    }

    // Очищаем URL от параметров
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Добавляем обработчик для кнопки отправки
  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    const form = submitBtn.closest('form');

    form.addEventListener('submit', function() {
      // Показываем состояние загрузки
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Восстанавливаем кнопку через 3 секунды (на случай если страница не перезагрузится)
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }
});
