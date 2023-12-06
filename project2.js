const btn = document.getElementById('btn');

const getcolor = () => {
  const randomnumber = Math.floor(Math.random() * 16777215);
  const randomcode = '#' + randomnumber.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.getElementById('color-code').innerText = randomcode;
};
btn.addEventListener('click', getcolor);
getcolor();
