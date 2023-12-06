const upperset = 'ABCDEFGHIJKLMNOPQRSTUVWXYVZ';
const lowerset = 'abcdefghijklmnopqrstuvwxyz';
const numberset = '1234567890';
const symbolset = '!@#$%^&*()_+/';


//selectors
const textarea = document.getElementById('text-area');
const totalchar = document.getElementById('total-char');
const upperinput = document.getElementById('uppercase');
const lowerinput = document.getElementById('lowercase');
const numbers = document.getElementById('number');
const symbol = document.getElementById('symbol');

const getrandomdata = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatepassword = (password = "") => {
  if (upperinput.checked) {
    password += getrandomdata(upperset);
  }
  if (lowerinput.checked) {
    password += getrandomdata(lowerset);
  }
  if (numbers.checked) {
    password += getrandomdata(numberset);
  }
  if (symbol.checked) {
    password += getrandomdata(symbolset);
  }
  if (password.length < totalchar.value) {
    return generatepassword(password);
  }
  textarea.innerHTML = truncateString(password,totalchar.value)
};

generatepassword();

document.getElementById('btn').addEventListener('click', function () {
  generatepassword();
});

function truncateString(str, num) {
  if ((str, length > num)) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
