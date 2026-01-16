

const authForm = document.getElementById("authForm");
const toggleAuth = document.getElementById("toggleAuth");
const submitBtn = document.getElementById("submitBtn");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("authForm");
const emailInput=document.getElementById("email");
const nameInput=document.getElementById("name");
const passwordInput=document.getElementById("password");
let isLogin = true; // false = signup, true = login

// Toggle between Login and Create Account
toggleAuth.addEventListener("click", () => {
  isLogin=!isLogin;

  if (isLogin) {
    isLogin=true;
    submitBtn.textContent = "Login";
    confirmPassword.required=false;
    nameInput.required=false;
    nameInput.style.display="none";
    confirmPassword.style.display = "none";
    
    toggleAuth.textContent = "Create Account";
  } else {
    submitBtn.textContent = "Create Account";
    confirmPassword.style.display = "block";
    confirmPassword.required = true;
    nameInput.style.display = "block";
    nameInput.required = true;

    toggleAuth.textContent = "Login";
  }
});

// Handle form submission
form.onsubmit = async (e) => {
  e.preventDefault();
  

  const email = emailInput.value;
  const password = passwordInput.value;
  const name=nameInput.value;
  if (confirmPassword.value!=password && !isLogin){
    alert("passwords do not match");
    return;
  }
  let payload;
  let url;

if (isLogin) {
    // LOGIN → only email & password
    submitBtn.textContent="Logging in....";
    submitBtn.disabled=true;
    submitBtn.style.cursor="progress";
    url = "https://kogoma-server.onrender.com/auth/login";
    payload = {
      email,
      password
    };
  } else {
    submitBtn.textContent="Creating Account....";
    submitBtn.disabled=true;
    submitBtn.style.cursor="progress";
    // REGISTER → email & password (+ confirm password check)
    url = "https://kogoma-server.onrender.com/auth/register";
    payload = {
        name,
      email,
      password
    };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (!res.ok) { 
    if (isLogin) {
      submitBtn.textContent = "Login";
      submitBtn.disabled=false;
    submitBtn.style.cursor="pointer";
    }else {
      submitBtn.disabled=false;
      submitBtn.style.cursor="pointer";
      submitBtn.textContent = "Create Account";
    }
  
    alert(data.detail || "Something went wrong");
    return;
  }

  if (isLogin) {
    localStorage.setItem("token", data.access_token);
    
    // Decode JWT payload
    const payload = JSON.parse(atob(data.access_token.split(".")[1]));
    
    if (payload.role === "admin") {
        window.location.href = "https://kogoma-server.onrender.com/staff-frontend/";
    } else if (payload.role === "staff") {
      pass
        // window.location.href = "staff-dashboard.html";
    } else {
        window.location.href = "https://kogoma-health-solution.vercel.app/Dashboard/"; // normal user
    }
    
  } else {
    window.location.href="https://kogoma-health-solution.vercel.app/Dashboard/";
  }
};




