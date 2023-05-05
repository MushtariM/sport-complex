'use strict';

const signUpButtonEl = document.getElementById('sign-up-button');
signUpButtonEl.onclick = showForm;

const closeFormEl = document.getElementById('close-form');
  closeFormEl.onclick = hideForm;


function showForm() {
      const signUpFormEl = document.getElementById('sign-up-form');
      signUpFormEl.classList.remove('hidden', 'slit-out-vertical');
      signUpFormEl.classList.add('slit-in-vertical');
  }

function hideForm() {
      const signUpFormEl = document.getElementById('sign-up-form');
      signUpFormEl.classList.remove('slit-in-vertical');
      signUpFormEl.classList.add('slit-out-vertical');
      setTimeout(()=> {signUpFormEl.classList.add('hidden')}, 500);
}


