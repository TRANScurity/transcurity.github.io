// Provide central function that enables/disables form submit buttons depending on the validation
function updateFormSubmitButtons() {
  for (const form of document.getElementsByTagName('form')) {
    const submit = form.querySelector('[type="submit"]');
    if (submit === null)
      continue;

    let formValid = true;
    for (const field of form.querySelectorAll('input, textarea, select')) {
      if (field.hasAttribute('faulty') || !field.checkValidity()) {
        formValid = false;
        break;
      }
    }

    submit.disabled = !formValid;
    form.setAttribute('action', formValid ? form.dataset.posturl : 'https://httpbin.org/post');
  }
}

// Required for https://formspree.io/ in contact form in order to clear fields after submit
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
  updateFormSubmitButtons();
}

// refreshes the spacer sizes which must match the navigation menu's height
function refreshNavigationSpacerHeight() {
  const height = document.querySelector('header')?.clientHeight;
  const domElements = document.querySelectorAll('.navigation-header-spacer');
  domElements.forEach(e => e.style.height = `${height + 1}px`);
}
