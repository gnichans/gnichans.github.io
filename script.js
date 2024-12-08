document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn việc reload trang
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
