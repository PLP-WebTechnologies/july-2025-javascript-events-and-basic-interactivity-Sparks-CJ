// ===============================
// Part 1: Event Handling
// ===============================
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});


// ===============================
// Part 2: Interactive Elements
// ===============================

// 1. Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// 3. Collapsible FAQ
const faqTitle = document.getElementById("faqTitle");
const faqAnswer = document.getElementById("faqAnswer");

faqTitle.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});


// ===============================
// Part 3: Form Validation
// ===============================
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation (basic regex)
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Enter a valid email.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show feedback
  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.textContent = errors.join(" ");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    signupForm.reset();
  }
});
