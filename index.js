const formToggler = document.getElementById('formToggler');
const form = document.getElementById('form');

formToggler.addEventListener('click', function () {
  form.toggleAttribute('hidden');
});
