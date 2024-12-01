document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate form fields
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Redirect to the main website
    alert("Signup successful! Redirecting...");
    window.location.href = "home.html"; // Replace 'home.html' with your homepage file
});
