// Get elements
const username = document.getElementById("name");
const password = document.getElementById("password");
const loginBtn = document.querySelector("button");

// Login button click
loginBtn.addEventListener("click", function () {

    let name = username.value.trim();
    let pass = password.value.trim();

    // Check empty fields
    if (name === "" || pass === "") {
        alert("Please enter Username and Password.");
        return;
    }

    // Get user data from localStorage
    let user = JSON.parse(localStorage.getItem(name));

    // Check user
    if (user === null) {
        alert("User not found!");
        return;
    }

    // Check password
    if (user.password === pass) {
        alert("Login Successful!");

        // Save login status
        localStorage.setItem("loggedInUser", name);

        // Redirect to home page
        window.location.href = "index.html";
    } else {
        alert("Incorrect Password!");
    }
});