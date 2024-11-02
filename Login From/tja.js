document.querySelector("#myForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Clear previous error messages
    document.querySelector("#usernameError").textContent = "";
    document.querySelector("#emailError").textContent = "";

    // Validate username
    const username = document.querySelector("#username").value;
    if (username.length < 3) {
        document.querySelector("#usernameError").textContent = "Must be at least 3 characters.";
        isValid = false;
    }

    // Validate email
    const email = document.querySelector("#email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.querySelector("#emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
