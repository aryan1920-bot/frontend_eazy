document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform AJAX login request here (send email and password to server)
    // Example using fetch:
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle login response
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault();
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    // Perform AJAX signup request here (send email and password to server)
    // Example using fetch:
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: signupEmail, password: signupPassword }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle signup response
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});
