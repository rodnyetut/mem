
// ===== ГЕНЕРАЦИЯ ЗВЁЗДНОГО НЕБА =====
function createStars() {
  const starsContainer = document.getElementById('stars');
  
  if (!starsContainer) return;
  
  // Очищаем контейнер
  starsContainer.innerHTML = '';
  
  // Определяем количество звезд в зависимости от размера экрана
  const isMobile = window.innerWidth <= 480;
  const starCount = isMobile ? 200 : 350;
  const bigStarCount = isMobile ? 15 : 30;
  
  // Обычные звёзды
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    star.style.animationDelay = Math.random() * 8 + 's';
    star.style.animationDuration = Math.random() * 5 + 3 + 's';
    
    const brightness = Math.random() * 0.6 + 0.3;
    star.style.opacity = brightness;
    star.style.boxShadow = `0 0 ${Math.random() * 8 + 3}px rgba(255, 255, 255, ${brightness})`;
    
    starsContainer.appendChild(star);
  }
  
  // Крупные звезды
  for (let i = 0; i < bigStarCount; i++) {
    const bigStar = document.createElement('div');
    bigStar.className = 'star';
    const size = Math.random() * 5 + 2;
    bigStar.style.width = size + 'px';
    bigStar.style.height = size + 'px';
    bigStar.style.left = Math.random() * 100 + '%';
    bigStar.style.top = Math.random() * 100 + '%';
    bigStar.style.animationDelay = Math.random() * 8 + 's';
    bigStar.style.animationDuration = Math.random() * 6 + 4 + 's';
    bigStar.style.opacity = Math.random() * 0.7 + 0.2;
    bigStar.style.boxShadow = `0 0 ${Math.random() * 12 + 8}px rgba(200, 220, 255, 0.8)`;
    starsContainer.appendChild(bigStar);
  }
}

// Данные
const defaults = {
  name: "Карелина Миля Илларионовна",
  dates: "1938 — 2013",
  bio: "<p>Родилась в 1938 году. Её жизнь пришлась на непростые годы, но она сохранила доброту, достоинство и умение радоваться простым вещам. Работала, растила детей, стала опорой для внуков, буквально жила ради них работая даже на пенсии. Её помнят как человека с тихим голосом, мудрым взглядом и открытым сердцем.</p>",
  photo: "photo.jpg",
  video: "https://github.com/levsergeevich324-prog/mem/raw/main/video.mp4"
};

// ===== ФУНКЦИЯ ДЛЯ НАСТРОЙКИ ВИДЕО =====
function setupVideo(videoElement) {
  if (!videoElement) return;
  
  videoElement.muted = true;
  videoElement.loop = true;
  videoElement.autoplay = true;
  videoElement.playsInline = true;
  videoElement.preload = 'auto';
  
  const playPromise = videoElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log('Автовоспроизведение не удалось:', error);
      videoElement.controls = true;
    });
  }
}

// ===== УСТАНОВКА КОНТЕНТА =====
function setContent() {
  const nameEl = document.getElementById('name');
  const datesEl = document.getElementById('dates');
  const bioEl = document.getElementById('bio');
  const photoEl = document.getElementById('photo');
  const videoEl = document.getElementById('video');
  
  if (nameEl) nameEl.textContent = defaults.name;
  if (datesEl) datesEl.textContent = defaults.dates;
  if (bioEl) bioEl.innerHTML = defaults.bio;
  
  if (photoEl) {
    photoEl.src = defaults.photo;
  }

  if (videoEl) {
    const sourceEl = videoEl.querySelector('source');
    if (sourceEl) {
      sourceEl.src = defaults.video;
    }
    videoEl.load();
    setupVideo(videoEl);
  }
}

// ===== МЕРЦАНИЕ ДАТЫ (1938 ⇄ 1935) =====
function createDateAnimation() {
  console.log('Запуск анимации даты'); // Для отладки
  
  const datesElement = document.getElementById('dates');
  if (!datesElement) {
    console.log('Элемент dates не найден');
    return;
  }
  
  console.log('Элемент dates найден:', datesElement.textContent);
  
  let isOriginal = true;
  const originalText = datesElement.textContent;
  
  // Проверяем, что текст содержит 1938
  if (!originalText.includes('1938')) {
    console.log('В тексте нет 1938');
    return;
  }
  
  // Добавляем стили для элемента
  datesElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease, color 0.3s ease';
  datesElement.style.cursor = 'pointer';
  
  // Создаем тултип
  const tooltip = document.createElement('span');
  tooltip.className = 'date-tooltip';
  tooltip.textContent = '1935 - настоящий год рождения';
  tooltip.style.cssText = `
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 30, 45, 0.95);
    color: #d8ecff;
    padding: 8px 16px;
    border-radius: 24px;
    font-size: 14px;
    font-family: 'Cormorant Garamond', serif;
    white-space: nowrap;
    border: 1px solid rgba(170, 200, 230, 0.4);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 100;
    letter-spacing: 1px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  `;
  
  // Устанавливаем относительное позиционирование для родителя
  datesElement.style.position = 'relative';
  datesElement.appendChild(tooltip);
  
  // Показываем тултип при наведении
  datesElement.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
  });
  
  datesElement.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
  
  // Функция смены даты
  function toggleDate() {
    // Эффект затухания
    datesElement.style.opacity = '0.5';
    datesElement.style.transform = 'scale(0.98)';
    datesElement.style.color = '#aac8e0';
    
    setTimeout(() => {
      if (isOriginal) {
        datesElement.textContent = originalText.replace('1938', '1935');
        console.log('Сменили на 1935');
      } else {
        datesElement.textContent = originalText;
        console.log('Сменили на 1938');
      }
      isOriginal = !isOriginal;
      
      // Возвращаем нормальный вид
      datesElement.style.opacity = '1';
      datesElement.style.transform = 'scale(1)';
      datesElement.style.color = '#c8d9ec';
    }, 300);
  }
  
  // Запускаем интервал
  console.log('Запускаем интервал смены даты');
  setInterval(toggleDate, 2500);
}

// ===== ОБРАБОТЧИК СОБЫТИЙ =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM загружен, инициализация...');
  
  // Устанавливаем контент
  setContent();
  
  // Создаем звезды
  createStars();
  
  // Запускаем анимацию даты с задержкой
  setTimeout(createDateAnimation, 500);
});

// Обработчик resize для звезд
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    createStars();
  }, 200);
});
