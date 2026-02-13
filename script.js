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

// Устанавливаем контент
function setContent() {
  const nameEl = document.getElementById('name');
  const datesEl = document.getElementById('dates');
  const bioEl = document.getElementById('bio');
  const photoEl = document.getElementById('photo');
  const videoEl = document.getElementById('video');
  
  if (nameEl) nameEl.textContent = defaults.name;
  if (datesEl) datesEl.textContent = defaults.dates;
  if (bioEl) bioEl.innerHTML = defaults.bio;
  if (photoEl) photoEl.src = defaults.photo;

  if (videoEl) {
    const sourceEl = videoEl.querySelector('source');
    if (sourceEl) {
      sourceEl.src = defaults.video;
      videoEl.load();
    }
  }
}

// Пересоздаем звезды при изменении размера окна
let resizeTimer;
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    createStars();
  }, 200);
}

// Запуск
document.addEventListener('DOMContentLoaded', function() {
  setContent();
  createStars();
  window.addEventListener('resize', handleResize);
});

// Очистка
window.addEventListener('beforeunload', function() {
  window.removeEventListener('resize', handleResize);
});
