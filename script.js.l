document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    displayUserInfo();
});

function displayUserInfo() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    if (username && email) {
        document.getElementById('userInfo').innerHTML = `<p>Nome de Usuário: ${username}</p><p>Email: ${email}</p>`;
    }
}

// Exibe as informações do usuário ao carregar a página
window.onload = displayUserInfo;
