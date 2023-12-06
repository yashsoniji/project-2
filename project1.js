let isDOBopen = false;
let DateOfBirth;
const settingCogEL = document.getElementById('settingicon');
const settingcontentEL = document.getElementById('settingcontent');
const initialtextEL = document.getElementById('initialtext');
const afterdobbtnEL = document.getElementById('afterdobbtn');
const dobButtonEL = document.getElementById('dobButtton');
const dobInputEL = document.getElementById('dobInput');

const yearEL = document.getElementById('year');
const monthEL = document.getElementById('month');
const dayEL = document.getElementById('day');
const hourEL = document.getElementById('hour');
const minuteEL = document.getElementById('minute');
const secondEL = document.getElementById('second');

const toggleDateOfBirth = () => {
  if (isDOBopen) {
    settingcontentEL.classList.add('hide');
  } else {
    settingcontentEL.classList.remove('hide');
  }
  isDOBopen = !isDOBopen;

  console.log('toggle', isDOBopen);
};
const updateage = () => {
  const currentDate = new Date();
  console.log({ currentDate });
  const dateDiff = currentDate - DateOfBirth;
  console.log('dateDiff', dateDiff);
const yearValue = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
const monthValue = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
const dayValue = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
const hourValue = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
const minuteValue = Math.floor(dateDiff / (1000 * 60)) % 60;
const secondValue = Math.floor(dateDiff / 1000) % 60;

yearEL.innerHTML = yearValue;
monthEL.innerHTML = monthValue;
dayEL.innerHTML = dayValue;
hourEL.innerHTML = hourValue;
minuteEL.innerHTML = minuteValue;
secondEL.innerHTML = secondValue;
};

const setDOBhandler = () => {
  const dateString = dobInputEL.value;


  DateOfBirth = dateString ? new Date(dateString) : null;

  if (DateOfBirth) {
    initialtextEL.classList.add('hide');
    afterdobbtnEL.classList.remove('hide');
    setInterval(() => updateage(), 1000);
  } else {
    afterdobbtnEL.classList.add('hide');
    initialtextEL.classList.remove('hide');
  }
};

setDOBhandler();

settingCogEL.addEventListener('click', toggleDateOfBirth);
dobButtonEL.addEventListener('click', setDOBhandler);
