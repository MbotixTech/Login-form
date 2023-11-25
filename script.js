document.addEventListener('DOMContentLoaded', function () {
  function addAnimation(button) {
    button.classList.add('animated');
    setTimeout(() => {
      button.classList.remove('animated');
    }, 500);
  }

  function checkPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
      passwordError.textContent = 'Passwords do not match!';
      passwordError.classList.add('error');
      passwordError.classList.remove('success');
      return false;
    }

    passwordError.textContent = 'Passwords match!';
    passwordError.classList.remove('error');
    passwordError.classList.add('success');
    return true;
  }

  document.getElementById('password').addEventListener('input', checkPassword);

  document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi logika otentikasi (ganti ini dengan panggilan API otentikasi sesungguhnya)
    const isAuthenticated = await simulateAuthentication(username, password);

    if (isAuthenticated) {
      // Redirect atau tindakan selanjutnya setelah login sukses
      console.log(`User ${username} successfully logged in`);
    } else {
      // Tampilkan pesan kesalahan jika otentikasi gagal
      console.log(`Authentication failed for user ${username}`);
    }

    // Tambahkan animasi putar pada tombol setelah diklik
    addAnimation(this.querySelector('button'));
  });

  document.getElementById('forgotPasswordForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Simulasi logika reset password (ganti ini dengan panggilan API reset password sesungguhnya)
    const resetSuccess = await simulatePasswordReset(email);

    if (resetSuccess) {
      // Tampilkan pesan sukses atau arahkan ke halaman konfirmasi reset password
      console.log(`Password reset request for email ${email} was successful`);
    } else {
      // Tampilkan pesan kesalahan jika reset password gagal
      console.log(`Password reset request for email ${email} failed`);
    }
  });

  document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const isValidPassword = checkPassword();

    if (isValidPassword) {
      const password = document.getElementById('password').value;

      // Simulasi logika registrasi (ganti ini dengan panggilan API registrasi sesungguhnya)
      const registrationSuccess = await simulateRegistration(fullName, email, password);

      if (registrationSuccess) {
        // Tampilkan pesan sukses atau arahkan ke halaman konfirmasi registrasi
        console.log(`Registration attempt with name: ${fullName}, email: ${email}, password: ${password} was successful`);
        addAnimation(this.querySelector('button'));
      } else {
        // Tampilkan pesan kesalahan jika registrasi gagal
        console.log(`Registration attempt with name: ${fullName}, email: ${email}, password: ${password} failed`);
      }
    }
  });

  // Simulasi fungsi otentikasi
  async function simulateAuthentication(username, password) {
    // Ganti ini dengan panggilan API otentikasi sesungguhnya
    // Misalnya, Anda dapat menggunakan fetch atau axios untuk berkomunikasi dengan backend
    // dan backend akan memeriksa apakah kombinasi username dan password valid
    return new Promise((resolve) => {
      setTimeout(() => {
        // Untuk tujuan simulasi, kita selalu mengembalikan true
        resolve(true);
      }, 1000);
    });
  }

  // Simulasi fungsi reset password
  async function simulatePasswordReset(email) {
    // Ganti ini dengan panggilan API reset password sesungguhnya
    // Misalnya, Anda dapat menggunakan fetch atau axios untuk berkomunikasi dengan backend
    // dan backend akan mengirimkan email dengan instruksi reset password
    return new Promise((resolve) => {
      setTimeout(() => {
        // Untuk tujuan simulasi, kita selalu mengembalikan true
        resolve(true);
      }, 1000);
    });
  }

  // Simulasi fungsi registrasi
  async function simulateRegistration(fullName, email, password) {
    // Ganti ini dengan panggilan API registrasi sesungguhnya
    // Misalnya, Anda dapat menggunakan fetch atau axios untuk berkomunikasi dengan backend
    // dan backend akan membuat akun baru dengan informasi yang diberikan
    return new Promise((resolve) => {
      setTimeout(() => {
        // Untuk tujuan simulasi, kita selalu mengembalikan true
        resolve(true);
      }, 1000);
    });
  }
});
