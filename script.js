const message =
  "Thank you for contacting us. The Kingdom will enjoy to respond shortly.";

document
  .getElementById("contactform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}
emailIsValid("jf.levasseur@gmail@jf.com"); // false
emailIsValid("jfelix.levasseur@gmail.com"); // true
