document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    localStorage.setItem('username', newUsername);
    localStorage.setItem('email', newEmail);
    localStorage.setItem('password', newPassword);
    document.getElementById('message').textContent = 'Usuário registrado com sucesso!';
    document.getElementById('message').style.color = 'green';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('message').textContent = 'Login bem-sucedido!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Nome de usuário ou senha incorretos.';
        document.getElementById('message').style.color = 'red';
    }
});

document.getElementById('generatePassword').addEventListener('click', function() {
    const newPassword = generatePassword();
    document.getElementById('newPassword').value = newPassword;
});

function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}
