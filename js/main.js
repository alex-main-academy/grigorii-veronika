// AOS animation
AOS.init({
  once: true
});

document.getElementById('form').addEventListener('submit', function (event) {
  var submitButton = document.getElementById('submitBtn');

  if (submitButton.disabled) {
    event.preventDefault(); // Если уже заблокировано, предотвращаем отправку
    return;
  }

  submitButton.disabled = true; // Блокируем кнопку
  submitButton.innerText = 'Отправка...'; // Меняем текст

  setTimeout(() => {
    submitButton.disabled = false; // Через 5 секунд снова разрешаем отправку
    submitButton.innerText = 'Отправить';
  }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const preloadImages = (imagePaths) => {
    return Promise.all(
      imagePaths.map((path) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  const images = ['img/bg-top.png', 'img/bg-bottom.png'];

  const wrapper = document.querySelector('.wrapper');
  if (wrapper) {
    wrapper.style.visibility = 'hidden';
  }

  preloadImages(images)
    .then(() => {
      if (wrapper) {
        wrapper.style.visibility = 'visible';
      }
      document.body.classList.add('animation-ready');
    })
    .catch((error) => console.error('Ошибка загрузки изображения:', error));
});
