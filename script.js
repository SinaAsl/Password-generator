const display = document.getElementById("display");
const genBtn = document.getElementById("mainBtn");
const copyBtn = document.getElementById("copy");

const passwordLength = 13;
var chars =
  "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

genBtn.addEventListener("click", () => {
  let randomChars = "";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    randomChars = Math.floor(Math.random() * chars.length);
    password += chars[randomChars];
  }
  display.value = password;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(password);
    alertBox.style.display = "block";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 2000);
  });
});