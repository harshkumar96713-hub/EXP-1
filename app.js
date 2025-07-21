// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); //


  const name = document.getElementById('validationCustom01').value.trim();
  const email = document.getElementById('validationCustom03').value.trim();
  const age = document.getElementById('validationCustom05').value.trim();

  if (name !== '' && email !== '' && age !== '') {
    alert('Registration Successful!');
  
  } 
});
