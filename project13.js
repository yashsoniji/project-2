let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = function () {
  if (password.type == 'password') {
      password.type = 'text';
      eyeicon.classList.remove('fa-eye-slash')
      eyeicon.classList.add('fa-eye')
    } else {
        password.type = 'password';
        eyeicon.classList.add('fa-eye-slash')
        eyeicon.classList.remove('fa-eye')
  }
};
