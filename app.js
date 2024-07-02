function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getUTCDay()];

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = day;
}

// Initialized time update
updateTime();
setInterval(updateTime, 1000);

// added Theme switch functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Added event listener for theme switch
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
