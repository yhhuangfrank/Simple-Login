const LoginForm = document.querySelector("#LoginForm");
if (LoginForm) {
  LoginForm.addEventListener("submit", function onFormSubmitted(e) {
    if (!LoginForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    LoginForm.classList.add("was-validated");
  });
}
