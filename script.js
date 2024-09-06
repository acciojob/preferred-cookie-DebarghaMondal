// Utility function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Utility function to get a cookie
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

// Load preferences from cookies
function loadPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Save preferences to cookies
function savePreferences(event) {
  event.preventDefault();
  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize, 365);
  setCookie('fontcolor', fontColor, 365);

  // Update the CSS variables to apply the changes immediately
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
}

// Attach event listener to the form
document.getElementById('preferences-form').addEventListener('submit', savePreferences);

// Load preferences on page load
window.addEventListener('load', loadPreferences);

