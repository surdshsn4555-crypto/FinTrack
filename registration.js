// Get elements
const username = document.getElementById("name");
const password = document.getElementById("password");
const registerBtn = document.querySelector("button");

// Register button click
registerBtn.addEventListener("click", function () {

    let name = username.value.trim();
    let pass = password.value.trim();
 
    // Validation
    if (name === "" || pass === "") {
        alert("Please fill all fields.");
        return;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Check if username already exists
    if (localStorage.getItem(name)) {
        alert("Username already exists!");
        return;
    }

    //c
    if (localStorage.getItem(pass)) {
        alert("password already exists!")
        return;
    }

    // Save data in localStorage
    const user = {
        username: name,
        password: pass
    };

    localStorage.setItem(name, JSON.stringify(user));
    localStorage.setItem(password, JSON.stringify(user));

    alert("Registration Successful!");

    // Clear inputs
    username.value = "";
    password.value = "";

    // Redirect to login page
    window.location.href = "login.html";

     localStorage.setItem("username", name);
    localStorage.setItem("password", pass);
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";
});