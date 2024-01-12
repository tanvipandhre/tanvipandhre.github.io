"use strict";

/**
* To receive an email when the form is submitted
 */

const form = document.querySelector(".contact-form");
const button = form.querySelector(".btn");

button.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  const formData = new FormData(form);

  // send email using EmailJS API
  emailjs
    .send(
      "service_wsn6h5q",
      "template_np27v8o",
      {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      },
      "-a6JOJrXtVPHaI2JE"
    )
    .then((response) => {
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
    })
    .catch((error) => {
      alert(
        "There was an error submitting your message. Please try again later."
      );
    });
});
