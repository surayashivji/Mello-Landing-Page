
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwhbX87KyIwJLLfKu-GQjGM1UdBW5wiyHofLBjIX3HbrYYUjW8/exec';
// var $form = $('form#email-list-form');
// $('#submit-form').on('click', function (e) {
//     e.preventDefault();
//     var jqxhr = $.ajax({
//         url: scriptURL,
//         method: "GET",
//         dataType: "json",
//         data: $form.serializeObject()
//     });
// })


const scriptURL = 'https://script.google.com/macros/s/AKfycbwhbX87KyIwJLLfKu-GQjGM1UdBW5wiyHofLBjIX3HbrYYUjW8/exec';
const form = document.forms['email-list-form']
// const successMessage = document.querySelector('.success-container')
// const errorMessage = document.querySelector('.js-error-message')
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => showSuccessMessage(response))
  .catch(error => showErrorMessage(error))
});

function showSuccessMessage (response) {
  console.log('Success!', response)
//   setTimeout(() => {
//     successMessage.classList.remove('is-hidden')
//   }, 500)
}

function showErrorMessage (error) {
  console.error('Error!', error.message)
//   setTimeout(() => {
//     errorMessage.classList.remove('is-hidden')
//   }, 500)
}

