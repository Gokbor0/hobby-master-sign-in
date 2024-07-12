document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('discount-form');
  const sendOtpButton = document.getElementById('send-otp');
  const generateCodeButton = document.getElementById('generate-code');
  const otpField = document.getElementById('otp-field');
  const animation = document.getElementById('animation');
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  sendOtpButton.addEventListener('click', function() {
    // Mock sending OTP
    alert('OTP sent to your phone number.');
    // Enable OTP input field and generate code button
    otpField.style.display = 'block';
    generateCodeButton.style.display = 'block';
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Mock OTP verification and discount code generation
    const otp = document.getElementById('otp').value;
    if (otp === '1234') { // Replace with actual OTP verification logic
      alert('OTP verified. Your discount code is: DISC2024');
      animation.style.display = 'block';
      animation.classList.remove('animation-hidden');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
