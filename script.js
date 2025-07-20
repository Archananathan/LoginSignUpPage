function toggleForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
  }
}

function validateLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!username || !password) {
    alert('Please fill in both Username and Password.');
    return false;
  }

  alert('Login successful!');
  return true;
}

function validateSignup() {
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();

  if (!username || !email || !phone || !password || !confirmPassword) {
    alert('Please fill in all fields.');
    return false;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Updated phone validation
  const phonePattern = /^[6-9][0-9]{9}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }

  alert('Signup successful!');
  return true;
}

