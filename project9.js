const successnote =
  '<i class="fa-solid fa-circle-check" style="color: #0f5714"></i> Successful Submited';
const errornote =
  '<i class="fa-solid fa-circle-xmark" style="color: #ff0000"></i>  Please fix the error';
const invalidnote =
  '  <i class="fa-solid fa-circle-exclamation" style="color: #f6ee04"></i> Invalid input, check again"';

const Notificationbox = document.getElementById('toast-box');

function showtoast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  Notificationbox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
