const checkbox = document.getElementById('themeSwitch');

// Check if there's a theme preference saved in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    checkbox.checked = savedTheme === 'dark';
}

// Function to handle theme toggle
function handleThemeChange() {
    if (checkbox.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
}

// Event listener for theme toggle
checkbox.addEventListener('change', handleThemeChange);