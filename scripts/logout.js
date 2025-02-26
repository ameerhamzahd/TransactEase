const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', (event) => {
    if (logoutBtn) {
        window.location.href = 'index.html';
    }
});