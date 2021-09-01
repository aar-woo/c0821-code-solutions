var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  var obj = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('User data:', obj);
  $contactForm.reset();
}
