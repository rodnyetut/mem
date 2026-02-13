// ===== ГЕНЕРАЦИЯ ЗВЁЗДНОГО НЕБА =====
function createStars() {
  const starsContainer = document.getElementById('stars');
  
  // Очищаем контейнер на случай повторного вызова
  starsContainer.innerHTML = '';
  
  // Добавляем базовый темный фон, если его нет
  starsContainer.style.backgroundColor = '#0a0c12';
  
  // Обычные звёзды — 350 штук для большей плотности
  for (let i = 0; i < 350; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Разные размеры звезд
    const size = Math.random() * 4 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Разная анимация
    star.style.animationDelay = Math.random() * 8 + 's';
    star.style.animationDuration = Math.random() * 5 + 3 + 's';
    
    // Разная яркость
    const brightness = Math.random() * 0.7 + 0.3;
    star.style.opacity = brightness;
    star.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, ${brightness})`;
    
    starsContainer.appendChild(star);
  }
  
  // Добавляем несколько крупных звезд
  for (let i = 0; i < 30; i++) {
    const bigStar = document.createElement('div');
    bigStar.className = 'star';
    const size = Math.random() * 6 + 3;
    bigStar.style.width = size + 'px';
    bigStar.style.height = size + 'px';
    bigStar.style.left = Math.random() * 100 + '%';
    bigStar.style.top = Math.random() * 100 + '%';
    bigStar.style.animationDelay = Math.random() * 8 + 's';
    bigStar.style.animationDuration = Math.random() * 6 + 4 + 's';
    bigStar.style.opacity = Math.random() * 0.8 + 0.2;
    bigStar.style.boxShadow = `0 0 ${Math.random() * 15 + 10}px rgba(200, 220, 255, 0.9)`;
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
document.addEventListener('DOMContentLoaded', function() {
  // Заполняем данные
  document.getElementById('name').textContent = defaults.name;
  document.getElementById('dates').textContent = defaults.dates;
  document.getElementById('bio').innerHTML = defaults.bio;
  document.getElementById('photo').src = defaults.photo;

  const videoEl = document.getElementById('video');
  const sourceEl = videoEl.querySelector('source');
  if (sourceEl) {
    sourceEl.src = defaults.video;
    videoEl.load();
  }

  // Запускаем звёзды
  createStars();
});
