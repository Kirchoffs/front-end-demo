const errorBtn = document.querySelector('.btn-error');
const successBtn = document.querySelector('.btn-success');
const warningBtn = document.querySelector('.btn-warning');
const infoBtn = document.querySelector('.btn-info');

const snackbarContainer = document.getElementById('snackbar-container');

errorBtn.addEventListener('click', () => {
  snackbar('error', '<b>Error: </b> Form validation error', 3000);
});

successBtn.addEventListener('click', () => {
  snackbar('success', '<b>Success: </b> Submitted successfully', 3000);
});

warningBtn.addEventListener('click', () => {
  snackbar('warning', '<b>Warning: </b> Filename is not formatted', 3000);
});

infoBtn.addEventListener('click', () => {
  snackbar('info', '<b>Info: </b> System will be updated soon', 3000);
});

function snackbar(type, msg, time) {
  const paragraph = document.createElement('p');
  paragraph.classList.add('snackbar');
  paragraph.innerHTML = `${msg} <span> &times </span>`;

  if (type === 'error') {
    paragraph.classList.add('error');
  } else if (type === 'success') {
    paragraph.classList.add('success');
  } else if (type === 'warning') {
    paragraph.classList.add('warning');
  } else if (type === 'info') {
    paragraph.classList.add('info');
  }
  
  snackbarContainer.appendChild(paragraph);

  setTimeout(() => {
    paragraph.classList.add("fade-out");
    setTimeout(() => {
      snackbarContainer.removeChild(paragraph);
    }, time);    
  }, 3000);
}
