// Добавьте это в ваш существующий script.js или создайте отдельный файл
// document.addEventListener('DOMContentLoaded', function() {
//   // Проверяем, была ли форма только что отправлена
//   const urlParams = new URLSearchParams(window.location.search);
//   const formSubmitted = urlParams.get('form');
//
//   if (formSubmitted === 'submitted') {
//     // Показываем сообщение об успехе
//     const successMessage = document.getElementById('successMessage');
//     if (successMessage) {
//       successMessage.style.display = 'block';
//       successMessage.scrollIntoView({ behavior: 'smooth' });
//     }
//
//     // Очищаем URL от параметров
//     window.history.replaceState({}, document.title, window.location.pathname);
//   }
//
//   // Добавляем обработчик для кнопки отправки
//   const submitBtn = document.getElementById('submitBtn');
//   if (submitBtn) {
//     const form = submitBtn.closest('form');
//
//     form.addEventListener('submit', function() {
//       // Показываем состояние загрузки
//       const originalText = submitBtn.innerHTML;
//       submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
//       submitBtn.disabled = true;
//
//       // Восстанавливаем кнопку через 3 секунды (на случай если страница не перезагрузится)
//       setTimeout(() => {
//         submitBtn.innerHTML = originalText;
//         submitBtn.disabled = false;
//       }, 3000);
//     });
//   }
// });
