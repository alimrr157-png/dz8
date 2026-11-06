// Находим кнопку на странице
const themeToggleBtn = document.getElementById('theme-toggle');

// 1. Проверяем тему при загрузке страницы
const savedTheme = localStorage.getItem('theme');

// Если в localStorage записана тёмная тема, применяем её
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// 2. Обработчик клика по кнопке
themeToggleBtn.addEventListener('click', () => {
    // Переключаем класс 'dark-theme' у body
    document.body.classList.toggle('dark-theme');

    // Проверяем, активна ли тёмная тема сейчас
    const isDark = document.body.classList.contains('dark-theme');

    // Сохраняем результат в localStorage
    if (isDark) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});