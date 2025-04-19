const userData = [
    { "username": "Abhishek", "password": "123456789" },
    { "username": "Barghav", "password": "123456789" },
    { "username": "Chandu", "password": "123456789" },
    { "username": "Divya", "password": "123456789" },
    { "username": "Eshwar", "password": "123456789" },
    { "username": "Fathima", "password": "123456789" },
    { "username": "Ganga", "password": "123456789" },
    { "username": "Hasini", "password": "123456789" },
    { "username": "Rajini", "password": "123456789" },
    { "username": "Rishi", "password": "123456789" },
    { "username": "Pavithra", "password": "password" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validate the username and password against the userData array
    const user = userData.find(user => user.username === username && user.password === password);

    if (user) {
        sessionStorage.setItem('username', username); // Store username in session storage
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        alert('Invalid Username/Password');
    }
});
