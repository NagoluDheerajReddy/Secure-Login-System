const API = "http://localhost:5000/api/auth";

async function register() {
    const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    });

    const data = await res.json();
    alert(data.message || "Error");
}

async function login() {
    const res = await fetch(`${API}/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    });

    const data = await res.json();

    if (res.ok) {
        window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }
}

async function logout() {
    await fetch(`${API}/logout`, {
        credentials: "include"
    });

    window.location.href = "login.html";
}