document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  const msg = document.getElementById("message");

  if (data.success) {
    msg.style.color = "green";
    msg.innerText = "Login Successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "/welcome";
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.innerText = data.message;
  }
});
