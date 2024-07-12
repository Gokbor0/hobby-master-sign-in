// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-B_IJZp_TR8gv_FNmpRY2O6Gli4h-seY",
  authDomain: "hobby-master-sign-in.firebaseapp.com",
  projectId: "hobby-master-sign-in",
  storageBucket: "hobby-master-sign-in.appspot.com",
  messagingSenderId: "162224719188",
  appId: "1:162224719188:web:6826edca825f95dce9f4c1",
  measurementId: "G-ZHCB6LGXL0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

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

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    // Mock OTP verification and discount code generation
    const otp = document.getElementById('otp').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (otp === '1234') { // Replace with actual OTP verification logic
      alert('OTP verified. Your discount code is: DISC2024');
      
      // Store user data in Firestore
      try {
        await db.collection('users').add({
          name: name,
          email: email,
          phone: phone,
          discountCode: 'DISC2024'
        });
        animation.style.display = 'block';
        animation.classList.remove('animation-hidden');
      } catch (error) {
        console.error('Error writing document: ', error);
      }
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
