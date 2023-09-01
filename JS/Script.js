function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("body-image");
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 18) { // Horas del día (6 AM a 5:59 PM)
        body.classList.remove("n-mode");
        body.classList.add("d-mode");
    } else { // Horas de la noche
        body.classList.remove("d-mode");
        body.classList.add("n-mode");
    }
});

